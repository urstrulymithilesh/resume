import Link from "next/link";
import type { RideListing } from "@/lib/data/rides";

export function RideCard({ ride }: { ride: RideListing }) {
  return (
    <article className="rounded-3xl border border-ink/10 bg-white/75 p-5 shadow-soft backdrop-blur-sm">
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="rounded-full bg-sage px-3 py-1 text-xs font-semibold uppercase tracking-wide text-moss">{ride.kind}</span>
        <span className="text-sm text-ink/60">{ride.seats} seat{ride.seats === 1 ? "" : "s"}</span>
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium text-ink/55">{ride.campus}</p>
        <h3 className="text-xl font-semibold text-ink">{ride.from} → {ride.to}</h3>
        <p className="text-sm text-ink/70">{ride.date} at {ride.time}</p>
      </div>
      <p className="mt-4 rounded-2xl bg-road px-4 py-3 text-sm leading-6 text-ink/70">{ride.privacy}</p>
      <Link href={`/rides/${ride.id}`} className="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-ink px-4 py-3 text-sm font-semibold text-road transition hover:bg-moss">
        Sign in to view details
      </Link>
    </article>
  );
}
