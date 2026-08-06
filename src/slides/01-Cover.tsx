import { motion } from 'framer-motion'
import Badge from '../components/ui/Badge'
import GradientText from '../components/ui/GradientText'
import { cinemaEntrance, fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

export default function Cover({ step: _step }: Props) {
  return (
    <div className="slide-root">
      {/* Teal accent orb behind content */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: 640,
          height: 640,
          background: 'radial-gradient(circle, rgba(0,184,179,0.07) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center gap-5 max-w-4xl w-full"
      >
        {/* Top badge row */}
        <motion.div variants={fadeUp} className="flex items-center gap-3 flex-wrap justify-center">
          <Badge variant="teal" size="md">ESPRIT · 2026</Badge>
          <Badge variant="gray" size="md">Final Year Project</Badge>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          variants={cinemaEntrance}
          className="text-6xl font-extrabold leading-[1.06] tracking-tight"
        >
          <GradientText variant="brand">Wayloom.AI</GradientText>
          <br />
          <span className="text-px-navy">An AI-Powered</span>
          <br />
          <span className="text-px-navy">Cognitive Testing Platform</span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          variants={fadeUp}
          className="w-16 h-[3px] rounded-full"
          style={{ background: '#00B8B3' }}
        />

        {/* Presenter */}
        <motion.div variants={fadeUp} className="flex flex-col items-center gap-1">
          <p className="text-lg font-bold text-px-navy">Ben Dhaou Mohamed Iheb</p>
          <p className="text-xs text-px-muted mt-0.5">
            École Supérieure Privée d'Ingénierie et de Technologie — ESPRIT
          </p>
        </motion.div>

        {/* Supervisors row */}
        <motion.div
          variants={fadeUp}
          className="flex items-center gap-6 px-6 py-3 rounded-2xl bg-white border border-[var(--border)] shadow-sm"
        >
          <div className="flex flex-col items-center gap-0.5">
            <span className="text-xs font-bold text-px-teal uppercase tracking-widest">Academic Supervisor</span>
            <span className="text-sm font-semibold text-px-navy">Mme Saoussen Lakhdhar</span>
          </div>
          <div className="w-px h-8 bg-gray-200" />
          <div className="flex flex-col items-center gap-0.5">
            <span className="text-xs font-bold text-px-muted uppercase tracking-widest">Company Supervisor</span>
            <span className="text-sm font-semibold text-px-navy">Mr. Fedi Naimi</span>
          </div>
        </motion.div>

      </motion.div>

      {/* Bottom geometric decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg, transparent, #00B8B3, transparent)' }} />
    </div>
  )
}
