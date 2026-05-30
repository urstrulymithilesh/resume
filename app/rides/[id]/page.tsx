import Link from "next/link";
import { notFound } from "next/navigation";
import { featuredRides } from "@/lib/data/rides";

export default function RideDetailPage({ params }: { params: { id: string } }) {
  const ride = featuredRides.find((item) => item.id === params.id);

  if (!ride) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <section className="rounded-[2rem] border border-ink/10 bg-white/80 p-6 shadow-soft sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-moss">Protected ride details</p>
        <h1 className="mt-3 text-4xl font-bold text-ink">{ride.from} → {ride.to}</h1>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-road p-4"><span className="text-sm text-ink/55">When</span><p className="font-semibold">{ride.date}, {ride.time}</p></div>
          <div className="rounded-2xl bg-road p-4"><span className="text-sm text-ink/55">Seats</span><p className="font-semibold">{ride.seats}</p></div>
          <div className="rounded-2xl bg-road p-4"><span className="text-sm text-ink/55">Campus</span><p className="font-semibold">{ride.campus}</p></div>
        </div>
        <div className="mt-6 rounded-2xl bg-sage p-5 text-sm leading-6 text-ink/75">
          Address and phone reveal controls remain locked until both students agree. Start in-app chat first and keep safety expectations clear.
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href="/messages" className="rounded-2xl bg-ink px-5 py-3 text-center font-semibold text-road transition hover:bg-moss">Open in-app chat</Link>
          <button className="rounded-2xl border border-ink/15 bg-white px-5 py-3 font-semibold text-ink" type="button">Request address reveal</button>
        </div>
      </section>
    </main>
  );
}
