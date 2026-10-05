import { AnimatePresence, motion } from 'framer-motion'
import { CreditCard, ShieldCheck, Users } from 'lucide-react'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import ScreenshotFrame from '../components/ui/ScreenshotFrame'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

const pillars = [
  { icon: <ShieldCheck size={20} />, title: 'Identity & Access' },
  { icon: <CreditCard size={20} />, title: 'Plans & Entitlements' },
  { icon: <Users size={20} />, title: 'Institution Context' },
]

export default function PeaxisCore({ step }: Props) {
  return (
    <div className="slide-root">
      <div className="relative z-10 w-full max-w-5xl px-4 flex flex-col gap-6">

        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-2">
          <motion.div variants={fadeUp}>
            <SectionTag section="Proposed Solution" number="6" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-5xl font-extrabold leading-tight tracking-tight text-px-navy">
            <GradientText variant="brand">Wayloom Core</GradientText>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-6 items-stretch">
          <AnimatePresence>
            {step >= 1 && (
              <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45 }}>
                <ScreenshotFrame
                  src="/platform/institution-member-management.png"
                  alt="Wayloom Core institution workspace"
                  caption="Wayloom Core — access, institution context, and plan controls"
                  className="h-full"
                />
              </motion.div>
            )}
          </AnimatePresence>
          <div className="flex flex-col gap-3">
            {pillars.map((f, i) => (
              <AnimatePresence key={f.title}>
                {step >= i + 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white border border-[var(--border)]"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#E6FAF9] flex items-center justify-center text-px-teal flex-shrink-0">{f.icon}</div>
                    <div><p className="text-sm font-extrabold text-px-navy">{f.title}</p></div>
                  </motion.div>
                )}
              </AnimatePresence>
            ))}
          </div>
        </div>

        {/* Business value */}
        <AnimatePresence>
          {step >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-[#E6FAF9] border border-[rgba(0,184,179,0.2)]"
            >
              <div className="w-1 h-6 rounded-full bg-px-teal flex-shrink-0" />
              <p className="text-sm text-px-navy">
                One control centre for institutions, clinicians, and patients
              </p>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  )
}
