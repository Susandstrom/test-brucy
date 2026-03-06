# AGENTS.md

## Projektöversikt
Detta är en Next.js-app (App Router, TypeScript, Tailwind) för **Grönaboken**:
- startsida
- receptsidor
- liten webshop
- kundvagn i `localStorage`
- Stripe Checkout
- e-post via Resend (kontakt + orderbekräftelse)

Primärt språk i UI är svenska.

## Teknikstack
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Stripe (`stripe`)
- Resend (`resend`, `@react-email/render`)

## Viktiga mappar
- `app/` - routes och UI
- `app/(public)/shop/` - butik och produktdata
- `app/(public)/cart/` - kundvagn + checkout/success/cancel
- `app/(public)/recipe/` - recept
- `app/api/checkout/route.ts` - skapar Stripe-session
- `app/api/send-order/route.ts` - hämtar session från Stripe och skickar ordermail
- `app/api/contact/route.tsx` - skickar kontaktmail
- `lib/resend.ts` - Resend-klient

## Körning lokalt
```bash
npm install
npm run dev
```

## Miljövariabler
Skapa `.env.local`:
```env
STRIPE_SECRET_KEY=...
NEXT_PUBLIC_SITE_URL=http://localhost:3000
RESEND_API_KEY=...
```

## Arkitektur och dataflöde
1. Produkter definieras statiskt i `app/(public)/shop/data/products.ts`.
2. Kundvagn hanteras i `cartContext.tsx` och sparas i `localStorage`.
3. `CartPage` postar varukorg till `/api/checkout`.
4. Stripe redirectar till `/cart/success?session_id=...`.
5. Success-sidan postar `sessionId` + orderrader till `/api/send-order`.
6. API-route hämtar kunduppgifter från Stripe och skickar bekräftelsemail via Resend.

## Kända riskpunkter i nuvarande kod
- `removeFromCart` i `cartContext.tsx` filtrerar med `item.id !== item.id` (alltid `false`), vilket tömmer hela kundvagnen.
- `updateQuantity` filtrerar `quantity > 1`, vilket tar bort produkter när antal blir `1` i stället för `0`.
- Mobil-länkar i navbar pekar till `/biryani`, `/hamburger`, `/korvstroganof` i stället för `/recipe/...`.
- En receptlänk på översiktssidan pekar till fel route (`/recipe/hamburger` även för korvstroganoff-kortet).

## Arbetsregler för agenter
- Behåll svenska texter i UI om inte användaren ber om annat.
- Återanvänd komponenter i `app/components/` och stilar i `app/styles.ts`.
- Vid ändringar i checkout/order:
  - verifiera både Stripe-flöde och mailflöde
  - testa success/cancel-routes
- Kör alltid minst:
```bash
npm run lint
```
innan större leverans, och rapportera eventuella fel.
