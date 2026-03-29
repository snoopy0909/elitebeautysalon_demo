import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ServicesPolicy() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center text-amber-500 hover:text-amber-400 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold text-white mb-8">Services Policy</h1>
        
        <div className="space-y-8 text-neutral-400 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Appointments and Scheduling</h2>
            <p>
              We highly recommend booking appointments in advance to secure your preferred date and time. Walk-ins are welcome but subject to availability. Please arrive at least 10 minutes before your scheduled appointment to allow time for consultation and preparation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Cancellations and No-Shows</h2>
            <p>
              We understand that unforeseen circumstances may arise. However, we kindly request a minimum of 24 hours&apos; notice for any cancellations or rescheduling. Failure to provide sufficient notice or arriving more than 15 minutes late may result in a cancellation fee or the need to reschedule your appointment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Pricing and Payment</h2>
            <p>
              All prices listed on our website and in-salon menus are starting prices and may vary depending on hair length, density, texture, and the specific stylist. We will provide a clear estimate before beginning any service. Payment is due in full at the time of service. We accept cash, major credit cards, and other approved payment methods.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Satisfaction Guarantee</h2>
            <p>
              Your satisfaction is our top priority. If you are not completely satisfied with your service, please let us know within 48 hours. We will gladly offer a complimentary adjustment or correction to ensure you leave our salon feeling confident and beautiful.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Health and Safety</h2>
            <p>
              We maintain strict hygiene and sanitation protocols to ensure the health and safety of our clients and staff. All tools and equipment are thoroughly cleaned and disinfected between uses. If you have any allergies, sensitivities, or medical conditions, please inform your stylist before your service begins.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Children and Guests</h2>
            <p>
              To maintain a relaxing and professional environment, we kindly request that you do not bring children or additional guests to your appointment unless they are also receiving a service. This ensures the comfort and safety of all our clients.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Personal Belongings</h2>
            <p>
              Elite Beauty Salon is not responsible for any lost, stolen, or damaged personal belongings. Please keep your valuables with you at all times during your visit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Right to Refuse Service</h2>
            <p>
              We reserve the right to refuse service to anyone who exhibits inappropriate behavior, poses a health or safety risk, or fails to comply with our salon policies.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
