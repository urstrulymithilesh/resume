# Ride4Ride MVP

Ride4Ride is a privacy-first student community ride coordination board. It is not Uber, not a transportation company, and does not guarantee rides. The MVP lets anyone browse public, neighborhood-level ride listings while requiring authentication before protected actions.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Supabase Auth/client helpers
- Vercel-ready configuration

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy environment variables and fill in your Supabase project values:

   ```bash
   cp .env.example .env.local
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000).

## Supabase notes

Create a Supabase project and enable email/password auth. The MVP includes browser, server, and middleware helpers in `lib/supabase`. Routes that reveal ride details, posting, and chat are protected by middleware. Wire the placeholder forms to Supabase Auth and database actions when moving from prototype to production.

Suggested tables for the next iteration:

- `profiles`: student profile and school email domain
- `rides`: public listing fields plus protected exact-address fields
- `ride_participants`: requester/driver relationship and reveal consent state
- `messages`: in-app chat messages scoped to a ride

## Commands

```bash
npm run lint
npm run build
```
