import Link from "next/link";
import { RideCard } from "@/components/ride-card";
import { featuredRides } from "@/lib/data/rides";

const steps = [
  "Browse neighborhood-level listings without an account.",
  "Sign in before viewing details, posting, chatting, or revealing addresses.",
  "Use in-app chat first; reveal contact info only when you choose.",
];

export default function HomePage() {
  return (
    <main>
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
        <div className="flex flex-col justify-center">
          <p className="mb-4 inline-flex w-fit rounded-full border border-ink/10 bg-white/70 px-4 py-2 text-sm font-medium text-moss">
            Student ride coordination, not a ride-hailing service
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-ink sm:text-6xl">
            Find classmates heading your way without sharing private details up front.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/70">
            Ride4Ride is a community board for students to coordinate rides. We do not provide transportation, employ drivers, or guarantee that any ride will happen.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="#rides" className="rounded-2xl bg-ink px-5 py-3 text-center font-semibold text-road transition hover:bg-moss">
              Browse public rides
            </Link>
            <Link href="/rides/new" className="rounded-2xl border border-ink/15 bg-white/70 px-5 py-3 text-center font-semibold text-ink transition hover:bg-white">
              Post a ride
            </Link>
          </div>
        </div>
        <aside className="rounded-[2rem] border border-ink/10 bg-white/70 p-6 shadow-soft">
          <h2 className="text-lg font-semibold text-ink">Privacy-first flow</h2>
          <ol className="mt-5 space-y-4">
            {steps.map((step, index) => (
              <li key={step} className="flex gap-3 rounded-2xl bg-road p-4 text-sm leading-6 text-ink/75">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-ink text-xs font-bold text-road">{index + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        </aside>
      </section>

      <section id="rides" className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-moss">Public board</p>
            <h2 className="mt-2 text-3xl font-bold text-ink">Recent ride listings</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-ink/65">
            Public cards intentionally hide exact addresses, contact details, and chat history until a student signs in.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {featuredRides.map((ride) => <RideCard key={ride.id} ride={ride} />)}
        </div>
      </section>
    </main>
  );
}
