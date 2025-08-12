export default function Benefits({ t }: { t: any }) {
  return (
    <section className="py-16 sm:py-24">
      <div className="container">
        <div className="bg-card border rounded-2xl p-8 sm:p-12">
          <div className="grid gap-8 sm:grid-cols-3 text-center">
            {t.benefits.items.map((b: any, idx: number) => (
              <div key={idx}>
                <p className="text-sm uppercase tracking-wider text-muted-foreground">{b.kicker}</p>
                <p className="mt-1 text-4xl font-semibold text-primary">{b.stat}</p>
                <p className="mt-1 text-sm text-muted-foreground">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
