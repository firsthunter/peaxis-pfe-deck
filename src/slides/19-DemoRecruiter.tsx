import { AnimatePresence, motion } from 'framer-motion'
import WorkspaceMockup from '../components/mockups/WorkspaceMockup'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

const features = [
  { label: 'Test Workspace', desc: 'All test-related data — sessions, patients, analytics — in one tabbed view. No page hops.' },
  { label: 'Session Kanban', desc: 'Drag-and-drop stage management with scoring status and audit-aware workflow' },
  { label: 'Patient Drawer', desc: 'Slide-in panel reveals domain scores, flags, and report tools without leaving the session list' },
  { label: 'Clinician AI', desc: 'Contextual assistance — scoring rationale, summaries, and generated clinician report drafts' },
]

export default function DemoRecruiter({ step }: Props) {
  return (
    <div className="slide-root">
      <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col gap-5">

        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-2">
          <motion.div variants={fadeUp}>
            <SectionTag section="Proposed Solution" number="4" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-5xl font-extrabold leading-tight tracking-tight text-px-navy">
            <GradientText variant="brand">Wayloom Clinician Suite</GradientText> — In Operation
          </motion.h2>
          <motion.p variants={fadeUp} className="text-sm text-px-muted max-w-xl">
            The clinician's full operating environment — from publishing a test to session review to signed-off reports.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-[1fr_220px] gap-5 items-start">

          {/* Main screenshot */}
          <AnimatePresence>
            {step >= 1 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.55 }}
              >
                <WorkspaceMockup />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Feature list */}
          <AnimatePresence>
            {step >= 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex flex-col gap-2"
              >
                {features.map((f, i) => (
                  <motion.div
                    key={f.label}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    className="p-3 rounded-xl bg-white border border-[var(--border)]"
                  >
                    <p className="text-sm font-bold text-px-navy mb-0.5">{f.label}</p>
                    <p className="text-xs text-px-muted">{f.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Key UX principle */}
        <AnimatePresence>
          {step >= 3 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 p-3 rounded-xl bg-[#E6FAF9] border border-[rgba(0,184,179,0.2)] text-sm">
              <div className="w-1 h-8 rounded-full bg-px-teal flex-shrink-0" />
              <p className="text-px-muted">
                <strong className="text-px-navy">UX principle:</strong>{' '}
                Patient card click opens the <strong>PatientDrawer</strong> — never navigates away.
                "View Full Session" inside the drawer navigates to the full session record. Every action has a clear, single intent.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
