import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-07-30.basil',
});

const servicePrices: { [key: string]: number } = {
  'Numerology': 5000, // Price in cents
  'Prasnology': 6000,
  'Mobile Numerology': 4000,
  'Vedic Astrology': 7000,
  'Color Therapy': 3000,
  'Watch Analysis': 2500,
  'Laal Kitaab': 4500,
  'Yantra Consultation': 5500,
};

export async function POST(request: Request) {
  const { service } = await request.json();

  if (!service || !servicePrices[service]) {
    return NextResponse.json({ error: 'Invalid service' }, { status: 400 });
  }

  const amount = servicePrices[service];

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    return NextResponse.json({ error: 'Could not create payment intent' }, { status: 500 });
  }
}
