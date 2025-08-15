import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-brand-deep-blue text-brand-light-slate py-24">
      <div className="container mx-auto">
        <div className="text-center mb-16">
            <h1 className="text-5xl font-serif font-bold text-white">About Our Astrologer</h1>
        </div>
        <div className="grid md:grid-cols-5 gap-16 items-center">
          <div className="md:col-span-2">
            <Image
              src="https://via.placeholder.com/500"
              alt="Portrait of the Astrologer"
              width={500}
              height={500}
              className="rounded-full shadow-2xl mx-auto"
            />
          </div>
          <div className="md:col-span-3">
            <h2 className="text-4xl font-serif font-bold mb-6 text-white">Jane Doe</h2>
            <h3 className="text-2xl font-semibold mb-6 text-brand-gold">A Lifetime of Cosmic Wisdom</h3>
            <p className="text-lg text-brand-slate mb-4">
              Our renowned astrologer, Jane Doe, has been guiding souls on their life paths for over 30 years. Her journey into the mystical world of astrology began at a young age, where she discovered an innate ability to understand the language of the stars.
            </p>
            <p className="text-lg text-brand-slate mb-4">
              What started as a personal passion soon blossomed into a lifelong dedication to helping others navigate the complexities of life with cosmic clarity. Jane's approach is a unique blend of ancient wisdom and modern insight.
            </p>
            <p className="text-lg text-brand-slate">
              She believes that astrology is not about predicting a fixed fate, but about empowering individuals with the knowledge to make conscious choices and manifest their true potential. Her readings are known for their accuracy, depth, and compassionate delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
