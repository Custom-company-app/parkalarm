import Image from "next/image";

export default function HowItWorks({ t }: { t: any }) {
  const steps = t?.how?.steps || [];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Zo eenvoudig werkt het
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Volg deze stappen om nooit meer een parkeerboete te krijgen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex flex-col items-center text-center">
              <div className="mb-6 w-full h-80 relative">
                <Image 
                  src={step.image} 
                  alt={step.alt} 
                  fill
                  style={{ objectFit: "contain" }}
                  className="rounded-lg"
                />
              </div>
              <div className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white font-bold rounded-full mb-4">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
