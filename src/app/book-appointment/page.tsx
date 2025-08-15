"use client";

import { useState } from 'react';

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

export default function BookAppointmentPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedService, setSelectedService] = useState(services[0]);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      name,
      email,
      service: selectedService,
      date,
      time,
    });
    setSubmitted(true);
  };

  if (submitted) {
    return (
        <div className="bg-brand-deep-blue text-white py-24">
            <div className="container mx-auto max-w-xl text-center">
                <h2 className="text-3xl font-bold text-green-400">Thank You!</h2>
                <p className="text-brand-slate mt-2">Your appointment request has been submitted. We will contact you shortly to confirm.</p>
            </div>
        </div>
    )
  }

  return (
    <div className="bg-brand-deep-blue text-white py-24">
      <div className="container mx-auto max-w-xl">
        <div className="text-center mb-12">
            <h1 className="text-5xl font-serif font-bold">Book an Appointment</h1>
            <p className="text-lg text-brand-slate mt-4">Fill out the form below to request your session.</p>
        </div>
        <div className="bg-brand-light-blue p-8 rounded-lg shadow-2xl">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                    <label htmlFor="name" className="block text-lg font-medium text-brand-light-slate mb-2">Full Name</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-3 bg-brand-deep-blue border border-brand-slate rounded-lg text-brand-light-slate" required />
                </div>
                <div>
                    <label htmlFor="email" className="block text-lg font-medium text-brand-light-slate mb-2">Email Address</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 bg-brand-deep-blue border border-brand-slate rounded-lg text-brand-light-slate" required />
                </div>
            </div>
            <div className="mb-6">
              <label htmlFor="service" className="block text-lg font-medium text-brand-light-slate mb-2">
                Select a Service
              </label>
              <select
                id="service"
                name="service"
                className="w-full p-3 bg-brand-deep-blue border border-brand-slate rounded-lg text-brand-light-slate"
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
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                    <label htmlFor="date" className="block text-lg font-medium text-brand-light-slate mb-2">Preferred Date</label>
                    <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full p-3 bg-brand-deep-blue border border-brand-slate rounded-lg text-brand-light-slate" required />
                </div>
                <div>
                    <label htmlFor="time" className="block text-lg font-medium text-brand-light-slate mb-2">Preferred Time</label>
                    <input type="time" id="time" value={time} onChange={(e) => setTime(e.target.value)} className="w-full p-3 bg-brand-deep-blue border border-brand-slate rounded-lg text-brand-light-slate" required />
                </div>
            </div>
            <button
              type="submit"
              className="w-full bg-brand-gold text-brand-deep-blue py-3 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
