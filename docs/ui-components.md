# UI Components & Custom Styling

Sleek, OLED dark aesthetic optimized for intense focus.

## 1. Segmented Watch-style Ring (RingMeter)
Renders a continuous segmented circular ring with rounded end caps and soft ambient drop shadows.
- SVG Viewbox: `0 0 100 100`.
- Circle Radius: `r = 38`, `strokeWidth = 9`.
- Offsets mapped starting from 12 o'clock using `-rotate-90` transform:
  - **Weak**: `0`
  - **Medium**: `- (WeakFraction * circumference)`
  - **Strong**: `- ((WeakFraction + MediumFraction) * circumference)`
- Remaining whitespace represents chapters 'Yet to begin' or 'In Progress'.

---

## 2. NEET 2027 Countdown Widget (NeetCountdown)
Displays live ticking timer down to second until May 2, 2027, 2:00 PM IST.
- Highlights Days, Hours, Minutes, Seconds.
- Styled with top-border linear gradient: coral-red (`#ff7b6b`) -> sunset amber (`#ffb25c`) -> icy blue (`#8be3ff`).
- Dynamic pulsating colon separator (`animate-pulse`).

---

## 3. Dynamic Quote Widget (HeroQuote)
Loads random quote from API on mount with refresh action:
- **Endpoint**: `https://dummyjson.com/quotes/random`
- **Fallback**: Curated NEET student quotes (Mandela, Roosevelt, etc.) for offline resilience.
- **Interactions**: Refresh button spins (`animate-spin`) during fetch; skeleton loader (`animate-pulse`) shows during loading.

---

## 4. Chapter Table & Row Layouts
- Grid columns: `grid-cols-[minmax(220px,1.35fr)_repeat(6,minmax(88px,0.78fr))]`
- Chapter names vertically centered via `flex min-w-0 items-center`.
