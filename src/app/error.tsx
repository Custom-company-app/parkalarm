"use client";

export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <main className="container py-20 text-center">
      <h1 className="text-3xl font-bold">Er ging iets mis</h1>
      <p className="mt-2 text-slate-600">{error?.message || "Onbekende fout"}</p>
      <button onClick={reset} className="btn btn-primary mt-6">Opnieuw proberen</button>
    </main>
  );
}
