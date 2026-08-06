import { AnimatePresence, motion } from 'framer-motion'
import { Building2, Settings, Users } from 'lucide-react'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import { cinemaEntrance, fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

const modules = [
  {
    icon: <Settings size={20} />,
    name: 'Wayloom Core',
    sub: 'Institution foundation',
  },
  {
    icon: <Users size={20} />,
    name: 'Wayloom Clinician Suite',
    sub: 'Test publishing & scoring review',
  },
  {
    icon: <Building2 size={20} />,
    name: 'Wayloom Patient Portal',
    sub: 'Conversational testing & results',
  },
]

export default function SolutionOverview({ step }: Props) {
  return (
    <div className="slide-root">
      <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col gap-6">

        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col items-center text-center gap-3">
          <motion.div variants={fadeUp}>
            <SectionTag section="Proposed Solution" number="6" />
          </motion.div>
          <motion.h2 variants={cinemaEntrance} className="text-5xl font-extrabold leading-tight tracking-tight text-px-navy">
            <GradientText variant="brand">Wayloom.AI</GradientText> — AI-Powered Cognitive Testing Platform
          </motion.h2>
        </motion.div>

        {/* Three modules */}
        <AnimatePresence>
          {step >= 1 && (
            <div className="grid grid-cols-3 gap-4">
              {modules.map((m, i) => {
                const isBrandColor = i % 2 === 1 ? '#00B8B3' : '#001027'
                return (
                <motion.div
                  key={m.name}
                  initial={{ opacity: 0, y: 32, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                >
                  <div
                    className="flex flex-col items-center text-center gap-3 p-5 rounded-2xl border bg-white border-[var(--border)] shadow-sm hover:shadow-md transition-shadow h-full"
                  >
                    <div
                      className="w-11 h-11 rounded-2xl flex items-center justify-center text-white flex-shrink-0"
                      style={{ background: isBrandColor }}
                    >
                      {m.icon}
                    </div>
                    <div>
                      <p className="text-xs font-mono text-px-muted mb-0.5">{m.sub}</p>
                      <p className="text-sm font-extrabold text-px-navy">{m.name}</p>
                    </div>
                  </div>
                </motion.div>
              )
              })}
            </div>
          )}
        </AnimatePresence>

        {/* Stakeholder mapping */}
        <AnimatePresence>
          {step >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-3 gap-3"
            >
              {[
                { who: 'Institution Admin', uses: 'Wayloom Core' },
                { who: 'Clinician', uses: 'Wayloom Clinician Suite' },
                { who: 'Patient / Caregiver', uses: 'Wayloom Patient Portal' },
              ].map((s, i) => (
                <motion.div
                  key={s.who}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="p-3 rounded-xl bg-white border border-[var(--border)] flex flex-col gap-1"
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-px-teal">{s.who}</p>
                  <p className="text-sm font-semibold text-px-navy">{s.uses}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  )
}
