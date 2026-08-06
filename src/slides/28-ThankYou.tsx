import { motion } from 'framer-motion'
import GradientText from '../components/ui/GradientText'
import { cinemaEntrance, fadeUp } from '../lib/animations'

export default function ThankYou() {
  return (
    <div className="slide-root">
      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center text-center gap-6">
        <motion.h1
          variants={cinemaEntrance}
          initial="hidden"
          animate="visible"
          className="text-6xl font-extrabold leading-[1.02] tracking-tight text-px-navy"
        >
          Thank you
          <br />
          <GradientText variant="teal">Questions?</GradientText>
        </motion.h1>

        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mt-4">
          <div className="text-xs text-px-muted">Wayloom.AI — Final Year Project · ESPRIT · 2026</div>
        </motion.div>
      </div>
    </div>
  )
}
