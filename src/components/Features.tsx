export default function Features({ t }: { t: any }) {
  const features = t?.features?.items || [
    { icon: "🗺️", title: "Smart Zones", text: "Automatische detectie van parkeergebieden" },
    { icon: "🔔", title: "Realtime alerts", text: "Ontvang meldingen op het juiste moment" },
    { icon: "🔒", title: "Privacy first", text: "Jouw data blijft bij jou" },
    { icon: "⚡", title: "Batterij zuinig", text: "Minimaal impact op je telefoon" },
    { icon: "📱", title: "Eenvoudig", text: "Werkt automatisch op de achtergrond" },
    { icon: "🎯", title: "Nauwkeurig", text: "GPS en Bluetooth voor precisie" }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Waarom ParkAlarm?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ontwikkeld met de nieuwste technologie om parkeren zo makkelijk mogelijk te maken
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
