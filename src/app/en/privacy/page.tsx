import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getContent } from "@/lib/i18n";

export const metadata = {
  title: "Privacy Policy – ParkAlarm"
};

export default async function PrivacyPage() {
  const t = await getContent("en");
  
  return (
    <>
      <Header t={t} />
      <main className="container pt-36 pb-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold mb-8">Privacy Policy</h1>
      
      <div className="prose prose-slate max-w-none">
        <p className="text-lg text-slate-700 mb-6">
          Last updated: September 22, 2025
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. General Information</h2>
          <p className="mb-4">
            ParkAlarm is a trade name of Fremen B.V., located in Barendrecht at Weerkant 27 First floor. 
            We are registered with the Chamber of Commerce under number 24471820.
          </p>
          <p className="mb-4">
            This privacy policy describes how we handle your personal data when using our ParkAlarm app and services. 
            We respect your privacy and act in accordance with the General Data Protection Regulation (GDPR).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. What Data Do We Collect?</h2>
          <p className="mb-4">For the operation of ParkAlarm, we collect the following data:</p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Location data:</strong> To alert you about parking zones and restrictions</li>
            <li><strong>Device data:</strong> Device type, operating system, and app version for technical support</li>
            <li><strong>Usage data:</strong> How you use the app to improve our service</li>
            <li><strong>Contact details:</strong> Email address if you contact us</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Why Do We Process Your Data?</h2>
          <p className="mb-4">We process your personal data for the following purposes:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Providing parking alarm services</li>
            <li>Improving our app and service delivery</li>
            <li>Technical support and troubleshooting</li>
            <li>Communication about our services</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Legal Basis</h2>
          <p className="mb-4">
            We process your personal data based on your consent and our legitimate interest to provide you with 
            quality service delivery. For location data, we always ask for your explicit consent.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Sharing with Third Parties</h2>
          <p className="mb-4">
            We do not share your personal data with third parties, except when necessary for the operation of our service 
            or when we are legally required to do so. Any third parties who have access to your data are contractually 
            obligated to treat it confidentially.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
          <p className="mb-4">
            We take appropriate technical and organizational measures to protect your personal data against 
            loss, misuse, unauthorized access, and unwanted disclosure. Your data is stored and transmitted encrypted.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Retention Period</h2>
          <p className="mb-4">
            We do not keep your personal data longer than necessary for the purposes for which it was collected. 
            Usage data is retained for a maximum of 2 years, unless you request deletion earlier.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Your Rights</h2>
          <p className="mb-4">You have the following rights regarding your personal data:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Right to access your data</li>
            <li>Right to rectification (correction of incorrect data)</li>
            <li>Right to erasure ('right to be forgotten')</li>
            <li>Right to restriction of processing</li>
            <li>Right to data portability</li>
            <li>Right to object to processing</li>
            <li>Right to withdraw consent</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Contact and Complaints</h2>
          <p className="mb-4">
            For questions about this privacy policy or exercising your rights, you can contact us through 
            the contact details in our app. You also have the right to file a complaint with the relevant data protection authority.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Changes</h2>
          <p className="mb-4">
            We may update this privacy policy from time to time. Changes will be announced through our app 
            and website. We recommend regularly reviewing this privacy policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">11. Contact Details</h2>
          <div className="bg-slate-50 p-4 rounded-lg">
            <p><strong>Fremen B.V.</strong></p>
            <p>Weerkant 27 First floor</p>
            <p>Barendrecht</p>
            <p>Chamber of Commerce number: 24471820</p>
            <p>Trade name: ParkAlarm</p>
          </div>
        </section>
      </div>
      </main>
      <Footer t={t} />
    </>
  );
}