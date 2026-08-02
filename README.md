# The Second Order

A premium product-thinking platform website for Harshit Agarwal, built with Next.js 15, React 19, TypeScript, Tailwind CSS, and Framer Motion.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
```

This produces a fully static site in the `out/` folder (configured via `output: "export"` in `next.config.mjs`), which can be hosted anywhere — Vercel, GitHub Pages, Netlify, or any static host.

## Before you deploy

- Update the placeholder email (`hello@thesecondorder.com`) in `components/Footer.tsx` with your real email.
- Update the LinkedIn URL in `components/Footer.tsx`.
- Set up Calendly (see below) and paste your real link into `lib/config.ts`.

## Setting up "Book a Session" (Calendly)

The CTA buttons across the site ("Book a Session") open a Calendly popup. Calendly can't connect directly to Proton Calendar (Proton doesn't support the protocols third-party apps need), so the setup uses a free Google Calendar behind the scenes, with your Proton Mail address as the contact/notification email.

1. Go to calendly.com → sign up free, using your Proton Mail address as the account email.
2. Connect a Google Calendar when prompted (create a fresh free Google account if you don't want to use a personal one — this calendar is just Calendly's backend, not something you need to check).
3. Create your one event type, e.g. "Second Order Session" — set duration, and under "Location" add Zoom or Google Meet (Calendly generates the link automatically).
4. In Calendly → Account → Notifications, confirm your Proton Mail address is set to receive host notifications.
5. Copy your booking link (looks like `https://calendly.com/your-username/second-order-session`) and paste it into `lib/config.ts` as `CALENDLY_URL`.

What happens when someone books: Calendly emails a confirmation with a calendar invite (.ics file) to both the guest and to your Proton Mail address. Open that email in Proton Mail and click **Add to calendar** — Proton detects the attached invite automatically and adds it to Proton Calendar. The email itself is sent by Calendly's servers (Proton doesn't allow third-party apps to send *as* your address), but it lands in your Proton inbox and the invite goes straight into Proton Calendar.

## Deployment

See the step-by-step guide shared separately for publishing to GitHub and connecting your GoDaddy domain for free using Vercel.
