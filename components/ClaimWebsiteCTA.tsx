import { Sparkles, ArrowRight } from 'lucide-react';

export default function ClaimWebsiteCTA() {
  return (
    <section className="bg-gradient-to-b from-neutral-950 to-neutral-900 border-t border-amber-500/20 py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15)_0%,transparent_70%)]" />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center justify-center p-3 bg-amber-500/10 rounded-2xl mb-6 border border-amber-500/20">
          <Sparkles className="w-8 h-8 text-amber-500" />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Love This Website Design?
        </h2>
        <p className="text-lg md:text-xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Transform your salon&apos;s online presence today. Claim this premium, ready-to-launch website and start attracting high-end clients immediately.
        </p>
        <a
          href="https://dzine2webpay-legacy.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-neutral-950 bg-amber-500 hover:bg-amber-400 transition-all hover:scale-105 shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:shadow-[0_0_40px_rgba(245,158,11,0.5)]"
        >
          Claim This Website Now
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
