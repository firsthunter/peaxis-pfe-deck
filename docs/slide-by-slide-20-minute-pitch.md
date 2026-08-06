# Wayloom.AI — Slide-by-slide 20-minute defense pitch

**Timing:** 15 minutes of slides + 5 minutes live demo.  
**Core message:** **Validated scoring logic, not opaque AI.**

Wayloom.AI is a launch-oriented cognitive-testing platform: a US-first pilot direction, with a Gulf/MENA expansion path. It was developed during the final-year internship at Prospecter, but with production-minded concerns: institution-aware data, IRB-backed clinical process, deterministic scoring, asynchronous processing, and explainable AI. Do not claim measured diagnostic accuracy, sensitivity/specificity, clinical efficacy, or SLAs until they are formally validated.

This is the living pitch script. It follows the **current 28-slide deck exactly** and should be updated whenever the slide order or content changes.

## Slides 1–8 — Why Wayloom.AI exists · 0:00–3:10

### Slide 1 — Cover · 0:00–0:40

"Nearly 7 million Americans aged 65 and older are living with dementia today. Half of them will never receive a clinical diagnosis. Not because the disease is untestable — because testing hasn't kept up. Most cognitive screening still runs on paper, unchanged since the 1980s, gated behind long clinic visits and months-long waitlists.

Wayloom.AI addresses this: a platform that digitizes any validated cognitive test, delivers it conversationally, scores it with AI-assisted interpretation while preserving the clinician's validated scoring logic, and adapts it culturally and linguistically. It is not a classroom prototype — it's a product moving toward clinical pilots, built with institution-aware data, IRB approval, and a clear boundary around what the AI is trusted to do."

**Transition:** "First, here is the journey I will take you through."

### Slide 2 — Presentation Overview · 0:40–0:55

"I will establish the cognitive-testing problem, show Wayloom.AI and a live workflow, then explain the architecture and AI controls that make a clinical score reviewable."

**Transition:** "The need begins with how cognitive health is changing."

### Slide 3 — Prospecter, Internship Host · 0:55–1:20

"Prospecter is an AI-powered B2B SaaS platform for outbound prospecting. Its use of multi-tenant design, LLM workflows, and background processing informed the engineering discipline I applied to Wayloom.AI. Wayloom.AI itself is an independent cognitive-health product."

**Transition:** "I applied those practices to the more sensitive domain of clinical assessment."

### Slide 4 — Internship Context · 1:20–1:35

"During the internship I worked with full-stack, AI, and platform-engineering practices. I used them to build a maintainable product foundation rather than a one-time demo."

**Transition:** "The product tackles a cognitive-health environment that is changing rapidly."

### Slide 5 — Cognitive Health in the Digital Era · 1:35–1:55

"An aging population, clinical overload, rising caregiver expectations, and AI adoption in healthcare are increasing together. The challenge is no longer only running the test faster; it's making the test accessible and getting patients seen before it's too late to act."

**Transition:** "The resulting testing gap is measurable."

### Slide 6 — Dementia Is Increasing, Testing Isn't · 1:55–2:35

"**6.9 million** Americans 65+ are living with dementia in 2024, projected to reach **12 million by 2040**. **Half** never receive a clinical diagnosis. Rates **double every five years** after 65 — the WHO recognizes dementia as a public-health priority. These are market-context figures, not Wayloom.AI clinical claims.

For Wayloom.AI, they translate to engineering requirements: digitized testing, culturally accessible delivery, and faster time-to-screening."

**Transition:** "Existing tools solve parts of the workflow, but they do not all solve the same problem in the same way."

### Slide 7 — Competitive Landscape · 2:35–2:55

"This comparison positions Wayloom.AI against BrainCheck, Linus Health, and Altoida. My objective is not to say those products can't monitor cognitive decline longitudinally — they can, and so can we. The intended difference is combining cultural adaptation, adaptive conversational testing, and caregiver integration with at-home usability in one product.

I use this as a positioning view, not as an independently benchmarked claim of clinical superiority."

**Transition:** "That positioning leads directly to the gap Wayloom.AI addresses."

### Slide 8 — An Exploding Market for Cognitive Health · 2:55–3:10

"The cognitive-health market is projected to grow at over 25% CAGR over the next six years, reaching a $31M global TAM by 2030 — with a $2B US market today served by few accessible tools. Wayloom.AI combines accessible delivery, validated scoring, and cultural adaptation in one platform."

## Slides 9–12 — Delivery and requirements · 3:10–4:40

### Slide 9 — Engineering Methodology

"I used Scrum to split delivery into short sprints and Kanban to track the backlog, work in progress, and completed work. Each sprint followed: plan, build and test, review, then improve. The platform foundation came before the AI digitization layer."

### Slide 10 — Core Functional Requirements

"The core delivered capabilities are authentication, institution-scoped multi-tenancy, roles and plan entitlements, test digitization and management, and the patient session pipeline. AI becomes useful only when this workflow is reliable."

### Slide 11 — AI Functional Requirements

"The delivered AI capabilities are document digitization, AI-assisted scoring, cultural and linguistic adaptation, clinician report generation, and reliable AI processing across providers. I do not claim diagnostic accuracy or clinical efficacy as delivered, validated outcomes."

### Slide 12 — Non-Functional Requirements

"Security, institution tenant boundaries, modularity, asynchronous processing, explicit failure states, and explainability are first-class design properties. Measured production-scale SLAs and clinical validation metrics are future validation steps."

**Transition:** "With the requirements defined, here is the product users interact with."

## Slides 13–16 — Product and live proof · 4:40–6:15

### Slide 13 — Wayloom.AI Overview

"Core manages the institution foundation. The Clinician Suite is where tests are published and scoring is reviewed. The Patient Portal is where consent, testing, and results happen. The modules share one controlled platform and AI Brain."

### Slide 14 — Wayloom Core

"Core is the institutional control layer: identity, access, plans, and institution context. It provides the tenant-aware foundation for every module."

### Slide 15 — Wayloom Clinician Suite

"The Clinician Suite gives clinicians a test-publishing workspace and a scoring review view. The value is that a domain score comes with the response it was computed from, the rubric that scored it, and a normative comparison — not an opaque number."

### Slide 16 — Wayloom Patient Portal

"The Patient Portal supports the patient journey: consent, intake, conversational testing adapted to language and culture, and results shared with the clinician and caregiver."

**Transition to demo:** "I will now show one patient moving from consent to a clinician-reviewable report."

## Live demo — 5 minutes · 6:15–11:15

1. **Consent & intake:** "The patient completes consent and demographics. The platform persists this before any test data collection."
2. **Conversational testing:** "The test is delivered conversationally, adapted to the patient's language and culture — same clinical validity, different surface."
3. **Clinician workspace:** "The clinician opens the session and the generated domain scores."
4. **AI-assisted scoring:** "For a domain, show the response, the scoring rule, the AI-assisted interpretation for a complex item, and the normative comparison. The clinician can flag it for review."
5. **Close:** "The AI interprets responses using the clinician's validated scoring logic; normative data anchors the result; the clinician keeps final authority over the report."

**Transition:** "Now that the user outcome is visible, I will explain how it is implemented."

## Slides 17–25 — Architecture and AI engineering · 11:15–14:30

### Slide 17 — Logical Architecture

"The browser calls NestJS, never Gemini or Groq directly. NestJS owns authentication, authorization, institution context, plans, and institutional records. The FastAPI AI Brain is the isolated inference boundary, orchestrated by LangGraph. PostgreSQL is the source of truth for institutional data; MongoDB holds engine sessions; Redis is the deterministic phase cache."

### Slide 18 — Physical Architecture

"Web, API, AI engine, and execution visualizer run as four independently deployable services, each with its own CI workflow. The base stack runs the AI engine and execution visualizer; the development overlay adds the API and web app. The AI service can absorb digitization load without degrading the institutional API."

### Slide 19 — AI Runtime & AI Brain

"NestJS validates and authorizes the request, then the AI Brain — a LangGraph phase graph — takes over: ingest, layout, reading order, segment, score, assemble, validate, repair. The model router selects Gemini or Groq per phase and retries transient failures.

The phased pipeline is necessary because vision, translation, and scoring calls can take seconds or fail temporarily. It makes digitization non-blocking, retryable, observable, and cacheable."

### Slide 20 — Document Digitization Pipeline

"A clinician uploads a paper test. The ingest node captures page images and embedded text. Gemini Vision performs layout and block detection; a reading-order node establishes columns and groups. Segmentation turns blocks into structured items, which assemble into a DraftTestSpec.

A validator flags blocking errors; a repair node proposes and auto-applies minimal fixes. The clinician reviews, edits scoring rules and normative data, and publishes. This produces a scorable test, not an automatic diagnosis."

### Slide 21 — AI-Assisted Scoring Engine

"Scoring rules and normative data are attached by the clinician at digitization time. Simple items — multiple choice, digit span, serial subtraction — score deterministically against the rubric. Complex or image-based responses, like drawing or audio, are scored by Gemini Vision, constrained to that item's scoring rule.

Raw scores are then adjusted for demographics and converted to a z-score against normative population data, producing a domain subscore. The clinician reviews the result and signs off."

### Slide 22 — How Scoring Is Computed

"No rubric match on a mandatory item flags for clinician review; simple items score directly against the rubric; complex items get AI-assisted interpretation constrained to the rubric; every domain subscore is normalized against demographic and normative data before it reaches the report.

The model is: domain subscore = normalize(raw score, demographic adjustment, normative z-score). AI assists interpretation; it does not replace the rubric or rank patients."

### Slide 23 — AI Models by Use Case

"Wayloom.AI routes across two providers by phase. Gemini Vision handles document layout, OCR, and scoring of complex responses. Groq handles translation and cultural adaptation, including back-translation for quality. Gemini also drafts the clinician report, with a deterministic fallback if the provider is unavailable.

The main point is: AI interprets and adapts; deterministic rules and normative data calculate the final domain scores."

### Slide 24 — Performance Optimizations

"Performance comes from architecture, not a claim that the model is instantly fast. Redis caches phase outputs keyed on phase, input hash, and prompt version — never the source of truth. The phased pipeline moves slow inference outside the request path. AI scoring is called only for items whose rubric requires judgment, and the model router retries transient provider failures across Gemini and Groq.

One transparent limit: the Mongo-to-Postgres migration is not yet complete, so persistence-dependent AI endpoints still depend on MongoDB. That is a measured hardening step for launch, not a claim made today."

### Slide 25 — Technical Challenges & Solutions

"The key challenges were AI latency, document quality, cultural validity, scoring safety, and provider outages. The answers are a phased, cached, and retried pipeline; vision layout with validator and repair nodes; cultural and linguistic adaptation with back-translation; a forbidden-vocabulary guard on patient-facing text; and model-router retries with a deterministic report fallback.

I also make the Mongo-to-Postgres migration gap explicit before production. Engineering quality means documenting what is solved and what still needs hardening."

## Slides 26–28 — Launch path and close · 14:30–15:00

### Slide 26 — Roadmap

"Q1 builds HIPAA-grade infrastructure and expands IRB approval alongside engine finalization. Q2 launches clinical pilots, collects first patient data, and targets three signed LOIs. Q3 submits results for peer review, expands pilot sites, and files a patent. Q4 targets scale readiness: license agreements, a deployment-ready platform, a seed raise, and a scoped EHR integration pathway."

### Slide 27 — Conclusion

"Wayloom.AI delivers a document-digitization pipeline, AI-assisted scoring, cultural and linguistic adaptation, and a clinician-reviewable report — validated with an IRB-approved prototype tested by 25+ users at a 90% completion rate. Its contribution is the boundary around AI: Gemini and Groq help interpret and adapt, deterministic rules and normative data calculate the result, and the clinician retains authority.

It's a platform aimed at US clinical pilots first, with a Gulf/MENA expansion path: **validated scoring logic, not opaque AI — early detection gives families time.**"

### Slide 28 — Questions

"Thank you for your attention. I am ready for your questions."

## If the jury asks for metrics

"The displayed figures describe the cognitive-health market and testing gap. I implemented and tested the digitization and scoring workflow, secured IRB approval, and ran early usability testing — but I deliberately do not claim measured diagnostic accuracy, sensitivity/specificity, or clinical efficacy until a controlled clinical validation study is run against gold-standard tests."
