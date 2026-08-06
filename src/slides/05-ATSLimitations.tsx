import { AnimatePresence, motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

const comparison = [
  {
    feature: 'Cultural Adaptation',
    braincheck: false,
    linus: false,
    altoida: false,
    wayloom: true,
  },
  {
    feature: 'Adaptive Testing',
    braincheck: false,
    linus: false,
    altoida: false,
    wayloom: true,
  },
  {
    feature: 'Conversational Delivery',
    braincheck: false,
    linus: false,
    altoida: false,
    wayloom: true,
  },
  {
    feature: 'Longitudinal Monitoring',
    braincheck: true,
    linus: true,
    altoida: true,
    wayloom: true,
  },
  {
    feature: 'Caregiver Integration',
    braincheck: false,
    linus: false,
    altoida: false,
    wayloom: true,
  },
  {
    feature: 'At-Home Usability',
    braincheck: false,
    linus: false,
    altoida: false,
    wayloom: true,
  },
]

function StatusCell({ value }: { value: boolean | string }) {
  if (value === true) return (
    <div className="flex justify-center">
      <div className="w-5 h-5 rounded-full bg-[#E6FAF9] border border-[rgba(0,184,179,0.3)] flex items-center justify-center">
        <Check size={11} className="text-[#00B8B3]" strokeWidth={3} />
      </div>
    </div>
  )
  if (value === false) return (
    <div className="flex justify-center">
      <div className="w-5 h-5 rounded-full bg-[#FFF0F0] border border-[rgba(254,89,90,0.2)] flex items-center justify-center">
        <X size={11} className="text-[#FE595A]" strokeWidth={3} />
      </div>
    </div>
  )
  return (
    <div className="flex justify-center">
      <span className="text-xs text-[#6B7280] font-bold px-1.5 py-0.5 rounded-full bg-[#F3F4F6] border border-[rgba(0,0,0,0.07)] whitespace-nowrap">
        {value}
      </span>
    </div>
  )
}

export default function ATSLimitations({ step }: Props) {
  return (
    <div className="slide-root">
      <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col gap-4">

        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-1.5">
          <motion.div variants={fadeUp}>
            <SectionTag section="Existing Solutions & Gap" number="4" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl font-extrabold leading-tight tracking-tight text-px-navy">
            Competitive <GradientText variant="teal">Landscape</GradientText>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-sm text-px-muted max-w-2xl">
            How existing cognitive-testing tools cover adaptation, delivery, and caregiver access.
          </motion.p>
        </motion.div>

        {/* Comparison table */}
        <AnimatePresence>
          {step >= 1 && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl border border-[var(--border)] overflow-hidden shadow-sm"
            >
              {/* Table header */}
              <div className="grid grid-cols-[1.8fr_1fr_1fr_1fr_1.1fr] px-4 py-2.5 bg-[#F8FAFC] border-b border-[var(--border)] items-center">
                <span className="text-xs font-bold text-px-muted uppercase tracking-wider">Feature</span>
                <span className="text-xs font-bold uppercase tracking-wider text-center text-gray-500">BrainCheck</span>
                <span className="text-xs font-bold uppercase tracking-wider text-center text-gray-500">Linus Health</span>
                <span className="text-xs font-bold uppercase tracking-wider text-center text-gray-500">Altoida</span>
                <span className="text-xs font-bold text-[#00B8B3] uppercase tracking-wider text-center">Wayloom</span>
              </div>

              {/* Rows */}
              {comparison.map((row, i) => (
                <AnimatePresence key={i}>
                  {step >= (i < 2 ? 1 : i < 4 ? 2 : 3) && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: (i % 3) * 0.05 }}
                      className="grid grid-cols-[1.8fr_1fr_1fr_1fr_1.1fr] px-4 py-2.5 border-b border-[var(--border)] last:border-b-0 hover:bg-[#F8FAFC] transition-colors items-center"
                    >
                      <span className="text-xs font-semibold text-px-navy">{row.feature}</span>
                      <StatusCell value={row.braincheck} />
                      <StatusCell value={row.linus} />
                      <StatusCell value={row.altoida} />
                      <StatusCell value={row.wayloom} />
                    </motion.div>
                  )}
                </AnimatePresence>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Observation */}
        <AnimatePresence>
          {step >= 3 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 p-3.5 rounded-xl bg-[#F3F4F6] border border-[rgba(0,0,0,0.07)]"
            >
              <div className="w-1.5 h-6 rounded-full bg-[#6B7280] flex-shrink-0" />
              <p className="text-sm text-px-navy leading-relaxed">
                <strong>Observation:</strong> existing tools monitor cognitive decline longitudinally, but none combine
                cultural adaptation, adaptive conversational testing, and caregiver integration in one at-home-usable product.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
