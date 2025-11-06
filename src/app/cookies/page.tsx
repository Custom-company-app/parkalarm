import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getContent } from "@/lib/i18n";

export const metadata = {
  title: "Cookieverklaring – ParkAlarm"
};

export default async function CookiesPage() {
  const t = await getContent("nl");
  
  return (
    <>
      <Header t={t} />
      <main className="container pt-36 pb-10 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Cookiebeleid</h1>
        <p className="mb-4">
          ParkAlarm gebruikt cookies om de website goed te laten functioneren en
          de gebruikerservaring te verbeteren.
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li><strong>Functionele cookies:</strong> noodzakelijk voor basisfunctionaliteit.</li>
          <li><strong>Analytische cookies:</strong> geanonimiseerde statistieken om gebruik te meten.</li>
          <li><strong>Marketingcookies:</strong> alleen geplaatst met toestemming, voor relevante informatie over ParkAlarm.</li>
        </ul>
        <p className="mb-4">
          Door de site te gebruiken ga je akkoord met het gebruik van functionele
          en analytische cookies. Je kunt marketingcookies beheren via je
          browserinstellingen of cookievoorkeuren.
        </p>
        <p>
          Vragen? Neem contact op via{" "}
          <a href="mailto:privacy@parkalarm.nl" className="text-blue-600 hover:underline">
            privacy@parkalarm.nl
          </a>.
        </p>
      </main>
      <Footer t={t} />
    </>
  );
}
