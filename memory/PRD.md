# MediXcel NanoCura — PRD

## Original Problem Statement
Create a futuristic, premium healthcare SaaS landing page for **MediXcel NanoCura by Plus91 Technologies** — a Hospital Information Management System (HIMS) for small, medium and specialty hospitals. Goal: generate leads, subscriptions and product trust for hospital decision-makers.

## User Personas
- Hospital owners / administrators (decision-makers)
- Medical directors evaluating HIMS solutions
- Finance / IT heads at multi-specialty hospitals

## Core Requirements (Static)
1. Hero with title, subtitle and 3 CTAs (Request Demo, Sign Up, Login)
2. Features section (8): OPD, IPD & Beds, Billing & Insurance, EMR/EHR, Lab & Diagnostics, Pharmacy, Real-Time Analytics, Govt Integrations (ABHA/PMJAY/HFR)
3. Modules section (8): Reception, Billing, Pharmacy, Laboratory, Radiology, Inventory, HR/Admin, Reports
4. Pricing — 4 tiers: Basic, Standard, Premium, Enterprise
5. Demo Request Form: Hospital Name, Contact Person, Mobile, Email, Beds Size, State, Preferred Demo Date
6. Testimonials, Security & Compliance, FAQ, Footer (About, Contact, Privacy, Terms, Social)

## Architecture
- Backend: FastAPI + Motor (MongoDB) on 8001, prefix /api
  - POST/GET /api/demo-requests  (lead capture)
  - POST /api/newsletter
  - POST/GET /api/status (legacy)
- Frontend: React + Tailwind + Shadcn UI; sections componentised under /app/frontend/src/components
- Pages: /app/frontend/src/pages/LandingPage.jsx
- Fonts: Outfit (display) + Manrope (body) + JetBrains Mono (technical)
- Theme: Light, Swiss high-contrast with futuristic medical-blue accents

## Implemented (2025-12-01)
- Full landing page (Header, Hero with dashboard mockup, Marquee, Features bento, Modules technical grid, Pricing 4-tier with monthly/yearly toggle, Demo form with date picker + state/beds Select, Testimonials, Security, FAQ, Footer + newsletter)
- Real branded logo image in Header + favicon (provided by user)
- MongoDB persistence for demo requests + newsletter
- Sonner toast notifications
- Backend tests: 8/8 pass; Frontend e2e: ~90% pass

## Backlog
P1
- Add Stripe checkout for Basic / Standard / Premium tier subscriptions
- Resend / SendGrid email notification on demo request submission (Plus91 sales team)
- Admin view at /admin to list demo requests
P2
- Add data-testid on price values for deterministic e2e
- Tighten CORS allow_origins (currently `*`)
- Move logger definition above route handlers in server.py
- Add blog / case studies section
- Multi-language (Hindi) support

## Next Tasks
- Confirm Stripe + email integration scope with Plus91
- Build admin lead dashboard
