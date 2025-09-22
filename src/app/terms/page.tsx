import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getContent } from "@/lib/i18n";

export const metadata = {
  title: "Algemene Voorwaarden – ParkAlarm"
};

export default async function TermsPage() {
  const t = await getContent("nl");
  
  return (
    <>
      <Header t={t} />
      <main className="container pt-36 pb-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold mb-8">Algemene Voorwaarden</h1>
      
      <div className="prose prose-slate max-w-none">
        <p className="text-lg text-slate-700 mb-6">
          Laatst bijgewerkt: 22 september 2025
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Algemene bepalingen</h2>
          <p className="mb-4">
            Deze algemene voorwaarden zijn van toepassing op het gebruik van de ParkAlarm-app en -diensten, 
            aangeboden door Muza Holding B.V., gevestigd te Barendrecht op het adres Weerkant 27 Eerste verdieping, 
            ingeschreven bij de Kamer van Koophandel onder nummer 24471820.
          </p>
          <p className="mb-4">
            Door gebruik te maken van onze app en diensten gaat u akkoord met deze voorwaarden. 
            Lees deze zorgvuldig door voordat u onze diensten gebruikt.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Omschrijving diensten</h2>
          <p className="mb-4">
            ParkAlarm is een mobiele applicatie die gebruikers helpt bij het beheren van parkeertijden en 
            het ontvangen van meldingen over parkeerzones en -beperkingen. Onze diensten omvatten:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Locatiegebaseerde parkeeralarmen</li>
            <li>Meldingen over parkeerzones en -tijden</li>
            <li>Informatie over parkeerregels en -kosten</li>
            <li>Gebruikersondersteuning en app-updates</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Gebruik van de app</h2>
          <p className="mb-4">
            U mag de ParkAlarm-app gebruiken voor persoonlijke, niet-commerciële doeleinden. Het is niet toegestaan om:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>De app te gebruiken voor illegale doeleinden</li>
            <li>De werking van de app te verstoren of te proberen te hacken</li>
            <li>Valse informatie te verstrekken</li>
            <li>Inbreuk te maken op intellectuele eigendomsrechten</li>
            <li>De app te gebruiken op een manier die anderen kan schaden</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Gebruikersaccount</h2>
          <p className="mb-4">
            Voor sommige functies kan het noodzakelijk zijn om een account aan te maken. U bent verantwoordelijk voor:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Het verstrekken van accurate en volledige informatie</li>
            <li>Het beveiligen van uw accountgegevens</li>
            <li>Alle activiteiten die plaatsvinden via uw account</li>
            <li>Het onmiddellijk melden van ongeautoriseerd gebruik</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Beschikbaarheid en onderhoud</h2>
          <p className="mb-4">
            Wij streven ernaar om onze diensten 24/7 beschikbaar te houden, maar kunnen niet garanderen dat de app 
            altijd zonder onderbreking werkt. Wij behouden ons het recht voor om:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Onderhoud en updates uit te voeren</li>
            <li>De dienst tijdelijk te onderbreken</li>
            <li>Functies te wijzigen of te verwijderen</li>
            <li>De dienstverlening te beëindigen met redelijke opzegtermijn</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Intellectueel eigendom</h2>
          <p className="mb-4">
            Alle rechten op de ParkAlarm-app, inclusief maar niet beperkt tot software, ontwerp, teksten, 
            logo's en andere materialen, behoren toe aan Muza Holding B.V. of onze licentiegevers. 
            U krijgt een beperkte, niet-exclusieve licentie om de app te gebruiken conform deze voorwaarden.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Privacy en gegevensbescherming</h2>
          <p className="mb-4">
            Uw privacy is belangrijk voor ons. Het gebruik van uw persoonsgegevens wordt geregeld door onze 
            <a href="/privacy" className="text-blue-600 hover:text-blue-800 underline">Privacyverklaring</a>, 
            die onderdeel uitmaakt van deze voorwaarden.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Aansprakelijkheid</h2>
          <p className="mb-4">
            ParkAlarm is een hulpmiddel dat u ondersteunt bij het beheren van parkeertijden. Wij zijn niet aansprakelijk voor:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Parkeerboetes of andere kosten die u maakt</li>
            <li>Schade door onjuiste of onvolledige informatie</li>
            <li>Technische storingen of onderbrekingen</li>
            <li>Indirecte of gevolgschade</li>
          </ul>
          <p className="mb-4">
            U blijft te allen tijde zelf verantwoordelijk voor het naleven van parkeerregels en -tijden.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Beëindiging</h2>
          <p className="mb-4">
            U kunt uw gebruik van ParkAlarm te allen tijde beëindigen door de app te verwijderen. 
            Wij kunnen uw toegang beëindigen bij overtreding van deze voorwaarden. 
            Na beëindiging blijven bepaalde bepalingen van kracht, waaronder intellectuele eigendomsrechten en aansprakelijkheidsbeperkingen.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Wijzigingen</h2>
          <p className="mb-4">
            Wij behouden ons het recht voor deze voorwaarden te wijzigen. Belangrijke wijzigingen worden 
            via de app of website bekendgemaakt. Voortgezet gebruik na wijzigingen betekent dat u akkoord gaat met de nieuwe voorwaarden.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">11. Toepasselijk recht en geschillen</h2>
          <p className="mb-4">
            Op deze voorwaarden is Nederlands recht van toepassing. Geschillen worden bij voorkeur in onderling 
            overleg opgelost. Is dit niet mogelijk, dan zijn de bevoegde Nederlandse rechters exclusief bevoegd.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">12. Contact</h2>
          <p className="mb-4">
            Voor vragen over deze voorwaarden of onze diensten kunt u contact met ons opnemen via de contactgegevens in onze app.
          </p>
          <div className="bg-slate-50 p-4 rounded-lg">
            <p><strong>Muza Holding B.V.</strong></p>
            <p>Weerkant 27 Eerste verdieping</p>
            <p>Barendrecht</p>
            <p>KvK-nummer: 24471820</p>
            <p>Handelsnaam: ParkAlarm</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">13. Slotbepalingen</h2>
          <p className="mb-4">
            Mochten één of meerdere bepalingen van deze voorwaarden nietig zijn, dan blijven de overige bepalingen volledig van kracht. 
            Nietige bepalingen worden geacht te zijn vervangen door geldige bepalingen die zoveel mogelijk aansluiten bij de bedoeling van de oorspronkelijke bepalingen.
          </p>
        </section>
      </div>
      </main>
      <Footer t={t} />
    </>
  );
}
