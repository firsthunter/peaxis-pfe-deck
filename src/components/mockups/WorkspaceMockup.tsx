/**
 * WorkspaceMockup — Full clinician test workspace with open session drawer
 * Recreated from Wayloom's clinician suite
 * The "hero" product screenshot that demonstrates the full clinician UX
 * Includes browser chrome with portal.wayloom-ai.com URL
 */
import AIInsightMockup from './AIInsightMockup'

const candidates = [
  { stage: 'Consented',   name: 'Amina T.',  score: 91, skills: ['Memory','Orientation','Language'] },
  { stage: 'In Progress', name: 'Karim B.',  score: 78, skills: ['Attention','Fluency']              },
  { stage: 'Scored',      name: 'Leila S.',  score: 88, skills: ['Executive Function','Memory']      },
]

export default function WorkspaceMockup() {
  return (
    <div className="rounded-xl overflow-hidden border border-[rgba(0,0,0,0.1)] shadow-xl" style={{ fontSize: 9 }}>
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
          <span style={{ fontSize: 9, color: '#6B7280', fontFamily: 'monospace' }}>portal.wayloom-ai.com/tests/memory-orientation</span>
        </div>
        <div className="flex items-center gap-1">
          {[0,1].map(i => <div key={i} className="w-4 h-4 rounded bg-[rgba(0,0,0,0.06)]" />)}
        </div>
      </div>

      <div className="flex flex-col bg-[#F8FAFC] overflow-hidden">
        {/* App top nav */}
        <div className="bg-white border-b border-[rgba(0,0,0,0.07)] px-4 py-1.5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/wayloom-logo.png" alt="Wayloom" style={{ height: 14, width: 'auto' }} />
            <div className="flex items-center gap-1" style={{ fontSize: 9, color: '#6B7280' }}>
              <span>Tests</span>
              <span style={{ color: '#D1D5DB' }}>›</span>
              <span>Memory & Orientation Screening</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="px-2 py-0.5 rounded-full text-white font-semibold" style={{ background: '#00B8B3', fontSize: 8 }}>
              + New Test
            </div>
            <div className="w-5 h-5 rounded-full bg-[#E6FAF9] flex items-center justify-center text-[#009E9A] font-bold" style={{ fontSize: 8 }}>C</div>
          </div>
        </div>

        {/* Test Header */}
        <div className="bg-white border-b border-[rgba(0,0,0,0.08)] px-4 py-2.5 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-[#001027]" style={{ fontSize: 13 }}>Memory & Orientation Screening</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#E6FAF9] text-[#009E9A] border border-[#99E6E4]">Published</span>
            </div>
            <div style={{ fontSize: 9, color: '#6B7280' }}>Tunis Memory Clinic · 10–15 min · Adapted: Arabic, TN · 24 sessions · Avg completion 90%</div>
        </div>
        <div className="flex items-center gap-1.5">
          {['Edit', 'Share', 'Preview'].map(a => (
            <div key={a} className="px-2 py-1 rounded-lg border border-[rgba(0,0,0,0.1)] text-[#374151] font-medium" style={{ fontSize: 9 }}>{a}</div>
          ))}
        </div>
      </div>

      {/* Tab strip */}
      <div className="bg-white border-b border-[rgba(0,0,0,0.08)] flex">
        {['Sessions', 'Patients', 'Analytics', 'Activity', 'Test Details'].map((tab, i) => (
          <div
            key={tab}
            className={`px-3 py-2 font-medium relative ${i === 0 ? 'text-[#001027]' : 'text-[#6B7280]'}`}
            style={{ fontSize: 9 }}
          >
            {tab}
            {i === 0 && <div className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-[#00B8B3]" />}
          </div>
        ))}
      </div>

      {/* Content: Mini pipeline + Drawer */}
      <div className="flex gap-0 overflow-hidden" style={{ height: 240 }}>
        {/* Pipeline columns (compressed) */}
        <div className="flex-1 p-2 flex gap-1.5 overflow-hidden">
          {['Consented 12', 'In Progress 7', 'Scored 4', 'Flagged 2', 'Reported 1'].map((col, i) => {
            const [name, count] = col.split(' ')
            const colors = ['#00B8B3','#6B7280','#374151','#FE595A','#009E9A']
            return (
              <div key={col} className="flex flex-col gap-1" style={{ flex: 1, minWidth: 0 }}>
                <div className="flex items-center justify-between px-1.5 py-1 bg-white rounded border border-[rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-1">
                    <div className="w-[2px] h-2.5 rounded-full" style={{ background: colors[i] }} />
                    <span className="font-bold text-[#001027] truncate" style={{ fontSize: 8 }}>{name}</span>
                  </div>
                  <span className="font-bold text-white px-1 rounded-full" style={{ background: colors[i], fontSize: 7 }}>{count}</span>
                </div>
                {/* Placeholder cards */}
                {i < 3 && Array.from({ length: i === 0 ? 2 : 1 }).map((_, ci) => (
                  <div key={ci} className="bg-white rounded border border-[rgba(0,0,0,0.06)] p-1.5">
                    <div className="flex items-center gap-1 mb-1">
                      <div className="w-4 h-4 rounded-full flex items-center justify-center text-white font-bold" style={{ background: colors[i], fontSize: 6 }}>
                        {['SM','AK','YA'][ci + (i > 0 ? i : 0)]?.[0] || 'C'}
                      </div>
                      <div className="font-bold text-[#001027]" style={{ fontSize: 8 }}>Patient</div>
                    </div>
                    <div className="flex items-center gap-1">
                      <span style={{ fontSize: 7, color: '#00B8B3' }}>✦</span>
                      <span className="font-bold px-1 rounded-full bg-[#E6FAF9] text-[#009E9A]" style={{ fontSize: 7 }}>{[91,78,88][ci] || 75}%</span>
                    </div>
                  </div>
                ))}
              </div>
            )
          })}
        </div>

        {/* Candidate Drawer (open) */}
        <div className="w-48 flex-shrink-0 border-l border-[rgba(0,0,0,0.08)] bg-white flex flex-col overflow-hidden">
          {/* Drawer header */}
          <div className="flex items-center justify-between px-3 py-2 border-b border-[rgba(0,0,0,0.06)]">
            <span className="font-bold text-[#001027]" style={{ fontSize: 10 }}>Amina Trabelsi</span>
            <span style={{ fontSize: 12, color: '#6B7280', cursor: 'pointer' }}>×</span>
          </div>

          <div className="flex-1 overflow-hidden p-2 flex flex-col gap-2">
            {/* Stage + meta */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="px-1.5 py-0.5 rounded-full font-semibold bg-[#E6FAF9] text-[#009E9A]" style={{ fontSize: 8 }}>Scored</span>
              <span style={{ fontSize: 8, color: '#9CA3AF' }}>Completed 3 days ago</span>
            </div>

            {/* AI panel (compact) */}
            <AIInsightMockup score={91} name="Amina T." compact={true} />

            {/* Action buttons */}
            <div className="flex flex-col gap-1 mt-auto">
              {candidates.map((_c, i) => (
                <div
                  key={i}
                  className="px-2 py-1 rounded-lg text-center font-semibold"
                  style={{
                    background: i === 0 ? '#00B8B3' : '#F3F4F6',
                    color: i === 0 ? 'white' : '#374151',
                    fontSize: 8,
                  }}
                >
                  {['Approve report', 'Flag for review', 'View Full Session'][i]}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}