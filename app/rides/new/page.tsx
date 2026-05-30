const fields = ["Starting area", "Destination area", "Date", "Time", "Seats", "Notes for verified students"];

export default function NewRidePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-moss">Post a ride</p>
        <h1 className="mt-2 text-4xl font-bold text-ink">Share only what the public board needs.</h1>
        <p className="mt-4 leading-7 text-ink/65">
          Exact addresses and contact information should stay hidden until both students are comfortable revealing them in chat.
        </p>
      </div>
      <form className="grid gap-4 rounded-[2rem] border border-ink/10 bg-white/80 p-6 shadow-soft">
        <div className="grid gap-4 sm:grid-cols-2">
          {fields.map((field) => (
            <label key={field} className="grid gap-2 text-sm font-medium text-ink">
              {field}
              <input className="rounded-2xl border border-ink/10 bg-road px-4 py-3 outline-none ring-moss/30 transition focus:ring-4" placeholder={field.includes("area") ? "Neighborhood or campus area" : field} />
            </label>
          ))}
        </div>
        <label className="flex items-start gap-3 rounded-2xl bg-sage p-4 text-sm leading-6 text-ink/75">
          <input type="checkbox" className="mt-1" />
          I understand Ride4Ride is only a coordination board and does not guarantee rides or provide transportation.
        </label>
        <button type="button" className="rounded-2xl bg-ink px-5 py-3 font-semibold text-road transition hover:bg-moss">
          Publish listing
        </button>
      </form>
    </main>
  );
}
