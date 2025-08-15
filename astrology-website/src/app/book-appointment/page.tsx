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
            iconColor: '#FFD700',
            color: '#a8b2d1',
            fontWeight: '500',
            fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
            fontSize: '16px',
            fontSmoothing: 'antialiased',
            ':-webkit-autofill': {
                color: '#fce883',
            },
            '::placeholder': {
                color: '#8892b0',
            },
        },
        invalid: {
            iconColor: '#ffc7ee',
            color: '#ffc7ee',
        },
    },
};

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
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
          name: 'Jenny Rosen', // This should be dynamic
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
        <div className="text-center text-white">
            <h2 className="text-3xl font-bold text-green-400">Payment Successful!</h2>
            <p className="text-brand-slate mt-2">Your appointment has been booked. You will receive a confirmation email shortly.</p>
        </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-8">
        <label htmlFor="service" className="block text-lg font-medium text-brand-light-slate mb-2">
          Select a Service
        </label>
        <select
          id="service"
          name="service"
          className="w-full p-4 bg-brand-light-blue border border-brand-slate rounded-lg text-brand-light-slate focus:ring-brand-gold focus:border-brand-gold"
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
        <label className="block text-lg font-medium text-brand-light-slate mb-2">
            Card Details
        </label>
        <div className="p-4 bg-brand-light-blue border border-brand-slate rounded-lg">
            <CardElement options={CARD_OPTIONS} />
        </div>
      </div>

      {error && <div className="text-red-400 mb-4">{error}</div>}

      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full bg-brand-gold text-brand-deep-blue py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity disabled:bg-brand-slate"
      >
        {loading ? 'Processing...' : 'Pay & Book Now'}
      </button>
    </form>
  );
};

export default function BookAppointmentPage() {
  return (
    <div className="bg-brand-deep-blue text-white py-24">
      <div className="container mx-auto max-w-xl">
        <div className="text-center mb-12">
            <h1 className="text-5xl font-serif font-bold">Book an Appointment</h1>
            <p className="text-lg text-brand-slate mt-4">Secure your session with our esteemed astrologer in just a few clicks.</p>
        </div>
        <div className="bg-brand-light-blue p-8 rounded-lg shadow-2xl">
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </div>
      </div>
    </div>
  );
}
