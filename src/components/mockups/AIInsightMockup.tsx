/**
 * AIInsightMockup — Domain scoring panel
 * Recreated from Wayloom's clinician session review view
 */

interface Props {
  score?: number
  name?: string
  compact?: boolean
}

const strongDomains = ['Orientation', 'Attention', 'Language', 'Executive Function', 'Visuospatial']
const flaggedDomains = ['Memory Recall', 'Fluency', 'Delayed Recall']

export default function AIInsightMockup({ score = 87, name = 'Amina T.', compact = false }: Props) {
  const sc = score >= 80 ? { color: '#00B8B3', label: 'Within Normal Range', conf: 'High confidence' }
           : score >= 60 ? { color: '#374151', label: 'Borderline',          conf: 'Moderate confidence' }
           :               { color: '#FE595A', label: 'Below Normative Range', conf: 'Flag for clinician review' }

  const f = compact ? { heading: 11, sub: 9, label: 10, skill: 9, chip: 8 }
                    : { heading: 13, sub: 10, label: 11, skill: 10, chip: 9 }

  return (
    <div
      className="rounded-xl border overflow-hidden"
      style={{ borderColor: 'rgba(0,184,179,0.25)', background: 'rgba(0,184,179,0.04)' }}
    >
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[rgba(0,184,179,0.12)] bg-white/60">
        <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'rgba(0,184,179,0.15)' }}>
          <span style={{ fontSize: 14, lineHeight: 1 }}>✦</span>
        </div>
        <div>
          <div className="font-bold text-[#001027]" style={{ fontSize: f.heading }}>Domain Scores — {name}</div>
          <div style={{ fontSize: f.sub, color: '#6B7280' }}>Powered by Wayloom AI Brain</div>
        </div>
      </div>

      <div className="p-4 flex flex-col gap-3">
        {/* Score circle + label */}
        <div className="flex items-center gap-4">
          <div
            className="flex-shrink-0 flex items-center justify-center rounded-full bg-white font-extrabold"
            style={{
              width: compact ? 52 : 64, height: compact ? 52 : 64,
              border: `4px solid ${sc.color}`,
              color: sc.color,
              fontSize: compact ? 18 : 22,
            }}
          >
            {score}
          </div>
          <div>
            <div className="font-bold text-[#001027]" style={{ fontSize: f.label }}>{sc.label}</div>
            <div style={{ fontSize: f.sub, color: '#6B7280' }}>{sc.conf}</div>
            {/* Progress bar */}
            <div className="mt-1.5 w-28 h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${score}%`, background: sc.color }} />
            </div>
          </div>
        </div>

        {/* Strong domains */}
        <div>
          <div className="font-bold uppercase tracking-wider mb-1.5" style={{ fontSize: f.sub, color: '#6B7280' }}>
            Within Normal Range
          </div>
          <div className="flex flex-wrap gap-1">
            {strongDomains.map(s => (
              <span
                key={s}
                className="px-2 py-0.5 rounded-full font-semibold border"
                style={{ fontSize: f.chip, background: '#E6FAF9', color: '#009E9A', borderColor: 'rgba(0,184,179,0.25)' }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Flagged domains */}
        <div>
          <div className="font-bold uppercase tracking-wider mb-1.5" style={{ fontSize: f.sub, color: '#6B7280' }}>
            Flagged for Review
          </div>
          <div className="flex flex-wrap gap-1">
            {flaggedDomains.map(s => (
              <span
                key={s}
                className="px-2 py-0.5 rounded-full font-semibold border"
                style={{ fontSize: f.chip, background: '#FFF0F0', color: '#E03E3F', borderColor: 'rgba(254,89,90,0.25)' }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Explanation toggle */}
        <div
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border cursor-pointer"
          style={{ borderColor: 'rgba(0,184,179,0.2)', background: 'rgba(0,184,179,0.04)' }}
        >
          <span style={{ fontSize: f.chip, color: '#009E9A', fontWeight: 600 }}>View scoring rationale</span>
          <span style={{ fontSize: f.chip, color: '#009E9A' }}>›</span>
        </div>

        {/* Disclaimer */}
        <div style={{ fontSize: 8, color: '#9CA3AF' }}>AI scoring assists interpretation only. Clinician review required.</div>
      </div>
    </div>
  )
}
