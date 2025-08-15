import Image from 'next/image';
import FadeInWhenVisible from '@/components/FadeInWhenVisible';

export default function Home() {
  return (
    <div className="bg-brand-cream text-brand-deep-green">
      {/* Hero Section */}
      <section
        className="relative h-[calc(100vh-5rem)] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1753645264167-c68a74b5b332')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-center text-brand-cream">
          <h1 className="text-6xl font-serif font-bold mb-4 text-shadow-lg">Discover Your Cosmic Path</h1>
          <p className="text-xl text-brand-cream">Unlock the secrets of the universe and find your true calling.</p>
        </div>
      </section>

      {/* Importance of Astrology Section */}
      <FadeInWhenVisible>
        <section className="py-24 bg-brand-light-green">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-4xl font-serif font-bold mb-6 text-brand-cream">The Importance of Astrology</h2>
                <p className="text-lg text-brand-cream mb-4">
                  Astrology is an ancient art and science that has been used for centuries to understand the influence of celestial bodies on human affairs. It provides a roadmap to understanding your personality, your relationships, and your destiny.
                </p>
                <p className="text-lg text-brand-cream">
                  By understanding your astrological chart, you can gain insights into your strengths and weaknesses, and make more informed decisions about your life.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <Image
                  src="https://images.unsplash.com/photo-1614089254151-676cc373b01e"
                  alt="Astrology Textile"
                  width={580}
                  height={386}
                  className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </section>
      </FadeInWhenVisible>

      {/* Spirituality Section */}
      <FadeInWhenVisible>
        <section className="py-24 bg-brand-deep-green">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold mb-6 text-brand-cream">The Path of Spirituality</h2>
            <p className="text-lg text-brand-cream max-w-3xl mx-auto mb-4">
              Spirituality is a journey of self-discovery and connection to something greater than ourselves. It is about finding meaning and purpose in life, and living in alignment with your values.
            </p>
            <p className="text-lg text-brand-cream max-w-3xl mx-auto">
              There are many paths to spirituality, and astrology can be a powerful tool to guide you on your journey. It can help you to understand your unique spiritual gifts and challenges, and to connect with your higher self.
            </p>
          </div>
        </section>
      </FadeInWhenVisible>

      {/* Our Philosophy Section */}
      <FadeInWhenVisible>
        <section className="py-24 bg-brand-cream">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold mb-6 text-brand-deep-green">Our Philosophy</h2>
            <p className="text-lg text-brand-deep-green max-w-3xl mx-auto mb-4">
              We believe that astrology is not about predicting a fixed future, but about understanding the energies at play in your life. It is a tool for empowerment, helping you to navigate your path with greater awareness and intention.
            </p>
            <p className="text-lg text-brand-deep-green max-w-3xl mx-auto">
              Our approach is rooted in a deep respect for ancient wisdom, combined with a modern, psychological perspective. We seek to provide guidance that is both practical and profound, helping you to create a life that is in alignment with your soul&apos;s purpose.
            </p>
          </div>
        </section>
      </FadeInWhenVisible>
    </div>
  );
}
