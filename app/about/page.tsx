export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-semibold">About Me</h1>
      <p className="mt-4 text-sm text-foreground/80 max-w-3xl">
        Saya adalah pengembang yang fokus pada pembuatan aplikasi web modern.
        Tertarik pada pengembangan full‑stack, performa, dan pengalaman pengguna yang baik.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-2 sm:grid-cols-2">
        <div className="rounded-md border border-foreground/10 p-3 text-sm">React, Next.js, Tailwind CSS</div>
        <div className="rounded-md border border-foreground/10 p-3 text-sm">Node.js, REST API</div>
        <div className="rounded-md border border-foreground/10 p-3 text-sm">SQL, Prisma</div>
        <div className="rounded-md border border-foreground/10 p-3 text-sm">Go, PHP/Laravel</div>
      </div>
    </main>
  );
}
