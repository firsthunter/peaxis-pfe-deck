import { AnimatePresence, motion } from 'framer-motion'
import { BrainCircuit, Database, RefreshCcw, Server } from 'lucide-react'
import Badge from '../components/ui/Badge'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

const ownership = [
  {
    icon: <Server size={20} />,
    title: 'NestJS API',
    desc: 'Owns institution auth, tenant scope, plans, roles, and persistent business records.',
  },
  {
    icon: <RefreshCcw size={20} />,
    title: 'AI Brain (LangGraph)',
    desc: 'Runs the multi-step AI pipeline (read the page, detect layout, extract questions, check answers) as a structured graph.',
  },
  {
    icon: <BrainCircuit size={20} />,
    title: 'FastAPI AI service',
    desc: 'Performs OCR/vision parsing, AI-assisted scoring, and cultural/language adaptation via Gemini and Azure OpenAI.',
  },
]

export default function PeaxisAIBrain({ step }: Props) {
  return (
    <div className="slide-root">
      <div className="relative z-10 w-full max-w-5xl px-4 flex flex-col gap-6">

        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-1">
          <motion.div variants={fadeUp}>
            <SectionTag section="Proposed Solution" number="6" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl font-extrabold leading-tight tracking-tight text-px-navy">
            <GradientText variant="teal">AI ownership</GradientText> boundaries
          </motion.h2>
          <motion.p variants={fadeUp} className="text-sm text-px-muted">
            AI infers and adapts; the platform owns rules and records; clinicians decide.
          </motion.p>
        </motion.div>

        {/* Ownership boundaries */}
        <div className="grid grid-cols-3 gap-4">
          {ownership.map((owner, i) => (
            <AnimatePresence key={owner.title}>
              {step >= 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="rounded-xl border p-5 flex flex-col gap-3 bg-white border-[var(--border)]"
                >
                  <div className="w-11 h-11 rounded-lg bg-[#E6FAF9] flex items-center justify-center text-px-teal flex-shrink-0">
                    {owner.icon}
                  </div>
                  <h3 className="text-base font-extrabold text-px-navy">{owner.title}</h3>
                  <p className="text-sm text-px-muted leading-snug">{owner.desc}</p>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>

        {/* Key architecture insights (reveals on step >= 2) */}
        <AnimatePresence>
          {step >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-2 gap-3"
            >
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#E6FAF9] border border-[rgba(0,184,179,0.2)]">
                <Database size={16} className="text-px-teal flex-shrink-0" />
                <p className="text-sm text-px-navy"><strong>PostgreSQL</strong> (via Prisma) is the main database for users, institutions, tests, sessions, and scores.</p>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[var(--border)]">
                <RefreshCcw size={16} className="text-px-teal flex-shrink-0" />
                <p className="text-sm text-px-navy"><strong>Redis</strong> is the shared cache used across the platform.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tech badges (reveals on step >= 3) */}
        <AnimatePresence>
          {step >= 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2"
            >
              <Badge variant="navy">NestJS enforces institution rules</Badge>
              <Badge variant="teal">AI Brain infers & scores</Badge>
              <Badge variant="navy">Clinician reviews & signs off</Badge>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
