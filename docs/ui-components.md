# UI Components & Custom Styling

The application features a sleek, premium, self-illuminated OLED dark aesthetic specifically optimized for intense focus.

## 1. Segmented Apple Watch-style Ring (`RingMeter`)

Renders a continuous segmented circular ring with rounded end caps and soft ambient drop shadows. It is mathematically precise and highly responsive.

### Geometry Math
- SVG Viewbox is configured as `0 0 100 100`.
- Circle Radius is `r = 38` and `strokeWidth = 9`.
- Proportional offsets are mapped chronologically using sequential negative `strokeDashoffset` shifts, starting from 12 o'clock (made possible by a `-rotate-90` transform on the container SVG):
  - **Weak segment** offset: `0`
  - **Medium segment** offset: `- (WeakFraction * circumference)`
  - **Strong segment** offset: `- ((WeakFraction + MediumFraction) * circumference)`
- Remaining circular whitespace represents the percentage of chapters that are still `'Yet to begin'` or `'In Progress'`.

---

## 2. NEET 2027 Countdown Widget (`NeetCountdown`)

Displays a live ticking timer down to the exact second until **May 2, 2027, at 2:00 PM IST** (traditional NEET exam slot).
- Highlights remaining Days, Hours, Minutes, and Seconds.
- Styled with a top-border linear gradient: from warm coral-red (`#ff7b6b`) through sunset amber (`#ffb25c`) to icy blue (`#8be3ff`).
- Features a dynamic pulsating colon separator (`animate-pulse`).

---

## 3. Dynamic Quote Widget (`HeroQuote`)

Loads a random inspirational quote on mount from a public CORS-enabled API, with an interactive on-demand refresh action:
- **Primary Endpoint**: `https://dummyjson.com/quotes/random`
- **Fallback Array**: Features curated, high-quality NEET student quotes (Mandela, Roosevelt, John Wooden, Dwayne Johnson) to ensure seamless rendering if offline or rate-limited.
- **Micro-Interactions**: Refresh button spins (`animate-spin`) during active retrieval, with an interactive shimmering skeleton loader (`animate-pulse`) representing active mock state.

---

## 4. Chapter Table & Row Layouts

- The grid columns are structured as a 7-column layout:
  `grid-cols-[minmax(220px,1.35fr)_repeat(6,minmax(88px,0.78fr))]`
- Chapter name cells are vertically centered utilizing `flex min-w-0 items-center` to remain visually balanced and symmetrical relative to the status badges.
