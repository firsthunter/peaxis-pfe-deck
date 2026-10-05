import { AnimatePresence, motion } from 'framer-motion'
import SectionTag from '../components/ui/SectionTag'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

export default function LogicalArch({ step }: Props) {
  return <div className="slide-root">
    <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col gap-3">
      <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-0.5">
        <motion.div variants={fadeUp}><SectionTag section="Architecture & Technologies" number="7" /></motion.div>
        <motion.h2 variants={fadeUp} className="text-3xl font-extrabold text-px-navy"><span className="text-px-teal">Logical</span> Architecture</motion.h2>
        <motion.p variants={fadeUp} className="text-xs text-px-muted">Client, platform, AI, and data boundaries. Gemini is the model provider, called per phase through the model router.</motion.p>
      </motion.div>

      <AnimatePresence>
        {step >= 1 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="flex flex-1 items-center justify-center min-h-0"
          >
            <img
              src="/wayloom-arch-logical.svg"
              alt="Logical architecture showing the Next.js web app, NestJS API, FastAPI AI Brain, model router, and the data layer"
              className="w-full max-w-[1060px] max-h-[460px] object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </div>
}
