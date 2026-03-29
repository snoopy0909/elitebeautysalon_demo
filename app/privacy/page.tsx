import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center text-amber-500 hover:text-amber-400 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        
        <div className="space-y-8 text-neutral-400 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
            <p>
              At Elite Beauty Salon, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>
            <p>
              We may collect personal information such as your name, email address, phone number, and appointment history when you book a service, contact us, or subscribe to our newsletter. We may also collect non-personal information, such as your IP address and browsing behavior on our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
            <p>
              We use your personal information to schedule and manage your appointments, communicate with you about our services, process payments, and improve our website and customer experience. We may also send you promotional materials if you have opted in to receive them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Sharing Your Information</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our business, provided they agree to keep your information confidential. We may also disclose your information if required by law or to protect our rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, loss, or misuse. However, please note that no method of transmission over the internet or electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal information held by us. You may also object to the processing of your data or request data portability. To exercise these rights, please contact us using the information provided below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at info@elitebeautysalon.com or call us at (949) 391-7336.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
