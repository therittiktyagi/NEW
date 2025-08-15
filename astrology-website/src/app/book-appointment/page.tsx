"use client";

import { useState } from 'react';
import { loadStripe, StripeCardElementOptions } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const services = [
  'Numerology',
  'Prasnology',
  'Mobile Numerology',
  'Vedic Astrology',
  'Color Therapy',
  'Watch Analysis',
  'Laal Kitaab',
  'Yantra Consultation',
];

const CARD_OPTIONS: StripeCardElementOptions = {
    iconStyle: 'solid',
    style: {
        base: {
            iconColor: '#283618',
            color: '#283618',
            fontWeight: '500',
            fontFamily: 'Lora, serif',
            fontSize: '16px',
            fontSmoothing: 'antialiased',
            ':-webkit-autofill': {
                color: '#fefae0',
            },
            '::placeholder': {
                color: '#606c38',
            },
        },
        invalid: {
            iconColor: '#bc6c25',
            color: '#bc6c25',
        },
    },
};

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [name, setName] = useState('');
  const [selectedService, setSelectedService] = useState(services[0]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [paymentSucceeded, setPaymentSucceeded] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      setLoading(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
        setLoading(false);
        return;
    }

    const res = await fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ service: selectedService }),
    });

    const data = await res.json();
    const clientSecret = data.clientSecret;

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: {
          name: name,
        },
      },
    });

    if (paymentResult.error) {
      setError(paymentResult.error.message || 'An unexpected error occurred.');
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        setPaymentSucceeded(true);
      }
    }
    setLoading(false);
  };

  if (paymentSucceeded) {
    return (
        <div className="text-center text-brand-deep-green">
            <h2 className="text-3xl font-bold text-brand-light-green">Payment Successful!</h2>
            <p className="text-brand-slate mt-2">Your appointment has been booked. You will receive a confirmation email shortly.</p>
        </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
        <div className="mb-8">
            <label htmlFor="name" className="block text-lg font-medium text-brand-deep-green mb-2">
                Full Name
            </label>
            <input
                id="name"
                name="name"
                type="text"
                className="w-full p-4 bg-brand-cream border border-brand-slate rounded-lg text-brand-deep-green focus:ring-brand-light-green focus:border-brand-light-green"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
        </div>

      <div className="mb-8">
        <label htmlFor="service" className="block text-lg font-medium text-brand-deep-green mb-2">
          Select a Service
        </label>
        <select
          id="service"
          name="service"
          className="w-full p-4 bg-brand-cream border border-brand-slate rounded-lg text-brand-deep-green focus:ring-brand-light-green focus:border-brand-light-green"
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
        >
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-8">
        <label className="block text-lg font-medium text-brand-deep-green mb-2">
            Card Details
        </label>
        <div className="p-4 bg-brand-cream border border-brand-slate rounded-lg">
            <CardElement options={CARD_OPTIONS} />
        </div>
      </div>

      {error && <div className="text-red-500 mb-4">{error}</div>}

      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full bg-brand-slate text-brand-cream py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity disabled:bg-brand-light-slate"
      >
        {loading ? 'Processing...' : 'Pay & Book Now'}
      </button>
    </form>
  );
};

export default function BookAppointmentPage() {
  return (
    <div className="bg-brand-cream text-brand-deep-green py-24">
      <div className="container mx-auto max-w-xl">
        <div className="text-center mb-12">
            <h1 className="text-5xl font-serif font-bold">Book an Appointment</h1>
            <p className="text-lg text-brand-deep-green mt-4">Secure your session with our esteemed astrologer in just a few clicks.</p>
        </div>
        <div className="bg-brand-light-green p-8 rounded-lg shadow-2xl">
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </div>
      </div>
    </div>
  );
}
