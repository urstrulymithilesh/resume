import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ride4Ride | Student ride coordination",
  description:
    "A privacy-first community board where students coordinate rides without turning Ride4Ride into a transportation company.",
};

const navItems = [
  { href: "/", label: "Browse" },
  { href: "/rides/new", label: "Post" },
  { href: "/messages", label: "Chat" },
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <div className="min-h-screen bg-road bg-[radial-gradient(circle_at_top_left,_rgba(66,98,75,0.16),_transparent_30rem)]">
          <header className="sticky top-0 z-30 border-b border-ink/10 bg-road/92 backdrop-blur">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6" aria-label="Main navigation">
              <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight text-ink">
                <span className="grid h-9 w-9 place-items-center rounded-2xl bg-ink text-sm text-road">R4R</span>
                <span>Ride4Ride</span>
              </Link>
              <div className="flex items-center gap-1 text-sm font-medium text-ink/75">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} className="rounded-full px-3 py-2 transition hover:bg-white/70 hover:text-ink">
                    {item.label}
                  </Link>
                ))}
                <Link href="/auth" className="rounded-full bg-ink px-4 py-2 text-road shadow-sm transition hover:bg-moss">
                  Sign in
                </Link>
              </div>
            </nav>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
