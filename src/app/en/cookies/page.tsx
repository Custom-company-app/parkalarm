import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getContent } from "@/lib/i18n";

export const metadata = {
  title: "Cookie Policy – ParkAlarm"
};

export default async function CookiesPageEN() {
  const t = await getContent("en");
  
  return (
    <>
      <Header t={t} />
      <main className="container pt-36 pb-10 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>
        <p className="mb-4">
          ParkAlarm uses cookies to ensure proper website functionality and enhance the user experience.
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li><strong>Functional cookies:</strong> required for core functionality.</li>
          <li><strong>Analytics cookies:</strong> collect anonymous usage data.</li>
          <li><strong>Marketing cookies:</strong> used only with your consent, to provide relevant ParkAlarm information.</li>
        </ul>
        <p className="mb-4">
          By using this site, you agree to the use of functional and analytics cookies. You can manage marketing cookies via your browser or cookie settings.
        </p>
        <p>
          For questions, contact{" "}
          <a href="mailto:privacy@parkalarm.nl" className="text-blue-600 hover:underline">
            privacy@parkalarm.nl
          </a>.
        </p>
      </main>
      <Footer t={t} />
    </>
  );
}
