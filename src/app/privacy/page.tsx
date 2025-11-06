import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getContent } from "@/lib/i18n";

export const metadata = {
  title: "Privacyverklaring – ParkAlarm"
};

export default async function PrivacyPage() {
  const t = await getContent("nl");
  
  return (
    <>
      <Header t={t} />
      <main className="container pt-36 pb-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold mb-8">Privacyverklaring</h1>
      
      <div className="prose prose-slate max-w-none">
        <p className="text-lg text-slate-700 mb-6">
          Laatst bijgewerkt: 22 september 2025
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Algemene informatie</h2>
          <p className="mb-4">
            ParkAlarm is een handelsnaam van Fremen B.V., gevestigd te Barendrecht op het adres Weerkant 27 Eerste verdieping. 
            Wij staan ingeschreven bij de Kamer van Koophandel onder nummer 24471820.
          </p>
          <p className="mb-4">
            Deze privacyverklaring beschrijft hoe wij omgaan met uw persoonsgegevens bij het gebruik van onze ParkAlarm-app en -diensten. 
            Wij respecteren uw privacy en handelen in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG/GDPR).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Welke gegevens verzamelen wij?</h2>
          <p className="mb-4">Voor de werking van ParkAlarm verzamelen wij de volgende gegevens:</p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Locatiegegevens:</strong> Om u te waarschuwen voor parkeerzones en -beperkingen</li>
            <li><strong>Apparaatgegevens:</strong> Type apparaat, besturingssysteem en app-versie voor technische ondersteuning</li>
            <li><strong>Gebruiksgegevens:</strong> Hoe u de app gebruikt om onze dienst te verbeteren</li>
            <li><strong>Contactgegevens:</strong> E-mailadres indien u contact met ons opneemt</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Waarom verwerken wij uw gegevens?</h2>
          <p className="mb-4">Wij verwerken uw persoonsgegevens voor de volgende doeleinden:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Het leveren van parkeeralarm-diensten</li>
            <li>Het verbeteren van onze app en dienstverlening</li>
            <li>Technische ondersteuning en probleemoplossing</li>
            <li>Communicatie over onze diensten</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Rechtmatige grondslag</h2>
          <p className="mb-4">
            Wij verwerken uw persoonsgegevens op basis van uw toestemming en ons gerechtvaardigd belang om u een 
            kwalitatieve dienstverlening te bieden. Voor locatiegegevens vragen wij altijd expliciet uw toestemming.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Delen met derden</h2>
          <p className="mb-4">
            Wij delen uw persoonsgegevens niet met derden, behalve wanneer dit noodzakelijk is voor de werking van onze dienst 
            of wanneer wij wettelijk verplicht zijn dit te doen. Eventuele derde partijen die toegang hebben tot uw gegevens 
            zijn contractueel verplicht deze vertrouwelijk te behandelen.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Beveiliging van uw gegevens</h2>
          <p className="mb-4">
            Wij nemen passende technische en organisatorische maatregelen om uw persoonsgegevens te beschermen tegen 
            verlies, misbruik, onbevoegde toegang en ongewenste openbaarmaking. Uw gegevens worden versleuteld opgeslagen 
            en verzonden.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Bewaartermijn</h2>
          <p className="mb-4">
            Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk voor de doeleinden waarvoor zij zijn verzameld. 
            Gebruiksgegevens worden maximaal 2 jaar bewaard, tenzij u eerder verzoekt tot verwijdering.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Uw rechten</h2>
          <p className="mb-4">U heeft de volgende rechten met betrekking tot uw persoonsgegevens:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Recht op inzage van uw gegevens</li>
            <li>Recht op rectificatie (verbetering van onjuiste gegevens)</li>
            <li>Recht op verwijdering ('recht om vergeten te worden')</li>
            <li>Recht op beperking van de verwerking</li>
            <li>Recht op gegevensoverdraagbaarheid</li>
            <li>Recht van bezwaar tegen de verwerking</li>
            <li>Recht om toestemming in te trekken</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Contact en klachten</h2>
          <p className="mb-4">
            Voor vragen over deze privacyverklaring of het uitoefenen van uw rechten kunt u contact met ons opnemen via 
            de contactgegevens in onze app. U heeft ook het recht om een klacht in te dienen bij de Autoriteit Persoonsgegevens.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Wijzigingen</h2>
          <p className="mb-4">
            Wij kunnen deze privacyverklaring van tijd tot tijd aanpassen. Wijzigingen worden bekendgemaakt via onze app 
            en website. Wij adviseren u regelmatig deze privacyverklaring te raadplegen.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">11. Contactgegevens</h2>
          <div className="bg-slate-50 p-4 rounded-lg">
            <p><strong>Fremen B.V.</strong></p>
            <p>Weerkant 27 Eerste verdieping</p>
            <p>Barendrecht</p>
            <p>KvK-nummer: 24471820</p>
            <p>Handelsnaam: ParkAlarm</p>
          </div>
        </section>
      </div>
      </main>
      <Footer t={t} />
    </>
  );
}
