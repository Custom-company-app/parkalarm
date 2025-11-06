import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getContent } from "@/lib/i18n";

export const metadata = { title: "Press – ParkAlarm" };

export default async function PressPageEN() {
  const t = await getContent("en");
  
  return (
    <>
      <Header t={t} />
      <main className="container pt-36 pb-10 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Press & Media</h1>
        <p className="mb-4">
          Journalists and media partners are welcome to contact us for information, interviews, or press materials about ParkAlarm.
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Press releases and media kits</li>
          <li>Logos and visuals</li>
          <li>Interview opportunities with the ParkAlarm team</li>
        </ul>
        <p>
          Reach out via{" "}
          <a href="mailto:press@parkalarm.nl" className="text-blue-600 hover:underline">
            press@parkalarm.nl
          </a>{" "}
          including your name, media outlet, and topic.
        </p>
      </main>
      <Footer t={t} />
    </>
  );
}
