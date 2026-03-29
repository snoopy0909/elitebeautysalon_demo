import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center text-amber-500 hover:text-amber-400 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
        
        <div className="space-y-8 text-neutral-400 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the services provided by Elite Beauty Salon (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Services Provided</h2>
            <p>
              Elite Beauty Salon provides premium beauty treatments, including haircuts, styling, coloring, extensions, and other related services. The specific details, pricing, and duration of these services are subject to change without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Appointments and Cancellations</h2>
            <p>
              Appointments can be booked online, by phone, or in person. We require at least 24 hours&apos; notice for any cancellations or rescheduling. Failure to provide sufficient notice may result in a cancellation fee.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Payment and Pricing</h2>
            <p>
              All prices listed are starting prices and may vary depending on hair length, density, texture, and the specific stylist. Payment is due at the time of service. We accept cash, credit cards, and other approved payment methods.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Liability</h2>
            <p>
              While we strive to provide the highest quality of service, Elite Beauty Salon is not liable for any adverse reactions, damages, or dissatisfaction resulting from the services provided, provided that we have acted with reasonable care and skill.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Any changes will be effective immediately upon posting on our website or notifying you directly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Contact Information</h2>
            <p>
              If you have any questions or concerns regarding these Terms of Service, please contact us at info@elitebeautysalon.com or call us at (949) 391-7336.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
