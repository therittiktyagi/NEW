import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-brand-deep-blue text-brand-light-slate">
      {/* Hero Section */}
      <section
        className="relative h-[calc(100vh-5rem)] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('https://negativespace.co/wp-content/uploads/2023/10/negative-space-woman-practicing-yoga-outdoors-at-sunset-scaled-e1697120010459-1160x773.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-6xl font-serif font-bold mb-4 text-shadow-lg">Discover Your Cosmic Path</h1>
          <p className="text-xl text-brand-light-slate">Unlock the secrets of the universe and find your true calling.</p>
        </div>
      </section>

      {/* Importance of Astrology Section */}
      <section className="py-24 bg-brand-light-blue">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-serif font-bold mb-6 text-white">The Importance of Astrology</h2>
              <p className="text-lg text-brand-slate mb-4">
                Astrology is an ancient art and science that has been used for centuries to understand the influence of celestial bodies on human affairs. It provides a roadmap to understanding your personality, your relationships, and your destiny.
              </p>
              <p className="text-lg text-brand-slate">
                By understanding your astrological chart, you can gain insights into your strengths and weaknesses, and make more informed decisions about your life.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="https://negativespace.co/wp-content/uploads/2024/01/negative-space-zodiac-wheel-astrology-circle-1160x773.jpg"
                alt="Astrology Wheel"
                width={580}
                height={386}
                className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Spirituality Section */}
      <section className="py-24 bg-brand-deep-blue">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <Image
                src="https://negativespace.co/wp-content/uploads/2023/09/negative-space-crystal-ball-in-hand-with-reflection-of-spooky-forest-1160x773.jpg"
                alt="Crystal Ball"
                width={580}
                height={386}
                className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6 text-white">The Path of Spirituality</h2>
              <p className="text-lg text-brand-slate mb-4">
                Spirituality is a journey of self-discovery and connection to something greater than ourselves. It is about finding meaning and purpose in life, and living in alignment with your values.
              </p>
              <p className="text-lg text-brand-slate">
                There are many paths to spirituality, and astrology can be a powerful tool to guide you on your journey. It can help you to understand your unique spiritual gifts and challenges, and to connect with your higher self.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
