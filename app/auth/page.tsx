import Link from "next/link";
import { signIn, signUp } from "./actions";

export default function AuthPage({ searchParams }: { searchParams: { next?: string; message?: string } }) {
  const nextPath = searchParams.next ?? "/";

  return (
    <main className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-center px-4 py-12 sm:px-6">
      <section className="grid w-full gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] bg-ink p-8 text-road shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-road/60">Account required</p>
          <h1 className="mt-4 text-3xl font-bold">Protecting student privacy starts here.</h1>
          <p className="mt-4 leading-7 text-road/75">
            Sign in is required before viewing ride details, posting listings, chatting, revealing addresses, or sharing contact information.
          </p>
          <Link href={nextPath} className="mt-8 inline-flex rounded-2xl bg-road px-5 py-3 font-semibold text-ink">
            Continue after sign in
          </Link>
        </div>
        <form className="rounded-[2rem] border border-ink/10 bg-white/80 p-6 shadow-soft sm:p-8">
          <input type="hidden" name="next" value={nextPath} />
          <div className="grid gap-5">
            <label className="grid gap-2 text-sm font-medium text-ink">
              School email
              <input name="email" type="email" required placeholder="name@school.edu" className="rounded-2xl border border-ink/10 bg-road px-4 py-3 outline-none ring-moss/30 transition focus:ring-4" />
            </label>
            <label className="grid gap-2 text-sm font-medium text-ink">
              Password
              <input name="password" type="password" required minLength={8} placeholder="••••••••" className="rounded-2xl border border-ink/10 bg-road px-4 py-3 outline-none ring-moss/30 transition focus:ring-4" />
            </label>
            {searchParams.message ? (
              <p className="rounded-2xl bg-sage px-4 py-3 text-sm text-ink/75" role="status">{searchParams.message}</p>
            ) : null}
            <div className="grid gap-3 sm:grid-cols-2">
              <button formAction={signIn} className="rounded-2xl bg-ink px-5 py-3 font-semibold text-road transition hover:bg-moss">
                Sign in
              </button>
              <button formAction={signUp} className="rounded-2xl border border-ink/15 bg-white px-5 py-3 font-semibold text-ink transition hover:bg-sage">
                Sign up
              </button>
            </div>
          </div>
          <p className="mt-5 text-sm leading-6 text-ink/60">
            Ride4Ride uses Supabase Auth so protected pages can verify a session before showing ride details, posting, chat, addresses, or contact info.
          </p>
        </form>
      </section>
    </main>
  );
}
