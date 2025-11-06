import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getContent } from "@/lib/i18n";

export const metadata = {
  title: "Terms of Service – ParkAlarm"
};

export default async function TermsPage() {
  const t = await getContent("en");
  
  return (
    <>
      <Header t={t} />
      <main className="container pt-36 pb-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold mb-8">Terms of Service</h1>
      
      <div className="prose prose-slate max-w-none">
        <p className="text-lg text-slate-700 mb-6">
          Last updated: September 22, 2025
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. General Provisions</h2>
          <p className="mb-4">
            These terms of service apply to the use of the ParkAlarm app and services, 
            offered by Fremen B.V., located in Barendrecht at Weerkant 27 First floor, 
            registered with the Chamber of Commerce under number 24471820.
          </p>
          <p className="mb-4">
            By using our app and services, you agree to these terms. 
            Please read them carefully before using our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Service Description</h2>
          <p className="mb-4">
            ParkAlarm is a mobile application that helps users manage parking times and 
            receive notifications about parking zones and restrictions. Our services include:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Location-based parking alarms</li>
            <li>Notifications about parking zones and times</li>
            <li>Information about parking rules and costs</li>
            <li>User support and app updates</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Use of the App</h2>
          <p className="mb-4">
            You may use the ParkAlarm app for personal, non-commercial purposes. It is not permitted to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Use the app for illegal purposes</li>
            <li>Disrupt the app's operation or attempt to hack it</li>
            <li>Provide false information</li>
            <li>Infringe on intellectual property rights</li>
            <li>Use the app in a way that could harm others</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. User Account</h2>
          <p className="mb-4">
            For some features, it may be necessary to create an account. You are responsible for:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Providing accurate and complete information</li>
            <li>Securing your account credentials</li>
            <li>All activities that occur through your account</li>
            <li>Immediately reporting unauthorized use</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Availability and Maintenance</h2>
          <p className="mb-4">
            We strive to keep our services available 24/7, but cannot guarantee that the app 
            will always work without interruption. We reserve the right to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Perform maintenance and updates</li>
            <li>Temporarily interrupt the service</li>
            <li>Modify or remove features</li>
            <li>Terminate the service with reasonable notice</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
          <p className="mb-4">
            All rights to the ParkAlarm app, including but not limited to software, design, texts, 
            logos, and other materials, belong to Fremen B.V. or our licensors. 
            You receive a limited, non-exclusive license to use the app in accordance with these terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Privacy and Data Protection</h2>
          <p className="mb-4">
            Your privacy is important to us. The use of your personal data is governed by our 
            <a href="/en/privacy" className="text-blue-600 hover:text-blue-800 underline">Privacy Policy</a>, 
            which forms part of these terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Liability</h2>
          <p className="mb-4">
            ParkAlarm is a tool that assists you in managing parking times. We are not liable for:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Parking tickets or other costs you incur</li>
            <li>Damage due to incorrect or incomplete information</li>
            <li>Technical failures or interruptions</li>
            <li>Indirect or consequential damages</li>
          </ul>
          <p className="mb-4">
            You remain responsible at all times for complying with parking rules and times.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Termination</h2>
          <p className="mb-4">
            You can terminate your use of ParkAlarm at any time by deleting the app. 
            We may terminate your access in case of violation of these terms. 
            After termination, certain provisions remain in effect, including intellectual property rights and liability limitations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Changes</h2>
          <p className="mb-4">
            We reserve the right to modify these terms. Important changes will be announced 
            through the app or website. Continued use after changes means you agree to the new terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">11. Applicable Law and Disputes</h2>
          <p className="mb-4">
            These terms are governed by Dutch law. Disputes are preferably resolved through mutual 
            consultation. If this is not possible, the competent Dutch courts have exclusive jurisdiction.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">12. Contact</h2>
          <p className="mb-4">
            For questions about these terms or our services, you can contact us through the contact details in our app.
          </p>
          <div className="bg-slate-50 p-4 rounded-lg">
            <p><strong>Fremen B.V.</strong></p>
            <p>Weerkant 27 First floor</p>
            <p>Barendrecht</p>
            <p>Chamber of Commerce number: 24471820</p>
            <p>Trade name: ParkAlarm</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">13. Final Provisions</h2>
          <p className="mb-4">
            Should one or more provisions of these terms be invalid, the remaining provisions remain fully effective. 
            Invalid provisions are deemed to be replaced by valid provisions that align as closely as possible with the intention of the original provisions.
          </p>
        </section>
      </div>
      </main>
      <Footer t={t} />
    </>
  );
}