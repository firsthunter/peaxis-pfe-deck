import { AnimatePresence, motion } from 'framer-motion'
import { Bot, Clock, TrendingUp, Users } from 'lucide-react'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

const forces = [
  {
    icon: <TrendingUp size={20} />,
    title: 'Aging population',
    color: '#00B8B3',
  },
  {
    icon: <Clock size={20} />,
    title: 'Clinical overload',
    color: '#001027',
  },
  {
    icon: <Users size={20} />,
    title: 'Caregiver expectations',
    color: '#6B7280',
  },
  {
    icon: <Bot size={20} />,
    title: 'AI adoption in healthcare',
    color: '#374151',
  },
]

export default function GeneralIntro({ step }: Props) {
  return (
    <div className="slide-root">
      {/* Subtle background wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 20% 40%, rgba(0,184,179,0.05) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 w-full max-w-5xl px-4 flex flex-col gap-8">

        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-1">
          <motion.div variants={fadeUp}>
            <SectionTag section="Clinical Context" number="3" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-5xl font-extrabold leading-tight tracking-tight text-px-navy">
            Cognitive Health in the <GradientText variant="teal">Digital Era</GradientText>
          </motion.h2>
        </motion.div>

        {/* Four forces grid */}
        <div className="grid grid-cols-2 gap-4">
          {forces.map((f, i) => (
            <AnimatePresence key={f.title}>
              {step >= i + 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-white rounded-2xl border border-[var(--border)] p-5 shadow-sm flex items-center gap-4"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex flex-col items-center justify-center flex-shrink-0"
                    style={{ background: `${f.color}12`, color: f.color, border: `1px solid ${f.color}25` }}
                  >
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold tracking-tight text-px-navy">{f.title}</h3>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>

      </div>

      {/* Bottom teal line */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: 'linear-gradient(90deg, transparent, #00B8B3, transparent)' }} />
    </div>
  )
}
