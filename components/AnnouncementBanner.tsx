import Link from 'next/link';

export default function AnnouncementBanner() {
  return (
    <div className="bg-amber-500 text-neutral-950 px-4 py-2 text-sm font-medium text-center flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 z-[60] relative">
      <span>This is a DEMO WEBSITE for ELITE BEAUTY SALON</span>
      <a 
        href="https://dzine2webpay-legacy.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-neutral-950 text-amber-500 px-3 py-1 rounded-full text-xs font-bold hover:bg-neutral-800 transition-colors whitespace-nowrap"
      >
        Claim this website
      </a>
    </div>
  );
}
