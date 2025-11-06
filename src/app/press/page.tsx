import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getContent } from "@/lib/i18n";

export const metadata = { title: "Pers – ParkAlarm" };

export default async function PressPage() {
  const t = await getContent("nl");
  
  return (
    <>
      <Header t={t} />
      <main className="container pt-36 pb-10 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Pers & Media</h1>
        <p className="mb-4">
          Journalisten en mediapartners zijn welkom om contact op te nemen voor informatie, interviews of persmateriaal over ParkAlarm.
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Persberichten en mediakits</li>
          <li>Logo's en beeldmateriaal</li>
          <li>Interviews met het ParkAlarm-team</li>
        </ul>
        <p>
          Stuur een bericht naar{" "}
          <a href="mailto:press@parkalarm.nl" className="text-blue-600 hover:underline">
            press@parkalarm.nl
          </a>{" "}
          met je naam, medium en onderwerp.
        </p>
      </main>
      <Footer t={t} />
    </>
  );
}
