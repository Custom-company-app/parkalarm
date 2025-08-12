export default function SocialProof({ t }: { t: any }) {
  return (
    <section className="py-16 sm:py-24 bg-muted/50">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight">Wat anderen zeggen</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.social.reviews.map((r: any, idx: number) => (
            <blockquote key={idx} className="bg-card border rounded-xl p-6">
              <p className="text-card-foreground">“{r.quote}”</p>
              <footer className="mt-4 text-sm text-muted-foreground">— {r.author}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
