import { AnimatePresence, motion } from 'framer-motion'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import TechBadge from '../components/ui/TechBadge'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

const layers = [
  {
    name: 'Frontend · wayloom-web',
    tech: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS', 'Radix UI'],
    detail: 'The website: TanStack Query for server data, React Hook Form + Zod for forms, next-intl for multi-language UI',
  },
  {
    name: 'Backend · wayloom-api',
    tech: ['NestJS 11', 'Prisma', 'JWT', 'Helmet'],
    detail: 'Business rules and database access: accounts, institutions, tests, sessions, and scores',
  },
  {
    name: 'AI brain · wayloom-ai',
    tech: ['FastAPI', 'Gemini', 'Azure OpenAI', 'LangGraph'],
    detail: 'Reads scanned tests (OCR), adapts them to other languages and cultures, and helps score answers',
  },
  {
    name: 'Data & infrastructure',
    tech: ['PostgreSQL', 'Redis', 'Docker', 'pnpm'],
    detail: 'PostgreSQL is the main database; Redis is the shared cache; Docker Compose runs the whole stack',
  },
]

export default function FrontendAPIStack({ step }: Props) {
  return (
    <div className="slide-root">
      <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col gap-5">

        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-2">
          <motion.div variants={fadeUp}>
            <SectionTag section="Architecture & Technologies" number="7" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-5xl font-extrabold leading-tight tracking-tight text-px-navy">
            Tech <GradientText variant="teal">Stack</GradientText> — Four Layers
          </motion.h2>
          <motion.p variants={fadeUp} className="text-sm text-px-muted max-w-2xl">
            Three applications (web, API, AI brain) that talk over HTTP, on one shared PostgreSQL and Redis data layer.
          </motion.p>
        </motion.div>

        {/* Four simple cards */}
        <div className="grid grid-cols-4 gap-3">
          {layers.map((layer, i) => (
            <AnimatePresence key={layer.name}>
              {step >= i + 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                  className="flex flex-col gap-3 p-4 rounded-xl bg-white border border-[var(--border)]"
                >
                  <p className="text-sm font-extrabold text-px-navy">{layer.name}</p>
                  <p className="text-xs text-px-muted leading-relaxed">{layer.detail}</p>
                  <div className="flex flex-wrap gap-1.5 pt-1 border-t border-[var(--border)]">
                    {layer.tech.map((t) => (
                      <TechBadge key={t} name={t} />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>

        {/* Key principles */}
        <AnimatePresence>
          {step >= 5 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-3 gap-3"
            >
              {[
                { label: 'Institution-scoped data', value: 'Every record belongs to an institution; the API enforces tenant boundaries' },
                { label: 'Clinician keeps authority', value: 'AI assists interpretation against the validated rubric; the clinician signs off' },
                { label: 'Secure by default', value: 'bcrypt passwords, JWT auth, Helmet headers, rate limiting, input validation' },
              ].map((p) => (
                <div key={p.label} className="p-3 rounded-xl bg-[#E6FAF9] border border-[rgba(0,184,179,0.2)]">
                  <p className="text-xs font-bold text-px-teal uppercase tracking-wider">{p.label}</p>
                  <p className="text-xs text-px-navy mt-1">{p.value}</p>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
