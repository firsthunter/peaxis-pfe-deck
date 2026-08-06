import { AnimatePresence, motion } from 'framer-motion'
import { Eye, Lightbulb, Puzzle } from 'lucide-react'
import Card from '../components/ui/Card'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

const gaps = [
  {
    icon: <Eye size={20} />,
    title: 'Rapid growth: >25% CAGR over 6 years',
    color: '#FE595A',
  },
  {
    icon: <Puzzle size={20} />,
    title: 'Large TAM: $31M global market by 2030',
    color: '#6B7280',
  },
  {
    icon: <Lightbulb size={20} />,
    title: 'Underserved US: $2B market, few accessible tools',
    color: '#001027',
  },
]

const responsePrinciples = [
  { label: 'Accelerating dementia' },
  { label: 'Clinical overload' },
  { label: 'Policy & tech momentum' },
]

export default function MarketGap({ step }: Props) {
  return (
    <div className="slide-root">
      <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col gap-6">

        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-2">
          <motion.div variants={fadeUp}>
            <SectionTag section="Existing Solutions & Gap" number="4" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-5xl font-extrabold leading-tight tracking-tight text-px-navy">
            An exploding market for <GradientText variant="teal">cognitive health</GradientText>
          </motion.h2>
        </motion.div>

        {/* Gap cards */}
        <AnimatePresence>
          {step >= 1 && (
            <div className="grid grid-cols-3 gap-4">
              {gaps.map((g, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card variant="elevated" className="p-5 h-full flex flex-col gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${g.color}12`, color: g.color, border: `1px solid ${g.color}25` }}
                    >
                      {g.icon}
                    </div>
                    <div>
                      <p className="text-base font-bold text-px-navy mb-1.5">{g.title}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>

        {/* Engineering response */}
        <AnimatePresence>
          {step >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-3 gap-3"
            >
              {responsePrinciples.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.08 }}
                  className="p-3 rounded-xl bg-[#F3F4F6] border border-[rgba(0,0,0,0.07)] text-center"
                >
                  <div className="text-base font-extrabold text-px-navy">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Project objective */}
        <AnimatePresence>
          {step >= 3 && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 p-4 rounded-xl border"
              style={{ background: 'linear-gradient(135deg, #E6FAF9, #F8FAFC)', borderColor: 'rgba(0,184,179,0.2)' }}
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: '#E6FAF9' }}>
                <Lightbulb size={18} className="text-px-teal" />
              </div>
              <div>
                <p className="text-base font-bold text-px-navy">This gap defines the project's objective</p>
                <p className="text-sm text-px-muted">One accessible, culturally-adaptive cognitive-testing platform.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
