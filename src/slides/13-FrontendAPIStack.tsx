import { AnimatePresence, motion } from 'framer-motion'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import TechBadge from '../components/ui/TechBadge'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

const layers = [
  {
    name: 'Frontend',
    tech: ['Next.js', 'React', 'Tailwind', 'TypeScript'],
    detail: 'Root, institution, clinician, and patient-session apps share React/TypeScript patterns',
  },
  {
    name: 'API',
    tech: ['NestJS', 'Prisma', 'JWT', 'TypeScript'],
    detail: 'NestJS + Prisma: institutions, auth, roles, plans, and transactional platform data',
  },
  {
    name: 'AI Service',
    tech: ['FastAPI', 'Gemini / Groq', 'Python', 'LangGraph'],
    detail: 'Stateless inference for digitization, scoring, and cultural/language adaptation',
  },
  {
    name: 'Database',
    tech: ['PostgreSQL', 'MongoDB', 'Redis'],
    detail: 'Postgres for institutional data, Mongo for engine sessions, Redis for deterministic caching',
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
            Four applications (web, API, execution) and one AI engine across the implemented stack.
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
                { label: 'Tenant controls', value: 'Institution-scoped records with role and plan guards' },
                { label: 'Deterministic caching', value: 'Redis cache keyed on phase + input hash + prompt version' },
                { label: 'Model routing', value: 'Per-phase routing across Gemini and Groq providers' },
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
