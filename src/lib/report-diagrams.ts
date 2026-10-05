/* Diagrams from the rapport (figures/mermaid-N.pdf), rendered to public/report/diagram-N.png */
export interface ReportDiagram {
  n: number       // mermaid block index in rapport/report.tex
  id: string      // slide id in slides-data
  label: string   // short nav tooltip
  title: string   // slide heading
}

export const REPORT_DIAGRAMS: ReportDiagram[] = [
  { n: 1,  id: 'diagram-delivery-plan',        label: 'Delivery Plan',     title: 'Sprint-level delivery plan' },
  { n: 2,  id: 'diagram-actors',               label: 'Actors',            title: 'Actors of the platform' },
  { n: 3,  id: 'diagram-system-context',       label: 'System Context',    title: 'System context' },
  { n: 4,  id: 'diagram-logical-architecture', label: 'Logical Arch.',     title: 'Verified logical architecture' },
  { n: 5,  id: 'diagram-mongo-model',          label: 'Mongo Model',       title: 'Current MongoDB data model' },
  { n: 6,  id: 'diagram-relational-schema',    label: 'Relational Schema', title: 'Target relational schema' },
  { n: 7,  id: 'diagram-ai-pipeline',          label: 'AI Pipeline',       title: 'AI Brain digitization pipeline' },
  { n: 8,  id: 'diagram-deployment',           label: 'Deployment',        title: 'Docker Compose deployment topology' },
  { n: 9,  id: 'diagram-core-usecases',        label: 'Core Use Cases',    title: 'Wayloom Core use cases' },
  { n: 10, id: 'diagram-login-sequence',       label: 'Login Sequence',    title: 'Login and session bootstrap' },
  { n: 11, id: 'diagram-invitation-sequence',  label: 'Invitation',        title: 'Plan-gated clinician invitation' },
  { n: 12, id: 'diagram-guard-chain',          label: 'Guard Chain',       title: 'Guard chain on protected routes' },
  { n: 13, id: 'diagram-core-classes',         label: 'Core Classes',      title: 'Wayloom Core class diagram' },
  { n: 14, id: 'diagram-suite-usecases',       label: 'Suite Use Cases',   title: 'Clinician Suite use cases' },
  { n: 15, id: 'diagram-digitization-seq',     label: 'Digitization',      title: 'Test digitization sequence' },
  { n: 16, id: 'diagram-concordance-seq',      label: 'Concordance',       title: 'Review, concordance and rescore' },
  { n: 17, id: 'diagram-report-workflow',      label: 'Report Review',     title: 'Clinician report review workflow' },
  { n: 18, id: 'diagram-suite-classes',        label: 'Suite Classes',     title: 'Clinician Suite class diagram' },
  { n: 19, id: 'diagram-patient-usecases',     label: 'Patient Use Cases', title: 'Patient Portal use cases' },
  { n: 20, id: 'diagram-intake-sequence',      label: 'Intake',            title: 'Patient intake sequence' },
  { n: 21, id: 'diagram-session-sequence',     label: 'Session',           title: 'Patient session sequence' },
  { n: 22, id: 'diagram-session-states',       label: 'Session States',    title: 'Patient session state machine' },
  { n: 23, id: 'diagram-intake-classes',       label: 'Intake Classes',    title: 'Intake class diagram' },
  { n: 24, id: 'diagram-ci-pipeline',          label: 'CI Pipeline',       title: 'CI pipeline per service' },
  { n: 25, id: 'diagram-cross-tenant',         label: 'Cross-Tenant',      title: 'Cross-institution isolation' },
]
