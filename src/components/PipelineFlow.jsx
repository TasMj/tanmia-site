// Élément signature du site : une ligne de flux animée représentant
// un lead qui traverse le pipeline automatisé, du premier contact au RDV.
// Utilisé en version discrète dans le Hero, et en version détaillée
// dans "Comment ça marche".

const NODES = [
  { x: 60, label: 'Lead' },
  { x: 353, label: 'Relance' },
  { x: 647, label: 'Qualification' },
  { x: 940, label: 'RDV' },
]

const PATH = 'M60,100 C 220,40 193,160 353,100 C 513,40 487,160 647,100 C 807,40 780,160 940,100'

export default function PipelineFlow({ variant = 'ambient', className = '' }) {
  const isLabeled = variant === 'labeled'

  return (
    <svg
      viewBox="0 0 1000 200"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="Flux automatisé : lead, relance, qualification, rendez-vous"
    >
      <path
        d={PATH}
        fill="none"
        stroke={isLabeled ? 'var(--border)' : 'currentColor'}
        strokeWidth={isLabeled ? 2 : 1.5}
        strokeDasharray={isLabeled ? '0' : '2 8'}
        strokeLinecap="round"
        opacity={isLabeled ? 1 : 0.35}
      />

      {NODES.map((node, i) => (
        <g key={node.label}>
          <circle
            cx={node.x}
            cy={100}
            r={isLabeled ? 6 : 4}
            fill={isLabeled ? 'var(--accent)' : 'currentColor'}
            opacity={isLabeled ? 1 : 0.5}
          />
          {isLabeled && (
            <text
              x={node.x}
              y={140}
              textAnchor="middle"
              className="font-mono"
              fontSize="13"
              fill="var(--text-secondary)"
            >
              {node.label}
            </text>
          )}
        </g>
      ))}

      <circle r={isLabeled ? 7 : 5} fill="var(--accent)">
        <animateMotion dur="4.5s" repeatCount="indefinite" path={PATH} rotate="auto" />
      </circle>
      <circle r={isLabeled ? 14 : 10} fill="var(--accent)" opacity="0.18">
        <animateMotion dur="4.5s" repeatCount="indefinite" path={PATH} rotate="auto" />
      </circle>
    </svg>
  )
}
