import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-brand-cream text-brand-deep-green py-24">
      <div className="container mx-auto">
        <div className="text-center mb-16">
            <h1 className="text-5xl font-serif font-bold text-brand-deep-green">About Our Astrologer</h1>
        </div>
        <div className="grid md:grid-cols-5 gap-16 items-center">
          <div className="md:col-span-2">
            <Image
              src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643"
              alt="Portrait of the Astrologer"
              width={500}
              height={500}
              className="rounded-full shadow-2xl mx-auto"
            />
          </div>
          <div className="md:col-span-3">
            <h2 className="text-4xl font-serif font-bold mb-6 text-brand-deep-green">Jane Doe</h2>
            <h3 className="text-2xl font-semibold mb-6 text-brand-slate">A Lifetime of Cosmic Wisdom</h3>
            <p className="text-lg text-brand-deep-green mb-4">
              Our renowned astrologer, Jane Doe, has been guiding souls on their life paths for over 30 years. Her journey into the mystical world of astrology began at a young age, where she discovered an innate ability to understand the language of the stars.
            </p>
            <p className="text-lg text-brand-deep-green mb-4">
              What started as a personal passion soon blossomed into a lifelong dedication to helping others navigate the complexities of life with cosmic clarity. Jane&apos;s approach is a unique blend of ancient wisdom and modern insight.
            </p>
            <p className="text-lg text-brand-deep-green">
              She believes that astrology is not about predicting a fixed fate, but about empowering individuals with the knowledge to make conscious choices and manifest their true potential. Her readings are known for their accuracy, depth, and compassionate delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
