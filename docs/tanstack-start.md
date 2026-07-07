# TanStack Start Development & Architecture Guide

Isomorphic meta-framework composed of:
1. **Vinxi**: Orchestrator/bundler. Splits client and server bundles.
2. **Nitro**: Server engine. Builds unified runtime.

---

## Directory Structure & File Segregation
| File Extension | Context | Import Constraints |
| :--- | :--- | :--- |
| **`.server.ts`** | Server Only (DB config, filesystem, keys) | **MUST NOT** import in client code. |
| **`.ts` / `.tsx`** | Isomorphic (UI, components, routes) | Safe on client and server. |
| **`.functions.ts`**| Server Functions (RPC definitions) | Safe on client and server. Client call is network proxy. |

---

## Unified Routing
File-based under `src/routes/`.
- `__root.tsx`: Base layout document with `<HeadContent />` and `<Scripts />`.
- `loader`: Fetches route data. Streams non-awaited promises:
  ```typescript
  loader: () => ({ slowData: fetchSlowDb() })
  ```
  Render with `<Suspense>` and `<Await>` in UI.

---

## Server Functions (`createServerFn`)
Type-safe RPC endpoints executing on server.

### Definition & Input Validation
Always validate inputs to reject malicious payloads before querying DB:
```typescript
export const updateProgress = createServerFn({ method: 'POST' })
  .inputValidator((input: { id: string; state: string }) => {
    if (!input.id || typeof input.state !== 'string') throw new Error('Invalid input')
    return input
  })
  .handler(async ({ data }) => {
    return await db.update(table).set({ state: data.state }).where(eq(table.id, data.id))
  })
```

---

## Server Functions Middleware (`createMiddleware`)
Intercepts server functions:
```typescript
const dbMiddleware = createMiddleware().server(async ({ next }) => {
  return await next({ context: { dbInstance: db } })
})
export const queryData = createServerFn({ method: 'GET' })
  .middleware([dbMiddleware])
  .handler(async ({ context }) => {
    return await context.dbInstance.select().from(table)
  })
```

---

## Server Routes (REST API)
Use for webhooks/OAuth. Configure via `server` handlers in `createFileRoute`:
```typescript
export const Route = createFileRoute('/api/stripe-webhook')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const body = await request.json()
        return new Response(JSON.stringify({ received: true }))
      }
    }
  }
})
```

---

## Security: Environment Variables
1. **Client-Accessible (`VITE_` prefix)**: Exposed in browser. `import.meta.env.VITE_PUBLIC_API_KEY`.
2. **Server-Only (No prefix)**: Secrets. `process.env.DATABASE_URL`.
Never prefix DB credentials or encryption tokens with `VITE_`.

---

## Hydration & SSR Safety
Prevent hydration mismatches (server HTML vs client virtual DOM):
- **Browser APIs**: Guard `window`, `document`, `localStorage` via `useEffect` or client checks.
- **Dates**: Do not format dates using local timezone strings during initial render. Force consistent ISO/UTC strings.
- **Randomness**: Initial state must not rely on `Math.random()`. Initialize in `useEffect`.
