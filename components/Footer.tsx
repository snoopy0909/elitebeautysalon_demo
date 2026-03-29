import Link from 'next/link';
import { Phone, MapPin, Mail } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const phoneNumber = '+19493917336';
  const address = '17942 Sky Park Cir suite d, Irvine, CA 92614';
  
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand & Info */}
          <div className="flex flex-col md:items-start">
            <Link href="/" className="group flex flex-col items-center focus:outline-none mb-6 inline-flex">
              <div className="relative h-16 w-56 sm:h-20 sm:w-64 transition-transform group-hover:scale-105">
                <Image
                  src="https://i.postimg.cc/5tqKb1Mj/elitesalonlogo.png"
                  alt="Elite Beauty Salon Logo"
                  fill
                  className="object-contain object-center md:object-left"
                  priority
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-bold text-2xl tracking-tight text-[#D4AF37] mt-2 transition-colors group-hover:text-amber-400 text-center md:text-left w-full">
                Elite Beauty Salon
              </span>
            </Link>
            <p className="text-neutral-400 mb-6 max-w-sm text-center md:text-left">
              Premium beauty services in Irvine, CA. Elevate your style with our curated selection of treatments.
            </p>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${phoneNumber}`} className="flex items-start text-neutral-400 hover:text-amber-500 transition-colors">
                  <Phone className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span>(949) 391-7336</span>
                </a>
              </li>
              <li>
                <a href={`https://maps.google.com/?q=${encodeURIComponent(address)}`} target="_blank" rel="noopener noreferrer" className="flex items-start text-neutral-400 hover:text-amber-500 transition-colors">
                  <MapPin className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span>{address}</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@elitebeautysalon.com" className="flex items-start text-neutral-400 hover:text-amber-500 transition-colors">
                  <Mail className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span>info@elitebeautysalon.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Policies & Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/terms" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/services-policy" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  Services Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-800/50 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-neutral-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Elite Beauty Salon. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
