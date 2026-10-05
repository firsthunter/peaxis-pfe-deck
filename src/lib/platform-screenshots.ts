/* Wayloom platform screenshots from the rapport, copied to public/platform/ */
export interface PlatformScreenshot {
  file: string    // file name in public/platform/
  id: string      // slide id in slides-data
  label: string   // short nav tooltip
  title: string   // slide heading
}

export const PLATFORM_SCREENSHOTS: PlatformScreenshot[] = [
  { file: 'login-page.png',                 id: 'shot-login',              label: 'Login',           title: 'Sign-in' },
  { file: 'institution-member-management.png', id: 'shot-member-management', label: 'Members',       title: 'Institution member management' },
  { file: 'plan-usage-panel.png',           id: 'shot-plan-usage',         label: 'Plan Usage',      title: 'Plan usage and limits' },
  { file: 'test-digitization-upload.png',   id: 'shot-digitization-upload', label: 'Upload',         title: 'Test digitization upload' },
  { file: 'parsed-test-editor.png',         id: 'shot-parsed-editor',      label: 'Parsed Editor',   title: 'Parsed test editor' },
  { file: 'session-report-concordance.png', id: 'shot-concordance',        label: 'Concordance',     title: 'Session report and concordance' },
  { file: 'patient-results-summary.png',    id: 'shot-results',            label: 'Results',         title: 'Patient results summary' },
  { file: 'patient-welcome.png',            id: 'shot-patient-welcome',    label: 'Patient Welcome', title: 'Patient welcome' },
  { file: 'patient-consent.png',            id: 'shot-patient-consent',    label: 'Consent',         title: 'Patient consent' },
  { file: 'patient-assessment.png',         id: 'shot-patient-assessment', label: 'Assessment',      title: 'Patient assessment' },
]
