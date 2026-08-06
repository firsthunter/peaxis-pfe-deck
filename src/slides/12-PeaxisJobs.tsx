import { AnimatePresence, motion } from 'framer-motion'
import { Award, Search, Upload } from 'lucide-react'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import ScreenshotFrame from '../components/ui/ScreenshotFrame'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

const pillars = [
  {
    title: 'Consent & Intake',
    color: '#00B8B3',
    icon: <Search size={20} />,
  },
  {
    title: 'Conversational Testing',
    color: '#009E9A',
    icon: <Upload size={20} />,
  },
  {
    title: 'Results & Caregiver Access',
    color: '#001027',
    icon: <Award size={20} />,
  },
]

export default function PeaxisJobs({ step }: Props) {
  return (
    <div className="slide-root">
      <div className="relative z-10 w-full max-w-5xl px-4 flex flex-col gap-6">

        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-1">
          <motion.div variants={fadeUp}>
            <SectionTag section="Proposed Solution" number="6" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl font-extrabold leading-tight tracking-tight text-px-navy">
            <GradientText variant="brand">Wayloom Patient Portal</GradientText>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-6 items-stretch">
          <AnimatePresence>
            {step >= 1 && (
              <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45 }}>
                <ScreenshotFrame
                  src="/wayloom-portal.png"
                  alt="Wayloom patient session portal"
                  caption="Wayloom Patient Portal — consent, conversational testing, and results"
                  className="h-full"
                />
              </motion.div>
            )}
          </AnimatePresence>
          <div className="flex flex-col gap-3">
            {pillars.map((sec, colIdx) => (
              <AnimatePresence key={sec.title}>
                {step >= colIdx + 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}
                    className="bg-white rounded-xl border border-[var(--border)] p-4 flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${sec.color}1A`, color: sec.color }}>{sec.icon}</div>
                    <div><h3 className="text-sm font-extrabold text-px-navy">{sec.title}</h3></div>
                  </motion.div>
                )}
              </AnimatePresence>
            ))}
          </div>
        </div>

        {/* Business value */}
        <AnimatePresence>
          {step >= 4 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-[#E6FAF9] border border-[rgba(0,184,179,0.2)]"
            >
              <div className="w-1.5 h-6 rounded bg-[#00B8B3] flex-shrink-0" />
              <p className="text-sm text-px-navy">
                Consent → complete test → clinician & caregiver see results
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
