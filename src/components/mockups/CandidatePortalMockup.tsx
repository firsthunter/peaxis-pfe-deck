/**
 * PatientPortalMockup — Wayloom patient session portal
 * High-quality JSX recreation with browser chrome + portal.wayloom-ai.com URL
 */

const jobs = [
  {
    title: 'Memory & Orientation Screening',
    company: 'Tunis Memory Clinic',
    location: 'In-clinic',
    type: '10–15 min',
    match: 'Not started',
    posted: 'Assigned 2 days ago',
    tags: ['Memory', 'Orientation', 'Language'],
    salary: 'Adapted: Arabic, TN',
    color: '#00B8B3',
  },
  {
    title: 'Digit Span & Attention Task',
    company: 'Dementia Research Study',
    location: 'At-home',
    type: '5–10 min',
    match: 'In progress',
    posted: 'Assigned 5 days ago',
    tags: ['Attention', 'Working Memory'],
    salary: 'Adapted: French, TN',
    color: 'linear-gradient(135deg,#374151,#4B5563)',
  },
  {
    title: 'Verbal Fluency Assessment',
    company: 'Neurology Dept — CHU',
    location: 'In-clinic',
    type: '8 min',
    match: 'Completed',
    posted: '1 week ago',
    tags: ['Fluency', 'Language'],
    salary: 'Adapted: English',
    color: '#9CA3AF',
  },
]

function MatchBadge({ score }: { score: string }) {
  const c = score === 'Completed'
    ? { bg: '#E6FAF9', text: '#009E9A' }
    : score === 'In progress'
    ? { bg: '#F3F4F6', text: '#374151' }
    : { bg: '#F3F4F6', text: '#6B7280' }
  return (
    <span
      className="inline-flex items-center gap-0.5 font-bold px-1.5 py-0.5 rounded-full"
      style={{ background: c.bg, color: c.text, fontSize: 8 }}
    >
      <svg width="7" height="7" viewBox="0 0 12 12" fill="none">
        <path d="M6 1l1.3 2.6L10 4.3l-2 1.9.5 2.8L6 7.6 3.5 9l.5-2.8L2 4.3l2.7-.7L6 1z" fill="currentColor" />
      </svg>
      {score}
    </span>
  )
}

export default function CandidatePortalMockup({ compact = false }: { compact?: boolean }) {
  const f = compact ? 9 : 10
  return (
    <div className="rounded-xl overflow-hidden border border-[rgba(0,0,0,0.1)] shadow-xl">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-[rgba(0,0,0,0.08)]" style={{ background: '#F1F3F4' }}>
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28CA41]" />
        </div>
        <div className="flex-1 mx-2 h-5 rounded-md bg-white border border-[rgba(0,0,0,0.1)] flex items-center gap-1.5 px-2">
          <svg width="9" height="9" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
            <path d="M10 1.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17z" stroke="#9CA3AF" strokeWidth="1.4" />
            <path d="M7 10c0-3.3 1.3-6 3-6s3 2.7 3 6-1.3 6-3 6-3-2.7-3-6z" stroke="#9CA3AF" strokeWidth="1.2" />
            <path d="M1.5 10h17M2.5 6.5h15M2.5 13.5h15" stroke="#9CA3AF" strokeWidth="1.1" />
          </svg>
          <span style={{ fontSize: 9, color: '#6B7280', fontFamily: 'monospace' }}>portal.wayloom-ai.com</span>
        </div>
      </div>

      {/* App body */}
      <div className="bg-[#F8FAFC] p-2.5 flex flex-col gap-2">
        {/* App nav */}
        <div className="flex items-center justify-between bg-white rounded-xl border border-[rgba(0,0,0,0.07)] px-3 py-1.5">
          <img src="/wayloom-logo.png" alt="Wayloom" style={{ height: 14, width: 'auto' }} />
          <div className="flex items-center gap-3">
            {['Tests', 'History', 'Profile'].map((item, i) => (
              <span key={item} style={{ fontSize: 9, fontWeight: i === 0 ? 700 : 500, color: i === 0 ? '#00B8B3' : '#6B7280' }}>
                {item}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-1 px-2 py-0.5 rounded-lg text-white" style={{ background: '#00B8B3', fontSize: 8, fontWeight: 700 }}>
            Amina T.
          </div>
        </div>

        {/* Search bar */}
        <div className="flex gap-2">
          <div className="flex-1 bg-white rounded-lg border border-[rgba(0,0,0,0.09)] px-2.5 py-1.5 flex items-center gap-1.5">
            <svg width="10" height="10" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
              <circle cx="9" cy="9" r="6" stroke="#9CA3AF" strokeWidth="1.8" />
              <path d="M14 14l4 4" stroke="#9CA3AF" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            <span style={{ fontSize: f, color: '#9CA3AF' }}>Search assigned assessments…</span>
          </div>
          <div className="px-3 py-1.5 rounded-lg font-bold text-white flex-shrink-0" style={{ background: '#00B8B3', fontSize: f }}>
            Search
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-1.5 flex-wrap items-center">
          <span style={{ fontSize: 9, color: '#6B7280' }}>Filters:</span>
          {['In-clinic', 'At-home', 'Not started', 'Adapted'].map((tag, i) => (
            <span key={tag} className="px-2 py-0.5 rounded-full font-semibold border" style={{ fontSize: 8, background: i < 2 ? '#E6FAF9' : 'white', color: i < 2 ? '#009E9A' : '#374151', borderColor: i < 2 ? 'rgba(0,184,179,0.3)' : 'rgba(0,0,0,0.1)' }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Job cards */}
        <div className="flex flex-col gap-1.5">
          {jobs.map((job, i) => (
            <div key={i} className="bg-white rounded-xl border border-[rgba(0,0,0,0.07)] p-2.5 flex items-start justify-between gap-2" style={{ borderColor: i === 0 ? 'rgba(0,184,179,0.2)' : undefined }}>
              <div className="flex items-start gap-2 flex-1 min-w-0">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center font-extrabold text-white flex-shrink-0" style={{ background: job.color, fontSize: 10 }}>
                  {job.company[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-[#001027] truncate" style={{ fontSize: f + 1 }}>{job.title}</div>
                  <div style={{ fontSize: 9, color: '#6B7280' }}>{job.company} · {job.location}</div>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {job.tags.map(tag => (
                      <span key={tag} className="px-1.5 py-0.5 rounded-md bg-[#F3F4F6] text-[#374151]" style={{ fontSize: 8, fontWeight: 500 }}>{tag}</span>
                    ))}
                    <span className="px-1.5 py-0.5 rounded-md bg-[#F3F4F6] text-[#374151]" style={{ fontSize: 8, fontWeight: 500 }}>{job.salary}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                <MatchBadge score={job.match} />
                <span style={{ fontSize: 8, color: '#9CA3AF' }}>{job.posted}</span>
                <div className="text-white px-2 py-0.5 rounded-lg font-bold" style={{ background: '#00B8B3', fontSize: 8 }}>Start →</div>
              </div>
            </div>
          ))}
        </div>

        {/* CV banner */}
        <div className="rounded-xl px-3 py-2 flex items-center justify-between border" style={{ background: '#E6FAF9', borderColor: 'rgba(0,184,179,0.2)' }}>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(0,184,179,0.15)' }}>
              <svg width="12" height="12" viewBox="0 0 20 20" fill="none">
                <path d="M10 2v12M6 6l4-4 4 4" stroke="#009E9A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 16h14" stroke="#009E9A" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <div style={{ fontSize: 9, fontWeight: 700, color: '#001027' }}>Complete consent form</div>
              <div style={{ fontSize: 8, color: '#009E9A' }}>Required before your first assessment</div>
            </div>
          </div>
          <div className="px-2 py-1 rounded-lg font-bold text-white" style={{ background: '#00B8B3', fontSize: 8 }}>Give Consent</div>
        </div>
      </div>
    </div>
  )
}
