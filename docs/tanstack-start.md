# TanStack Start Development & Architecture Guide

This document is the master technical guide for structuring and developing the backend, routing, and server-side components of a **TanStack Start** application.

---

## 1. System Foundations: Vinxi & Nitro

TanStack Start is not an monolithic framework. It is built as an isomorphic meta-framework composed of two core engines:
1. **Vinxi**: The orchestrator and bundler. It manages multiple sub-bundles or "routers" (e.g., client, server, SSR, server functions) as separate build processes.
2. **Nitro**: The high-performance server engine (same engine powering Nuxt). Nitro builds a unified runtime output that is deployable anywhere (Node.js, Cloudflare Workers, Vercel, Netlify, Bun, etc.).

### Implications for Code Execution
- Code runs in **two distinct environments** (isomorphic).
- Files containing `createServerFn` are parsed by Vinxi to split the client bundle (which calls a network endpoint) from the server bundle (which executes the native query/function body).

---

## 2. Directory Structure & File Segregation

To maintain clean architecture and prevent bundling leaks (e.g., native database drivers or credentials in the client), follow these naming conventions:

| File Extension | Context / Behavior | Import Constraints |
| :--- | :--- | :--- |
| **`.server.ts`** | **Strict Server Only.** Contains database configurations, migrations, direct API clients with keys, filesystem actions. | **MUST NOT** be imported directly by components or client code. Doing so will trigger compilation failures. |
| **`.ts` / `.tsx`** | **Isomorphic / Client-Safe.** UI components, helpers, and file-based route definitions. | safe to import on both client and server. |
| **`.functions.ts`** | **Server Functions Entry.** Exportable RPC functions defined using `createServerFn`. | Safe to import on both client and server. Client invocations are proxied to network requests. |

---

## 3. Unified Routing (TanStack Router)

Routing in TanStack Start is strictly file-based, located inside `src/routes/`.

```
src/routes/
├── __root.tsx              # Root shell document (HTML wrapper)
├── index.tsx                # Isomorphic UI Route (Home page)
└── api/
    └── webhook.ts          # Server Route (REST endpoint)
```

### 3.1. The Root Shell (`__root.tsx`)
The root file acts as the base layout document. It renders standard HTML tags and handles hydration assets using special component markers:
- `<HeadContent />`: Injects SEO meta tags, document titles, and stylesheets.
- `<Scripts />`: Injects the client JS bundle loader script required for browser hydration.

### 3.2. Route Handlers: Loaders & Actions
- **Loaders (`loader`)**: Fetch data needed *before* rendering a route. Loaders block transition on the server and stream during SSR.
- **Actions / Server Mutations**: Handle user-driven state changes (e.g., form submissions, status toggles). Always use `createServerFn` for mutation logic.

### 3.3. Streaming and Deferred Data
For slow data fetches, you can stream responses from the server to the client without blocking the initial page render.
1. Return a non-awaited promise directly from the loader:
   ```typescript
   loader: () => {
     return {
       slowData: fetchSlowDatabaseRecords(), // No 'await'
     }
   }
   ```
2. Wrap the slow-rendering UI in `<Suspense>` and use the `<Await>` component:
   ```tsx
   <Suspense fallback={<LoadingSpinner />}>
     <Await promise={slowData}>
       {(data) => <DataWidget items={data} />}
     </Await>
   </Suspense>
   ```

---

## 4. Server Functions (`createServerFn`)

Server Functions are type-safe, compile-time RPC (Remote Procedure Call) endpoints that run exclusively on the server but can be imported and executed like normal asynchronous functions in client components.

### 4.1. Basic Definition
```typescript
import { createServerFn } from '@tanstack/react-start'

export const fetchDashboardStats = createServerFn({ method: 'GET' })
  .handler(async () => {
    // Everything in this block executes ONLY on the server
    return await db.select().from(statsTable)
  })
```

### 4.2. Input Validation
Always validate inputs to server functions using `.inputValidator`. If you do not use Zod, you must implement strict manual validation to check structures and ranges, ensuring malicious payloads are rejected before they reach database queries.
```typescript
export const updateProgress = createServerFn({ method: 'POST' })
  .inputValidator((input: { id: string; state: string }) => {
    if (!input.id || typeof input.state !== 'string') {
      throw new Error('Malformed input payload')
    }
    return input
  })
  .handler(async ({ data }) => {
    // data is fully typed as { id: string; state: string }
    return await db.update(table).set({ state: data.state }).where(eq(table.id, data.id))
  })
```

---

## 5. Server Functions Middleware (`createMiddleware`)

Middleware allows you to intercept server functions to perform cross-cutting concerns like logging, authentication, request timing, or context injection.

```typescript
import { createMiddleware, createServerFn } from '@tanstack/react-start'

// 1. Define Middleware
const dbContextMiddleware = createMiddleware()
  .server(async ({ next }) => {
    const startTime = Date.now()
    
    // Inject server context (e.g. active DB handle)
    const result = await next({
      context: {
        dbInstance: db,
      }
    })
    
    console.log(`Execution took ${Date.now() - startTime}ms`)
    return result
  })

// 2. Attach to Server Function
export const querySecureData = createServerFn({ method: 'GET' })
  .middleware([dbContextMiddleware])
  .handler(async ({ context }) => {
    // Access context injected by middleware
    return await context.dbInstance.select().from(secureTable)
  })
```

---

## 6. Server Routes (REST / API Endpoints)

Use Server Routes when you need stable, traditional HTTP endpoints (such as webhooks, OAuth callbacks, or third-party client integrations) instead of type-safe RPCs.

Configure a route file using `createFileRoute` with a `server` handlers block:

```typescript
// src/routes/api/stripe-webhook.ts
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/api/stripe-webhook')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = await request.json()
          // Process external webhook event...
          return new Response(JSON.stringify({ received: true }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
          })
        } catch (err) {
          return new Response('Invalid Payload', { status: 400 })
        }
      }
    }
  }
})
```

---

## 7. Security: Environment Variables

Vite manages environment variables. The prefix determines visibility:

1. **Client-Accessible (`VITE_` prefix)**: Exposed in browser bundles. Access via `import.meta.env.VITE_PUBLIC_API_KEY`.
2. **Server-Only (No prefix)**: Kept secret on the server. Never exposed to browser bundles. Access via `process.env.DATABASE_URL` or `process.env.API_SECRET`.

> [!CAUTION]
> Never prefix database credentials, encryption tokens, or private provider keys with `VITE_`. If you do, Vite will automatically inject them into browser-facing JS bundles.

---

## 8. Hydration and SSR Safety

Because TanStack Start renders pages on both the server and client, you must prevent **Hydration Mismatches** (when server-rendered HTML does not match client-side virtual DOM on boot).

### Common Causes & Preventative Rules
- **Accessing Browser APIs**: Using `window`, `document`, or `localStorage` during initial render will fail on the server. Wrap these checks inside `useEffect` blocks or guard them with environment checks.
- **Dynamic Date Formatting**: Formatting dates using local timezone strings (e.g. `Date.toLocaleDateString()`) creates mismatches if the server is in UTC and the browser is in a local time zone. Force consistent ISO/UTC strings or perform formatting strictly in a client-side `useEffect`.
- **Dynamic Random Numbers**: `Math.random()` generates different numbers on the server and client. Seed values or use local state initialized in `useEffect`.
