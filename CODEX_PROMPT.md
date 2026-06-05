# Build Task: slack-meeting-room-booker

Build a complete, production-ready Next.js 15 App Router application.

PROJECT: slack-meeting-room-booker
HEADLINE: Book meeting rooms directly from Slack messages
WHAT: Slack bot that detects meeting scheduling conversations and automatically suggests/books available conference rooms
WHY: Teams waste time manually checking room availability and booking systems
WHO PAYS: Office managers and team leads
NICHE: slack-productivity
PRICE: $$29/mo

ARCHITECTURE SPEC:
A Slack bot that monitors team conversations for meeting-related keywords, integrates with calendar APIs to check room availability, and provides interactive booking suggestions directly in Slack channels. The system uses webhook-based real-time message processing with a Next.js dashboard for room management and billing.

PLANNED FILES:
- pages/api/slack/events.js
- pages/api/slack/interactive.js
- pages/api/slack/oauth.js
- pages/api/rooms/index.js
- pages/api/calendar/availability.js
- pages/api/webhooks/lemonsqueezy.js
- pages/dashboard.js
- pages/rooms.js
- pages/pricing.js
- components/RoomBookingModal.js
- components/SlackInstallButton.js
- lib/slack-client.js
- lib/calendar-integration.js
- lib/room-detector.js
- lib/lemonsqueezy.js
- prisma/schema.prisma

DEPENDENCIES: next, tailwindcss, @slack/bolt, @slack/web-api, prisma, @prisma/client, googleapis, node-cron, date-fns, lemonsqueezy.js, stripe, jsonwebtoken, bcryptjs

REQUIREMENTS:
- Next.js 15 with App Router (app/ directory)
- TypeScript
- Tailwind CSS v4
- shadcn/ui components (npx shadcn@latest init, then add needed components)
- Dark theme ONLY — background #0d1117, no light mode
- Stripe Payment Link for payments (hosted checkout — use the URL directly as the Buy button href)
- Landing page that converts: hero, problem, solution, pricing, FAQ
- The actual tool/feature behind a paywall (cookie-based access after purchase)
- Mobile responsive
- SEO meta tags, Open Graph tags
- /api/health endpoint that returns {"status":"ok"}
- NO HEAVY ORMs: Do NOT use Prisma, Drizzle, TypeORM, Sequelize, or Mongoose. If the tool needs persistence, use direct SQL via `pg` (Postgres) or `better-sqlite3` (local), or just filesystem JSON. Reason: these ORMs require schema files and codegen steps that fail on Vercel when misconfigured.
- INTERNAL FILE DISCIPLINE: Every internal import (paths starting with `@/`, `./`, or `../`) MUST refer to a file you actually create in this build. If you write `import { Card } from "@/components/ui/card"`, then `components/ui/card.tsx` MUST exist with a real `export const Card` (or `export default Card`). Before finishing, scan all internal imports and verify every target file exists. Do NOT use shadcn/ui patterns unless you create every component from scratch — easier path: write all UI inline in the page that uses it.
- DEPENDENCY DISCIPLINE: Every package imported in any .ts, .tsx, .js, or .jsx file MUST be
  listed in package.json dependencies (or devDependencies for build-only). Before finishing,
  scan all source files for `import` statements and verify every external package (anything
  not starting with `.` or `@/`) appears in package.json. Common shadcn/ui peers that MUST
  be added if used:
  - lucide-react, clsx, tailwind-merge, class-variance-authority
  - react-hook-form, zod, @hookform/resolvers
  - @radix-ui/* (for any shadcn component)
- After running `npm run build`, if you see "Module not found: Can't resolve 'X'", add 'X'
  to package.json dependencies and re-run npm install + npm run build until it passes.

ENVIRONMENT VARIABLES (create .env.example):
- NEXT_PUBLIC_STRIPE_PAYMENT_LINK  (full URL, e.g. https://buy.stripe.com/test_XXX)
- NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY  (pk_test_... or pk_live_...)
- STRIPE_WEBHOOK_SECRET  (set when webhook is wired)

BUY BUTTON RULE: the Buy button's href MUST be `process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK`
used as-is — do NOT construct URLs from a product ID, do NOT prepend any base URL,
do NOT wrap it in an embed iframe. The link opens Stripe's hosted checkout directly.

After creating all files:
1. Run: npm install
2. Run: npm run build
3. Fix any build errors
4. Verify the build succeeds with exit code 0

Do NOT use placeholder text. Write real, helpful content for the landing page
and the tool itself. The tool should actually work and provide value.


PREVIOUS ATTEMPT FAILED WITH:
Codex exited 1: Reading additional input from stdin...
OpenAI Codex v0.121.0 (research preview)
--------
workdir: /tmp/openclaw-builds/slack-meeting-room-booker
model: gpt-5.3-codex
provider: openai
approval: never
sandbox: danger-full-access
reasoning effort: xhigh
reasoning summaries: none
session id: 019e9629-6544-7392-80ae-ee4a58db313f
--------
user
# Build Task: slack-meeting-room-booker

Build a complete, production-ready Next.js 15 App Router application.

PROJECT: slack-meeting-room-booker
HEADLINE: Boo
Please fix the above errors and regenerate.