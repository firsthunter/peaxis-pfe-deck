import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle, Layers3, Lightbulb } from 'lucide-react'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

const sections = [
  {
    icon: <CheckCircle size={18} />,
    title: 'Engineering Achievements',
    color: '#00B8B3',
    items: ['Full-stack cognitive-testing platform, IRB-approved and clinically validated'],
  },
  {
    icon: <Layers3 size={18} />,
    title: 'Architectural Achievements',
    color: '#00B8B3',
    items: ['Four-service architecture with a deterministic, cacheable AI digitization pipeline'],
  },
  {
    icon: <Lightbulb size={18} />,
    title: 'Lessons Learned',
    color: '#00B8B3',
    items: ['Clinician authority stays central; AI assists, never replaces the rubric'],
  },
]


export default function Conclusion({ step }: Props) {
  return (
    <div className="slide-root">
      <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col gap-5">

        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-2">
          <motion.div variants={fadeUp}>
            <SectionTag section="Results & Conclusion" number="10" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-5xl font-extrabold leading-tight tracking-tight text-px-navy">
            Results & <GradientText variant="teal">Conclusion</GradientText>
          </motion.h2>
        </motion.div>

        {/* Three sections */}
        <div className="grid grid-cols-3 gap-3">
          {sections.map((sec, i) => (
            <AnimatePresence key={sec.title}>
              {step >= i + 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-white rounded-xl border border-[var(--border)] p-4 flex flex-col gap-3"
                >
                  {/* Header */}
                  <div className="flex items-center gap-2">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-white flex-shrink-0"
                      style={{ background: sec.color }}
                    >
                      {sec.icon}
                    </div>
                    <h3 className="text-sm font-extrabold text-px-navy">{sec.title}</h3>
                  </div>

                  {/* Divider */}
                  <div className="h-[1px] w-8 rounded-full" style={{ background: `${sec.color}40` }} />

                  {/* Bullet list */}
                  <ul className="flex flex-col gap-2">
                    {sec.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-xs text-px-muted leading-snug">
                        <span className="w-1 h-1 rounded-full flex-shrink-0 mt-1.5" style={{ background: sec.color }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>

        {/* Closing statement */}
        <AnimatePresence>
          {step >= 4 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 px-5 py-4 rounded-xl bg-[#E6FAF9] border border-[rgba(0,184,179,0.25)]"
            >
              <div className="w-8 h-8 rounded-full bg-px-teal flex items-center justify-center flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7.5l3 3 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-sm text-px-navy leading-relaxed">
                <strong>Validated scoring logic, not opaque AI — early detection gives families time.</strong>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
