import { motion } from 'framer-motion'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import { REPORT_DIAGRAMS, type ReportDiagram } from '../lib/report-diagrams'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

function DiagramSlide({ diagram, index }: { diagram: ReportDiagram; index: number }) {
  return (
    <div className="slide-root">
      <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col gap-3">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-1">
          <motion.div variants={fadeUp}>
            <SectionTag section="Appendix · Report Diagrams" number={String(index + 1)} />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl font-extrabold text-px-navy">
            <GradientText variant="teal">{diagram.title}</GradientText>
          </motion.h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="flex items-center justify-center min-h-0"
        >
          <img
            src={`/report/diagram-${diagram.n}.png`}
            alt={diagram.title}
            className="w-full max-h-[68vh] object-contain rounded-xl bg-white border border-[var(--border)] p-3"
          />
        </motion.div>
      </div>
    </div>
  )
}

// One slide component per rapport diagram, in the order of REPORT_DIAGRAMS
export const ReportDiagramSlides = REPORT_DIAGRAMS.map((diagram, index) => {
  const Slide = (_props: Props) => <DiagramSlide diagram={diagram} index={index} />
  Slide.displayName = `ReportDiagram${diagram.n}`
  return Slide
})
