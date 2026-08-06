import { AnimatePresence, motion } from 'framer-motion'
import { Briefcase, GitBranch, Key, ShieldCheck, Users } from 'lucide-react'
import Card from '../components/ui/Card'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

const reqs = [
  {
    icon: <ShieldCheck size={20} />,
    id: 'FR-01',
    title: 'Authentication & Security',
    items: ['Argon2 password protection', 'JWT + OAuth sign-in'],
    color: '#00B8B3',
  },
  {
    icon: <Users size={20} />,
    id: 'FR-02',
    title: 'Multi-Tenant Architecture',
    items: ['Business-scoped records', 'Tenant context enforced'],
    color: '#00B8B3',
  },
  {
    icon: <Key size={20} />,
    id: 'FR-03',
    title: 'Roles & Permissions',
    items: ['Role and plan guards', 'Feature access by subscription'],
    color: '#00B8B3',
  },
  {
    icon: <Briefcase size={20} />,
    id: 'FR-04',
    title: 'Test Digitization & Management',
    items: ['Upload or select validated cognitive tests', 'Define scoring rules & normative data'],
    color: '#00B8B3',
  },
  {
    icon: <GitBranch size={20} />,
    id: 'FR-05',
    title: 'Patient Session Pipeline',
    items: ['Consent, intake & adaptive delivery', 'Real-time AI scoring & clinician report'],
    color: '#00B8B3',
  },
]

export default function FuncReqCore({ step }: Props) {
  return (
    <div className="slide-root">
      <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col gap-5">

        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-2">
          <motion.div variants={fadeUp}>
            <SectionTag section="Functional Requirements" number="5" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-5xl font-extrabold leading-tight tracking-tight text-px-navy">
            Core platform <GradientText variant="teal">requirements</GradientText>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base text-px-muted max-w-xl">
            Core platform capabilities for institutions, clinicians, and patients.
          </motion.p>
        </motion.div>

        {/* Requirements grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {reqs.map((r, i) => (
            <AnimatePresence key={r.id}>
              {step >= Math.floor(i / 2) + 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: (i % 2) * 0.08 }}
                  className={i === 4 ? 'col-span-2 md:col-span-1' : ''}
                >
                  <Card variant="elevated" className="p-4 h-full">
                    <div className="flex items-center gap-2 mb-3">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: `${r.color}15`, color: r.color, border: `1px solid ${r.color}25` }}
                      >
                        {r.icon}
                      </div>
                      <div>
                        <span className="text-xs font-mono text-px-muted">{r.id}</span>
                        <p className="text-base font-bold text-px-navy leading-tight">{r.title}</p>
                      </div>
                    </div>
                    <ul className="space-y-1.5">
                      {r.items.map((item) => (
                        <li key={item} className="flex items-start gap-1.5 text-sm text-px-muted">
                          <div className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: r.color }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>
      </div>
    </div>
  )
}
