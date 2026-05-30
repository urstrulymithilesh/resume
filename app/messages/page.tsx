const messages = [
  { from: "Maya", body: "Hi! I can meet near the student center entrance." },
  { from: "You", body: "Thanks. Let's keep exact pickup hidden until we confirm the time." },
  { from: "Maya", body: "Works for me. I can reveal my phone after we agree." },
];

export default function MessagesPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-moss">In-app chat</p>
        <h1 className="mt-2 text-4xl font-bold text-ink">Chat before revealing contact info.</h1>
      </div>
      <section className="grid gap-6 lg:grid-cols-[0.35fr_0.65fr]">
        <aside className="rounded-[2rem] border border-ink/10 bg-white/80 p-4 shadow-soft">
          <button className="w-full rounded-2xl bg-sage p-4 text-left text-sm font-semibold text-ink" type="button">O&apos;Hare airport ride</button>
        </aside>
        <div className="rounded-[2rem] border border-ink/10 bg-white/80 p-5 shadow-soft">
          <div className="space-y-3">
            {messages.map((message) => (
              <div key={`${message.from}-${message.body}`} className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-6 ${message.from === "You" ? "ml-auto bg-ink text-road" : "bg-road text-ink"}`}>
                <p className="mb-1 text-xs font-semibold opacity-70">{message.from}</p>
                {message.body}
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-2xl bg-sage p-4 text-sm text-ink/70">
            Contact reveal is optional and should happen only after both students are comfortable.
          </div>
        </div>
      </section>
    </main>
  );
}
