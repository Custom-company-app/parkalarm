export default function NotFound() {
  return (
    <main className="container py-20 text-center">
      <h1 className="text-3xl font-bold">Pagina niet gevonden</h1>
      <p className="mt-2 text-slate-600">De pagina die je zoekt bestaat niet.</p>
      <a href="/" className="btn btn-primary mt-6 inline-block">Terug naar home</a>
    </main>
  );
}
