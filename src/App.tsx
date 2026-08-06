import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useState } from 'react'
import GridBackground from './components/background/GridBackground'
import LightAurora from './components/background/LightAurora'
import LoadingScreen from './components/layout/LoadingScreen'
import Navigation from './components/layout/Navigation'
import ProgressBar from './components/layout/ProgressBar'
import SmallScreenBlocker from './components/layout/SmallScreenBlocker'
import ExportView from './ExportView'
import { usePresentation } from './hooks/usePresentation'
import { slideVariants } from './lib/animations'

import IndustryContext from './slides/00-GeneralIntro'
import Cover from './slides/01-Cover'
import PresentationPlan from './slides/01b-PresentationPlan'
import CompanyOverview from './slides/02-CompanyOverview'
import InternshipContext from './slides/03-InternshipContext'
import RecruitmentChallenges from './slides/04-RecruitmentPain'
import ATSLimitations from './slides/05-ATSLimitations'
import MarketGap from './slides/06-MarketGap'
import Methodology from './slides/06b-Methodology'
import FuncReqCore from './slides/07-FunctionalReq1'
import FuncReqAI from './slides/08-FunctionalReq2'
import NFR from './slides/09-NonFunctionalReq'
import SolutionOverview from './slides/10-SolutionOverview'
import PeaxisHire from './slides/11-PeaxisHire'
import PeaxisJobs from './slides/12-PeaxisJobs'
import LogicalArch from './slides/15-LogicalArchitecture'
import PeaxisCore from './slides/16-PeaxisCore'
import PhysicalArch from './slides/17-PhysicalArchitecture'
import {
    AIModelsRouting,
    CVParsingPipeline,
    EndToEndAIPipeline,
    EvidenceMatchingEngine,
    FutureTechnicalRoadmap,
    MatchingAlgorithm,
    PerformanceOptimizations,
    TechnicalChallenges,
} from './slides/18-EngineeringDeepDive'
import Conclusion from './slides/23-Conclusion'
import ThankYou from './slides/28-ThankYou'

export const SLIDE_COMPONENTS = [
  Cover,
  PresentationPlan,
  CompanyOverview,
  InternshipContext,
  IndustryContext,
  RecruitmentChallenges,
  ATSLimitations,
  MarketGap,
  Methodology,
  FuncReqCore,
  FuncReqAI,
  NFR,
  SolutionOverview,
  PeaxisCore,
  PeaxisHire,
  PeaxisJobs,
  LogicalArch,
  PhysicalArch,
  EndToEndAIPipeline,
  CVParsingPipeline,
  EvidenceMatchingEngine,
  MatchingAlgorithm,
  AIModelsRouting,
  PerformanceOptimizations,
  TechnicalChallenges,
  FutureTechnicalRoadmap,
  Conclusion,
  ThankYou,
]

export default function App() {
  const params = new URLSearchParams(window.location.search)
  const isExportMode = params.get('export') === 'true'

  return isExportMode ? <ExportView /> : <PresentationApp />
}

function PresentationApp() {
  const [isLoading, setIsLoading] = useState(true)
  const state = usePresentation()

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('button, a, input, [data-no-nav]')) return
      if (e.clientX < window.innerWidth * 0.25) {
        state.goPrev()
      } else {
        state.goNext()
      }
    },
    [state],
  )

  const SlideComponent = SLIDE_COMPONENTS[state.slideIndex]

  return (
    <>
      <SmallScreenBlocker />
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* Persistent background layers */}
      <LightAurora />
      <GridBackground />

      {!isLoading && (
        <div
          className="relative w-screen h-screen overflow-hidden"
          onClick={handleClick}
        >
          {/* Top bar */}
          <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 pt-4 pointer-events-none">
            {/* Left — Prospecter */}
            <img src="/prospecter-logo.png" alt="Prospecter" style={{ height: 40, width: 'auto', display: 'block' }} />
           
            {/* Centre — Wayloom.AI */}
            <img src="/wayloom-logo.png" alt="Wayloom.AI" style={{ height: 32, width: 'auto', display: 'block' }} />

            {/* Right — ESPRIT */}
            <img src="/esprit-logo.png" alt="ESPRIT" style={{ height: 40, width: 'auto', display: 'block' }} />
          </div>

          <ProgressBar slideIndex={state.slideIndex} totalSlides={state.totalSlides} />

          {/* Slide counter */}
          <div className="fixed bottom-5 left-8 z-50 text-xs font-mono text-px-muted tabular-nums">
            {String(state.slideIndex + 1).padStart(2, '0')} / {String(state.totalSlides).padStart(2, '0')}
          </div>

          {/* Slide viewport */}
          <AnimatePresence mode="wait">
            <motion.div
              key={state.slideIndex}
              variants={slideVariants}
              initial="enter"
              animate="visible"
              exit="exit"
              className="absolute inset-0"
            >
              <SlideComponent step={state.step} />
            </motion.div>
          </AnimatePresence>

          {/* Navigation sidebar */}
          <Navigation
            slideIndex={state.slideIndex}
            totalSlides={state.totalSlides}
            goTo={state.goTo}
            goPrev={state.goPrev}
            goNext={state.goNext}
          />
        </div>
      )}
    </>
  )
}
