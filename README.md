# QuickWheels

QuickWheels is an independent, mobile-only prototype for predictable shared rides from Surat Railway Station.

## Run locally

Run `python3 -m http.server 8000`, then open `http://localhost:8000/`. Demo verification code: **7284**. All bookings, payments, people and events are synthetic.

## Built

- Onboarding, phone validation, OTP, destination and persistent preferences
- Loading, no-match recovery, ride comparison and transparent shared-ride review
- Confirmation, cancellation recovery, verified ride details, boarding PIN and pickup directions
- Live trip, safety check-in, completion, feedback, dark theme and accessible modal/toast behavior

## WIP / mocked

Apple sign-in, real calls/location/schedules/payments, receipt files, notifications, multilingual UI, cloud sync and safety escalation are mocked or visibly marked. The reference wireframes cover the core 16 states; no-match and cancellation recovery were inferred from the brief. No video was supplied.

## GitHub Pages

Push to `main`. In **Settings → Pages**, select `main` and `/ (root)` (or `/docs` if used), then open `https://<user>.github.io/<repo>/`. All paths are relative and `.nojekyll` is included.

## Assets handoff

| Where in the UI | Suggested path | Format | Target size |
| --- | --- | --- | --- |
| App logo | `assets/logo.svg` | SVG | 128 × 128 |
| Onboarding hero | `assets/hero.png` | PNG / WebP | 1125 × 1406 |
| Illustrations | `assets/illustrations/<id>.svg` | SVG | 320 × 240 |
| Photos | `assets/photos/<id>.jpg` | JPG / WebP | 800 × 480 |
| Favicon | `favicon.svg` | SVG | 512 × 512 |
| iOS touch icon | `apple-touch-icon.png` | PNG | 180 × 180 |

A production service would require authenticated identity, licensed maps, driver supply, payment settlement, train-arrival data, privacy review, safety operations and station coordination.
