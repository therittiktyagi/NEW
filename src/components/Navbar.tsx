import Link from 'next/link';
import Logo from './Logo';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-blur-lg border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="flex items-center space-x-2">
          <Logo />
          <span className="text-white text-xl font-semibold">Cosmic Insights</span>
        </Link>
        <div className="space-x-6">
          <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-300">
            Home
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-300">
            About Us
          </Link>
          <Link href="/services" className="text-gray-300 hover:text-white transition-colors duration-300">
            Services
          </Link>
          <Link href="/book-appointment" className="text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300 px-4 py-2 rounded-md">
            Book Appointment
          </Link>
        </div>
      </div>
    </nav>
  );
}
