'use client'

import { useState } from 'react'
import { LEVELS, STYLES, TRICKS } from '@/data/skate'
import PageHeader from '@/components/PageHeader'
import './page.css'

function FilterGroup({ name, options, active, onChange }) {
  return (
    <div role="group" aria-label={name}>
      <p className="label">{name}</p>
      <div className="tricks-chips">
        {options.map((option) => (
          <button key={option} className="chip" aria-pressed={active === option} onClick={() => onChange(option)}>
            {option.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  )
}

export default function Page() {
  const [level, setLevel] = useState('All')
  const [style, setStyle] = useState('All')
  const visible = TRICKS.filter((trick) => (level === 'All' || trick.level === level) && (style === 'All' || trick.style === style))

  return (
    <div className="page-shell">
      <title>Tricks Library — SLAM.COM</title>
      <meta name="description" content="Skateboard tricks filtered by level and style." />
      <PageHeader
        number="004"
        title="TRICKS LIBRARY"
        description="Build your bag one trick at a time. Filter by ability and the kind of skating you want to explore."
      />
      <div className="tricks-filters">
        <FilterGroup name="LEVEL" options={LEVELS} active={level} onChange={setLevel} />
        <FilterGroup name="STYLE" options={STYLES} active={style} onChange={setStyle} />
        <p aria-live="polite" className="label tricks-count">
          {visible.length} TRICKS SHOWN
        </p>
      </div>
      <div className="tricks-grid">
        {visible.map((trick, i) => (
          <article key={trick.name} className={`tricks-card tricks-level-${trick.level.toLowerCase()}`}>
            <div className="tricks-card-top">
              <span className="label">
                {String(i + 1).padStart(2, '0')} / {trick.level.toUpperCase()}
              </span>
              <span className="label tricks-style">{trick.style.toUpperCase()}</span>
            </div>
            <h2 className="tricks-name">{trick.name.toUpperCase()}</h2>
            <p className="tricks-note">{trick.note}</p>
            <span className="label tricks-time">EST. PRACTICE — {trick.time}</span>
          </article>
        ))}
      </div>
    </div>
  )
}
