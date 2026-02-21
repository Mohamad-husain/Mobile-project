# Mobile Project Starter

Professional baseline structure for a scalable Expo app.

## Quick Start

```bash
npm install
npm run start
```

## Project Structure

```text
App.tsx                   # App root (navigation + providers)
index.ts                  # Expo entry point
src/
|- components/            # Reusable UI
|- contexts/              # Providers and contexts
|- data/                  # Static data and maps
|- hooks/                 # Custom hooks
|- lib/                   # Env and shared types
|- locales/               # Translation files
|- screens/               # App screens
|- services/              # API/external services
|- styles/                # Tokens (colors/spacing)
`- utils/                 # Utilities
```

## Architecture Rules

- Build screens inside `src/screens/*`.
- Keep API and backend calls in `src/services/*`.
- Keep UI tokens in `src/styles/*`.
- Keep shared logic in `src/components/*`, `src/hooks/*`, and `src/utils/*`.

## Environment Variables

Create `.env` from `.env.example` and update values as needed:

```bash
EXPO_PUBLIC_API_BASE_URL=https://api.example.com
```

## Scripts

- `npm run start`: Start Expo dev server.
- `npm run android`: Start on Android.
- `npm run ios`: Start on iOS.
- `npm run web`: Start on web.
- `npm run lint`: Run lint checks.
