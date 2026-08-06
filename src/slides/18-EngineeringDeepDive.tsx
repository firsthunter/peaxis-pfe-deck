import { AnimatePresence, motion } from 'framer-motion'
import {
    Activity,
    ArrowRight,
    Braces,
    BrainCircuit,
    BriefcaseBusiness,
    CheckCircle2,
    Cpu,
    Database,
    FileText,
    Gauge,
    KeyRound,
    Layers3,
    LockKeyhole,
    RefreshCcw,
    Search,
    Server,
    ShieldCheck,
    Sparkles,
    Table2,
    UserCheck,
    Users,
    Zap,
} from 'lucide-react'
import type { ReactNode } from 'react'
import SectionTag from '../components/ui/SectionTag'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

type Tone = 'teal' | 'navy' | 'coral' | 'yellow' | 'gray'

const tones: Record<Tone, { bg: string; border: string; text: string; fill: string }> = {
  teal: { bg: '#E6FAF9', border: 'rgba(0,184,179,0.24)', text: '#009E9A', fill: '#00B8B3' },
  navy: { bg: '#F3F4F6', border: 'rgba(0,16,39,0.14)', text: '#001027', fill: '#001027' },
  coral: { bg: '#FFF0F0', border: 'rgba(254,89,90,0.24)', text: '#D63E3F', fill: '#FE595A' },
  yellow: { bg: '#FFFBEB', border: 'rgba(254,200,73,0.34)', text: '#8A5A00', fill: '#FEC849' },
  gray: { bg: '#F8FAFC', border: 'rgba(0,0,0,0.08)', text: '#6B7280', fill: '#374151' },
}

interface EngineeringSlideProps {
  title: string
  accent: string
  subtitle: string
  children: ReactNode
  section?: string
  sectionNumber?: string
}

function EngineeringSlide({ title, accent, subtitle, children, section = 'Engineering Deep Dive', sectionNumber = '8' }: EngineeringSlideProps) {
  return (
    <div className="slide-root">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 74% 24%, rgba(0,184,179,0.055) 0%, transparent 56%)' }}
      />

      <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col gap-4">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-1.5">
          <motion.div variants={fadeUp}>
            <SectionTag section={section} number={sectionNumber} />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl font-extrabold leading-tight text-px-navy">
            {title} <span className="text-px-teal">{accent}</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base text-px-muted max-w-3xl leading-relaxed">
            {subtitle}
          </motion.p>
        </motion.div>
        {children}
      </div>
    </div>
  )
}

function Reveal({ step, at, children, className = '' }: { step: number; at: number; children: ReactNode; className?: string }) {
  return (
    <AnimatePresence>
      {step >= at && (
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className={className}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Card({
  title,
  detail,
  icon,
  tone = 'teal',
  meta,
}: {
  title: string
  detail: string
  icon?: ReactNode
  tone?: Tone
  meta?: string
}) {
  const c = tones[tone]
  return (
    <div className="h-full rounded-xl border bg-white p-3.5 flex flex-col gap-2" style={{ borderColor: c.border }}>
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 min-w-0">
          {icon && (
            <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: c.bg, color: c.fill }}>
              {icon}
            </div>
          )}
          <p className="text-sm font-extrabold text-px-navy leading-tight">{title}</p>
        </div>
        {meta && (
          <span className="text-xs font-bold rounded-full px-2 py-0.5 flex-shrink-0" style={{ background: c.bg, color: c.text }}>
            {meta}
          </span>
        )}
      </div>
      <p className="text-sm text-px-muted leading-relaxed">{detail}</p>
    </div>
  )
}

function Pill({ children, tone = 'teal' }: { children: ReactNode; tone?: Tone }) {
  const c = tones[tone]
  return (
    <span className="inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-bold" style={{ background: c.bg, borderColor: c.border, color: c.text }}>
      {children}
    </span>
  )
}

function Flow({ items }: { items: Array<{ label: string; sub?: string; tone?: Tone; icon?: ReactNode }> }) {
  return (
    <div className="grid gap-2 items-stretch" style={{ gridTemplateColumns: `repeat(${items.length * 2 - 1}, minmax(0, auto))` }}>
      {items.map((item, index) => {
        const c = tones[item.tone ?? 'teal']
        return (
          <div key={item.label} className="contents">
            <div className="min-w-[120px] rounded-xl border bg-white p-3 text-center flex flex-col items-center justify-center gap-2" style={{ borderColor: c.border }}>
              {item.icon && <div style={{ color: c.fill }}>{item.icon}</div>}
              <p className="text-sm font-extrabold text-px-navy leading-tight">{item.label}</p>
              {item.sub && <p className="text-xs text-px-muted leading-snug">{item.sub}</p>}
            </div>
            {index < items.length - 1 && (
              <div className="flex items-center justify-center text-px-teal px-1">
                <ArrowRight size={18} strokeWidth={2.5} />
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

function MiniTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="rounded-xl bg-white border border-[var(--border)] overflow-hidden">
      <div className="grid bg-[#F8FAFC] border-b border-[var(--border)] text-sm font-bold text-px-muted" style={{ gridTemplateColumns: `repeat(${headers.length}, minmax(0, 1fr))` }}>
        {headers.map((head) => <div key={head} className="p-3">{head}</div>)}
      </div>
      {rows.map((row) => (
        <div key={row.join('-')} className="grid border-b last:border-b-0 border-[var(--border)] text-sm" style={{ gridTemplateColumns: `repeat(${headers.length}, minmax(0, 1fr))` }}>
          {row.map((cell, index) => (
            <div key={cell} className={`p-3 leading-relaxed ${index === 0 ? 'font-extrabold text-px-navy' : 'text-px-muted'}`}>
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export function ArchitectureDecisions({ step }: Props) {
  const decisions = [
    ['Four-service split', 'Web, API, AI engine, and execution visualizer stay independently deployable.', 'per-app CI'],
    ['Separate AI service', 'Python/LangGraph stack isolated from institutional API load.', 'FastAPI'],
    ['Role-scoped web app', 'Root, institution, clinician, and patient-session views share one Next.js app.', 'Next.js'],
    ['PostgreSQL', 'Institutional, auth, and plan data with strong consistency.', 'Prisma'],
    ['MongoDB', 'Engine sessions and phase-run audit trail during the Postgres migration.', 'async'],
    ['Deterministic cache', 'Redis, keyed on phase + input hash + prompt version.', 'retrieval'],
  ]

  return (
    <EngineeringSlide
      title="Architecture"
      accent="Decisions"
      subtitle="Selected for clear responsibilities and delivery control."
    >
      <div className="grid grid-cols-3 gap-3">
        {decisions.map(([title, detail, meta], index) => (
          <Reveal key={title} step={step} at={Math.min(index + 1, 4)}>
            <Card title={title} detail={detail} meta={meta} tone={index % 2 === 0 ? 'teal' : 'navy'} />
          </Reveal>
        ))}
      </div>
    </EngineeringSlide>
  )
}

export function EndToEndAIPipeline({ step }: Props) {
  return (
    <EngineeringSlide
      title="AI Runtime"
      accent="Architecture"
      subtitle="NestJS orchestrates institutional state, the AI Brain infers, and PostgreSQL/MongoDB are the source of truth."
    >
      <Reveal step={step} at={1}>
        <Flow
          items={[
            { label: 'Next.js', sub: 'clinician / patient action', icon: <Users size={17} />, tone: 'gray' },
            { label: 'NestJS API', sub: 'policy + write', icon: <Server size={17} />, tone: 'navy' },
            { label: 'AI Brain', sub: 'LangGraph phase graph', icon: <ShieldCheck size={17} />, tone: 'navy' },
            { label: 'Model Router', sub: 'per-phase provider selection', icon: <RefreshCcw size={17} />, tone: 'teal' },
            { label: 'Deterministic cache', sub: 'Redis', icon: <Cpu size={17} />, tone: 'yellow' },
            { label: 'FastAPI', sub: 'inference only', icon: <BrainCircuit size={17} />, tone: 'coral' },
            { label: 'Provider', sub: 'Gemini or Groq', icon: <Sparkles size={17} />, tone: 'teal' },
          ]}
        />
      </Reveal>
      <Reveal step={step} at={2} className="grid grid-cols-2 gap-3 mt-3">
        <Card title="Synchronous request path" detail="Validate, authorize, persist institutional state, and return a processing response for short helper calls." tone="navy" />
        <Card title="Digitization pipeline path" detail="Ingest, layout, reading order, segment, score, assemble, validate, and repair — each phase cached and retryable." tone="teal" />
      </Reveal>
      <Reveal step={step} at={3} className="rounded-xl border border-[rgba(254,200,73,0.34)] bg-[#FFFBEB] p-4 mt-3">
        <p className="text-sm font-black text-px-navy">Return path: the engine writes phase results to MongoDB and PostgreSQL; Redis holds the deterministic phase cache—not authoritative state.</p>
      </Reveal>
    </EngineeringSlide>
  )
}

export function CVParsingPipeline({ step }: Props) {
  return (
    <EngineeringSlide
      title="Document Digitization"
      accent="Pipeline"
      subtitle="The AI Brain turns a paper test into a structured, scorable spec — without blocking the clinician."
    >
      <Reveal step={step} at={1}>
        <p className="text-xs font-bold uppercase tracking-wider text-px-navy mb-2">1. Ingest, layout, and reading order</p>
        <Flow
          items={[
            { label: 'Clinician upload', sub: 'PDF / scanned pages', icon: <Users size={17} />, tone: 'gray' },
            { label: 'Ingest node', sub: 'page images + embedded text', icon: <ShieldCheck size={17} />, tone: 'navy' },
            { label: 'Layout node', sub: 'Gemini Vision block detection', icon: <FileText size={17} />, tone: 'yellow' },
            { label: 'Reading order', sub: 'column & group detection', icon: <BrainCircuit size={17} />, tone: 'coral' },
            { label: 'Blocks', sub: 'AtomicItem candidates', icon: <CheckCircle2 size={17} />, tone: 'teal' },
          ]}
        />
      </Reveal>
      <Reveal step={step} at={2} className="grid grid-cols-3 gap-3 mt-3">
        <Card title="Segment" detail="Blocks split into sections and item candidates, then extracted into structured AtomicItems with scoring hints." tone="navy" meta="segment layer" />
        <Card title="Assemble" detail="Upstream phase outputs merge into a DraftTestSpec: title, time limits, and duration are inferred from document content." tone="coral" meta="assembly" />
        <Card title="Validate + repair" detail="Quality rules flag blocking errors; a repair node proposes and auto-applies minimal fixes before publishing." tone="teal" meta="control" />
      </Reveal>
      <Reveal step={step} at={3} className="mt-3">
        <p className="text-xs font-bold uppercase tracking-wider text-px-navy mb-2">2. Clinician review and publish</p>
        <Flow
          items={[
            { label: 'Clinician reviews', sub: 'enable, disable, or edit items', tone: 'gray' },
            { label: 'Spec validator', sub: 'pre-publish gate', tone: 'navy' },
            { label: 'Normative data', sub: 'scoring rules attached', tone: 'coral' },
            { label: 'Published test', sub: 'ready for sessions', tone: 'teal' },
          ]}
        />
      </Reveal>
    </EngineeringSlide>
  )
}

export function EvidenceMatchingEngine({ step }: Props) {
  return (
    <EngineeringSlide
      title="AI-Assisted"
      accent="Scoring Engine"
      subtitle="Deterministic scoring rules first; AI interprets complex responses; the clinician always owns the final report."
    >
      <Reveal step={step} at={1}>
        <Flow
          items={[
            { label: 'Item response', sub: 'patient answer, incl. images', icon: <BriefcaseBusiness size={17} />, tone: 'gray' },
            { label: 'Scoring rules', sub: 'attached during digitization', icon: <FileText size={17} />, tone: 'coral' },
            { label: 'AI scoring', sub: 'Gemini Vision for complex items', icon: <ShieldCheck size={17} />, tone: 'navy' },
            { label: 'Normative adjustment', sub: 'demographic + z-score', icon: <Gauge size={17} />, tone: 'yellow' },
            { label: 'Domain subscore', sub: 'per cognitive domain', icon: <Activity size={17} />, tone: 'teal' },
          ]}
        />
      </Reveal>
      <Reveal step={step} at={2} className="grid grid-cols-3 gap-3 mt-3">
        <Card title="1. Rule-based scoring" detail="Simple item types (multiple choice, digit span, serial subtraction) score deterministically against the attached rubric." tone="navy" meta="rules first" />
        <Card title="2. AI-assisted scoring" detail="Complex or image-based responses (drawing, audio) are scored by AIScoringService using Gemini Vision, only where item type requires it." tone="coral" meta="AI only where needed" />
        <Card title="3. Normative comparison" detail="Raw scores are adjusted for demographics and converted to a z-score / percentile against normative population data." tone="teal" meta="human authority" />
      </Reveal>
      <Reveal step={step} at={3} className="rounded-xl bg-[#FFFBEB] border border-[rgba(254,200,73,0.34)] p-4 mt-3">
        <p className="text-sm font-black text-px-navy">The clinician report is generated from the same persisted scores the clinician can review — not a separate opaque model output.</p>
      </Reveal>
    </EngineeringSlide>
  )
}

export function MatchingAlgorithm({ step }: Props) {
  return (
    <EngineeringSlide
      title="How Scoring"
      accent="Is Computed"
      subtitle="A rule-first pipeline; AI scores only where a rubric can't, and normative data anchors the result."
    >
      <Reveal step={step} at={1} className="grid grid-cols-2 gap-3">
        <Card
          title="1. Attach scoring rules at digitization"
          detail="Scoring rules and normative data are defined by the clinician when a test is published — searched, discovered, or entered manually via the Normative Discovery Service."
          tone="navy"
          icon={<Search size={18} />}
        />
        <Card
          title="2. Score at session close"
          detail="Simple items score against the rubric directly. Items requiring judgment (drawing, audio, free response) are scored by Gemini Vision, constrained to the item's scoring rule."
          tone="coral"
          icon={<BrainCircuit size={18} />}
        />
      </Reveal>
      <Reveal step={step} at={2} className="grid grid-cols-[1.05fr_.95fr] gap-3 mt-3">
        <div className="rounded-xl border border-[rgba(0,184,179,0.24)] bg-[#E6FAF9] p-4">
          <p className="text-sm font-black text-px-navy">3. Adjust against normative data</p>
          <div className="grid grid-cols-2 gap-x-5 gap-y-2 mt-3 text-sm text-px-navy">
            <p><strong>Raw score</strong><br /><span className="text-px-muted">per-item + domain totals</span></p>
            <p><strong>Demographic adjustment</strong><br /><span className="text-px-muted">age, education, culture</span></p>
            <p><strong>Z-score</strong><br /><span className="text-px-muted">vs. normative population</span></p>
            <p><strong>Domain subscore</strong><br /><span className="text-px-muted">e.g. fluency, memory, attention</span></p>
          </div>
        </div>
        <div className="rounded-xl border border-[rgba(254,200,73,0.34)] bg-[#FFFBEB] p-4">
          <p className="text-sm font-black text-px-navy">4. Persist the reviewable result</p>
          <p className="text-sm text-px-muted leading-relaxed mt-3">Session results, domain subscores, and item-level records persist together so the clinician report always traces back to a specific response.</p>
        </div>
      </Reveal>
      <Reveal step={step} at={3} className="rounded-xl bg-white border border-[var(--border)] p-4 mt-3">
        <div className="flex items-center justify-between gap-5">
          <div>
            <p className="text-xs font-bold text-px-muted uppercase tracking-wider">Scoring model</p>
            <p className="text-xl font-black text-px-navy mt-1">domain subscore = normalize( raw score, demographic adjustment, normative z-score )</p>
          </div>
          <div className="flex flex-wrap justify-end gap-2 max-w-[430px]">
            <Pill tone="navy">rule-based items</Pill>
            <Pill tone="yellow">AI-scored items</Pill>
            <Pill tone="coral">normative lookup</Pill>
          </div>
        </div>
        <p className="text-sm text-px-muted mt-3">Validated scoring logic is preserved end to end — AI assists interpretation, it does not replace the rubric.</p>
      </Reveal>
    </EngineeringSlide>
  )
}

export function ExplainableAI({ step }: Props) {
  return (
    <EngineeringSlide
      title="AI-Assisted,"
      accent="Clinician-Reviewed"
      subtitle="Every score traces back to a specific patient response and the rubric that produced it."
    >
      <Reveal step={step} at={1}>
        <Flow
          items={[
            { label: 'Scoring rule', sub: 'clinician-defined rubric', tone: 'gray' },
            { label: 'Patient response', sub: 'text, audio, drawing, image', tone: 'coral' },
            { label: 'AI interpretation', sub: 'only for complex items', tone: 'teal' },
            { label: 'Domain subscore', sub: 'stored snapshot', tone: 'navy' },
          ]}
        />
      </Reveal>
      <Reveal step={step} at={2} className="mt-3">
        <Flow
          items={[
            { label: 'Normative comparison', sub: 'demographic + z-score', tone: 'yellow' },
            { label: 'Clinician report', sub: 'same persisted scores', tone: 'teal' },
            { label: 'Clinician review', sub: 'human judgment', tone: 'navy' },
            { label: 'Shared care view', sub: 'clinician + caregiver', tone: 'gray' },
          ]}
        />
      </Reveal>
      <Reveal step={step} at={3} className="rounded-xl bg-[#E6FAF9] border border-[rgba(0,184,179,0.24)] p-4 mt-3">
        <p className="text-lg font-black text-px-navy">The AI interprets responses using the same validated scoring logic the clinician defined; the clinician reviews and signs off before the report reaches the caregiver.</p>
      </Reveal>
    </EngineeringSlide>
  )
}

export function ImplementationStatus({ step }: Props) {
  return (
    <EngineeringSlide
      title="Implementation"
      accent="Status"
      subtitle="Delivered capabilities are separated from production-hardening gaps."
    >
      <Reveal step={step} at={1} className="grid grid-cols-3 gap-3">
        <Card title="Digitization pipeline" detail="Multiple digitized cognitive tasks implemented; prototype tested with 25+ users at 90% completion rate." icon={<CheckCircle2 size={18} />} tone="teal" meta="Implemented" />
        <Card title="AI-assisted scoring" detail="Rule-based and AI-assisted scoring, normative comparison, and persisted domain subscores." icon={<BrainCircuit size={18} />} tone="teal" meta="Implemented" />
        <Card title="Clinical validation" detail="IRB approval secured; 1 clinical mentor + 2 collaborating clinicians; 2 datasets (DementiaBank, Dem@Care) accessed." icon={<RefreshCcw size={18} />} tone="teal" meta="Implemented" />
      </Reveal>
      <Reveal step={step} at={2} className="grid grid-cols-3 gap-3 mt-3">
        <Card title="Mongo → Postgres migration" detail="Persistence-dependent AI endpoints still require the approved PostgreSQL migration to run without MongoDB." icon={<ShieldCheck size={18} />} tone="coral" meta="Hardening" />
        <Card title="HIPAA infrastructure" detail="HIPAA-grade infrastructure and IRB expansion are Q1 roadmap items, not yet complete." icon={<UserCheck size={18} />} tone="yellow" meta="Partial" />
        <Card title="EHR integration" detail="Reimbursement and EHR integration pathways are scoped, not yet built." icon={<LockKeyhole size={18} />} tone="coral" meta="Hardening" />
      </Reveal>
      <Reveal step={step} at={3} className="rounded-xl bg-[#F8FAFC] border border-[var(--border)] p-4 mt-3">
        <p className="text-sm font-black text-px-navy">This distinction keeps the technical defense accurate: a working capability is not presented as a completed production assurance.</p>
      </Reveal>
    </EngineeringSlide>
  )
}

export function BackgroundProcessing({ step }: Props) {
  return (
    <EngineeringSlide
      title="Background"
      accent="Processing"
      subtitle="MongoDB owns phase state; the deterministic cache and model router handle retries."
    >
      <Reveal step={step} at={1}>
        <Flow
          items={[
            { label: 'Phase run', sub: 'MongoDB audit row', icon: <Database size={17} />, tone: 'navy' },
            { label: 'Dispatch', sub: 'LangGraph phase transition', icon: <RefreshCcw size={17} />, tone: 'teal' },
            { label: 'Model router', sub: 'select provider by phase', icon: <Cpu size={17} />, tone: 'yellow' },
            { label: 'FastAPI', sub: 'inference', icon: <BrainCircuit size={17} />, tone: 'coral' },
            { label: 'Persist', sub: 'result + status', icon: <ShieldCheck size={17} />, tone: 'navy' },
          ]}
        />
      </Reveal>
      <Reveal step={step} at={2} className="grid grid-cols-3 gap-3 mt-3">
        <Card title="MongoDB controls phase state" detail="EngineRepository writes a phase_runs audit row for every phase execution." tone="navy" />
        <Card title="Deterministic cache avoids rework" detail="Redis cache is keyed on phase_id + input_hash + prompt_version; invalidated on prompt version bump." tone="teal" />
        <Card title="Failure is explicit" detail="Model router retries transient provider failures before surfacing an explicit error state." tone="yellow" />
      </Reveal>
      <Reveal step={step} at={3} className="mt-3"><Pill tone="coral">No dedicated dead-letter queue is implemented</Pill></Reveal>
    </EngineeringSlide>
  )
}

export function SecurityArchitecture({ step }: Props) {
  const controls = [
    ['JWT', 'Authenticated API access', <KeyRound size={17} />],
    ['CSRF Guard', 'Safe-method enforcement on state-changing routes', <UserCheck size={17} />],
    ['institutionId', 'Institution-scoped domain records', <BriefcaseBusiness size={17} />],
    ['Rate limits', 'Public patient-session and FastAPI request throttling', <Gauge size={17} />],
    ['Forbidden vocab guard', 'Blocks non-clinical language from patient-facing text', <FileText size={17} />],
    ['Service secret', 'FastAPI internal-call authentication', <ShieldCheck size={17} />],
    ['Provider PII', 'Patient response content is sent for inference', <LockKeyhole size={17} />],
    ['HIPAA gap', 'HIPAA-grade infrastructure is a Q1 roadmap item, not yet complete', <CheckCircle2 size={17} />],
  ] as const

  return (
    <EngineeringSlide
      title="Security"
      accent="Architecture"
      subtitle="Identity, institution, safety, and service controls — with known gaps explicit."
    >
      <div className="grid grid-cols-4 gap-3">
        {controls.map(([title, detail, icon], index) => (
          <Reveal key={title} step={step} at={Math.min(Math.floor(index / 2) + 1, 4)}>
            <Card title={title} detail={detail} icon={icon} tone={index % 3 === 0 ? 'teal' : index % 3 === 1 ? 'navy' : 'coral'} />
          </Reveal>
        ))}
      </div>
      <Reveal step={step} at={4} className="rounded-xl bg-[#FFFBEB] border border-[rgba(254,200,73,0.34)] p-4 mt-3">
        <p className="text-sm font-black text-px-navy">Pre-production hardening: enforce active membership for generated content and define provider retention, consent, and PII redaction policy.</p>
      </Reveal>
    </EngineeringSlide>
  )
}

export function DatabaseDesign({ step }: Props) {
  return (
    <EngineeringSlide
      title="Patient Data"
      accent="Model"
      subtitle="PostgreSQL owns institutional records; MongoDB stores the session and scoring trail."
    >
      <Reveal step={step} at={1} className="flex flex-col gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-px-navy mb-2">Test digitization path</p>
          <Flow
            items={[
              { label: 'AtomicItem', sub: 'smallest scorable unit', icon: <FileText size={17} />, tone: 'gray' },
              { label: 'ExtractionBlock', sub: 'confirmed section', icon: <UserCheck size={17} />, tone: 'navy' },
              { label: 'DraftTestSpec', sub: 'assembled test', icon: <ShieldCheck size={17} />, tone: 'coral' },
              { label: 'Published test', sub: 'clinician-approved', icon: <Layers3 size={17} />, tone: 'teal' },
            ]}
          />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-px-navy mb-2">Patient session path</p>
          <Flow
            items={[
              { label: 'Consent + demographics', sub: 'intake router', icon: <BriefcaseBusiness size={17} />, tone: 'gray' },
              { label: 'Session', sub: 'MongoDB engine session', icon: <RefreshCcw size={17} />, tone: 'navy' },
              { label: 'Item response', sub: 'per-item stored answer', icon: <Database size={17} />, tone: 'teal' },
              { label: 'Domain subscore', sub: 'scored + normed', icon: <CheckCircle2 size={17} />, tone: 'coral' },
            ]}
          />
        </div>
      </Reveal>
      <Reveal step={step} at={2} className="grid grid-cols-3 gap-3 mt-3">
        <Card title="Authoritative records" detail="PostgreSQL owns institution, auth, and plan state; MongoDB holds engine sessions and phase-run audit rows." icon={<Database size={18} />} tone="navy" />
        <Card title="Deterministic cache" detail="Redis caches phase outputs keyed on phase + input hash + prompt version — not authoritative state." icon={<Search size={18} />} tone="teal" />
        <Card title="Known migration work" detail="Persistence-dependent AI endpoints still require the approved Mongo → Postgres migration to run standalone." icon={<Table2 size={18} />} tone="yellow" />
      </Reveal>
    </EngineeringSlide>
  )
}

export function VerificationEvidence({ step }: Props) {
  return (
    <EngineeringSlide
      title="Verification"
      accent="Evidence"
      subtitle="Unit, service, E2E, and delivery checks; unmeasured claims stay unclaimed."
    >
      <Reveal step={step} at={1}>
        <MiniTable
          headers={['Verification layer', 'Latest evidence', 'Scope']}
          rows={[
            ['FastAPI AI service', 'Adversarial test suite + eval harness against fixtures', 'Digitization pipeline, scoring, and adaptation resilience'],
            ['NestJS API', 'Unit and E2E test suites configured', 'Institution, auth, and plan workflows'],
            ['Delivery pipeline', 'Per-app CI workflows for all four Wayloom applications', 'Install, typecheck, build, and test on every push'],
          ]}
        />
      </Reveal>
      <Reveal step={step} at={2} className="grid grid-cols-3 gap-3 mt-3">
        <Card title="Verified behavior" detail="Adversarial cases, fixture-based scoring evaluation, and golden-case prompt evaluation have executable tests." icon={<CheckCircle2 size={18} />} tone="teal" />
        <Card title="Coverage to strengthen" detail="Add direct tests for the Mongo → Postgres migration path and clinician-review override flow." icon={<Gauge size={18} />} tone="yellow" />
        <Card title="Before defense" detail="Confirm the deterministic cache invalidates correctly on prompt-version bumps across all phases." icon={<Braces size={18} />} tone="coral" />
      </Reveal>
      <Reveal step={step} at={3} className="rounded-xl bg-[#FFFBEB] border border-[rgba(254,200,73,0.34)] p-4 mt-3">
        <p className="text-sm font-black text-px-navy">No model-accuracy, latency, throughput, or SLA value is claimed until it is measured on a controlled evaluation sample.</p>
      </Reveal>
    </EngineeringSlide>
  )
}

export function AIModelsRouting({ step }: Props) {
  return (
    <EngineeringSlide
      title="AI Models"
      accent="by Use Case"
      subtitle="Gemini and Groq handle inference by phase; deterministic rules and normative data anchor the score."
    >
      <Reveal step={step} at={1}>
        <MiniTable
          headers={['Use case', 'Technology', 'Role']}
          rows={[
            ['Document layout & OCR', 'Gemini Vision', 'Page understanding, block detection'],
            ['Item scoring', 'Gemini Vision', 'Score complex/image-based responses'],
            ['Translation & adaptation', 'Groq', 'Cultural & linguistic adaptation, back-translation'],
            ['Clinician report', 'Gemini', 'Domain-level performance summary'],
            ['Model routing', 'Model Router', 'Per-phase provider selection & fallback'],
          ]}
        />
      </Reveal>
      <Reveal step={step} at={2} className="flex flex-wrap gap-2 mt-3">
        <Pill>Multi-provider routing</Pill>
        <Pill tone="navy">FastAPI isolates inference</Pill>
        <Pill tone="coral">AI does not replace the clinician's rubric</Pill>
      </Reveal>
    </EngineeringSlide>
  )
}

export function PerformanceOptimizations({ step }: Props) {
  const optimizations = [
    ['Deterministic cache', 'Redis reuse of phase outputs; never the source of truth.', <Database size={17} />],
    ['Phase pipeline', 'Slow inference is split into cacheable, retryable phases outside the request path.', <RefreshCcw size={17} />],
    ['Bounded scoring', 'AI scoring is called only for items whose rubric requires judgment.', <Search size={17} />],
    ['Adversarial test suite', 'Engine resilience validated against edge-case fixtures before rollout.', <FileText size={17} />],
    ['Provider retries', 'The model router retries transient provider/network failures across Gemini and Groq.', <Zap size={17} />],
    ['Graceful degradation', 'A deterministic fallback report generates when the LLM provider is unavailable.', <Cpu size={17} />],
  ] as const

  return (
    <EngineeringSlide
      title="Performance"
      accent="Optimizations"
      subtitle="Deterministic caching, phased execution, and bounded AI calls reduce latency and cost."
    >
      <div className="grid grid-cols-3 gap-3">
        {optimizations.map(([title, detail, icon], index) => (
          <Reveal key={title} step={step} at={Math.min(Math.floor(index / 2) + 1, 3)}>
            <Card title={title} detail={detail} icon={icon} tone={index % 3 === 0 ? 'teal' : index % 3 === 1 ? 'navy' : 'yellow'} />
          </Reveal>
        ))}
      </div>
      <Reveal step={step} at={4} className="rounded-xl bg-[#FFFBEB] border border-[rgba(254,200,73,0.34)] p-4 mt-3">
        <p className="text-lg font-black text-px-navy">Known limit: the Mongo → Postgres migration is not yet complete, so persistence-dependent AI endpoints still depend on MongoDB.</p>
      </Reveal>
    </EngineeringSlide>
  )
}

export function TechnicalChallenges({ step }: Props) {
  return (
    <EngineeringSlide
      title="Technical Challenges"
      accent="& Solutions"
      subtitle="Safeguards and limitations remain explicit for technical review."
    >
      <Reveal step={step} at={1}>
        <MiniTable
          headers={['Challenge', 'Solution', 'Outcome']}
          rows={[
            ['AI latency', 'Phased pipeline + deterministic cache + retries', 'Responsive digitization path'],
            ['Document quality', 'Vision layout + validator/repair nodes', 'Publishable spec or flagged for review'],
            ['Cultural validity', 'Cultural & linguistic adaptation + back-translation', 'Clinically valid across language/culture'],
            ['Scoring safety', 'Forbidden-vocab guard on patient-facing text', 'No unsafe or non-clinical language reaches patients'],
            ['Provider outage', 'Model router retries + deterministic report fallback', 'Recoverable, observable processing'],
            ['Known migration gap', 'Mongo → Postgres migration in progress', 'Documented before production'],
          ]}
        />
      </Reveal>
    </EngineeringSlide>
  )
}

export function FutureTechnicalRoadmap({ step }: Props) {
  const nearTerm = [
    ['HIPAA infrastructure', 'Q1: build HIPAA-grade infrastructure ahead of clinical pilots.', <ShieldCheck size={17} />],
    ['IRB expansion', 'Q1: expand IRB approval alongside engine finalization.', <Database size={17} />],
    ['Pilot launch', 'Q2: launch pilots, collect first patient data, close 3 LOIs.', <UserCheck size={17} />],
  ] as const
  const midTerm = [
    ['Peer review submission', 'Q3: submit clinical validation results for peer review.', <Gauge size={17} />],
    ['Pilot expansion', 'Q3: expand pilot sites and file a patent.', <Braces size={17} />],
    ['Mongo → Postgres migration', 'Complete the approved persistence migration for standalone AI endpoints.', <Search size={17} />],
  ] as const
  const longTerm = [
    ['Scale readiness', 'Q4: license agreements, deployment-ready platform, seed raise.', <BrainCircuit size={17} />],
    ['EHR integration pathway', 'Q4: scope EHR integration and Medicare/insurance reimbursement pathways.', <LockKeyhole size={17} />],
  ] as const

  return (
    <EngineeringSlide
      title="Roadmap"
      accent="& Future Work"
      subtitle="Next: harden the delivered system before widening AI capability."
      section="Roadmap"
      sectionNumber="9"
    >
      <Reveal step={step} at={1} className="flex flex-col gap-1.5">
        <p className="text-xs font-bold uppercase tracking-wider text-px-teal">Near-term</p>
        <div className="grid grid-cols-3 gap-3">
          {nearTerm.map(([title, detail, icon]) => (
            <Card key={title} title={title} detail={detail} icon={icon} tone="teal" />
          ))}
        </div>
      </Reveal>
      <Reveal step={step} at={2} className="flex flex-col gap-1.5 mt-3">
        <p className="text-xs font-bold uppercase tracking-wider text-px-navy">Mid-term</p>
        <div className="grid grid-cols-3 gap-3">
          {midTerm.map(([title, detail, icon]) => (
            <Card key={title} title={title} detail={detail} icon={icon} tone="navy" />
          ))}
        </div>
      </Reveal>
      <Reveal step={step} at={3} className="flex flex-col gap-1.5 mt-3">
        <p className="text-xs font-bold uppercase tracking-wider text-[#D63E3F]">Long-term vision</p>
        <div className="grid grid-cols-2 gap-3">
          {longTerm.map(([title, detail, icon]) => (
            <Card key={title} title={title} detail={detail} icon={icon} tone="coral" />
          ))}
        </div>
      </Reveal>
    </EngineeringSlide>
  )
}
