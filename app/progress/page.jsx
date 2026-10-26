'use client'

import { useEffect, useState } from 'react'
import { ACTIVITIES, DEFAULT_DONE, SESSION, STAGES } from '@/data/skate'
import PageHeader from '@/components/PageHeader'
import './page.css'

const STORAGE_KEY = 'slam-progress'

export default function Page() {
  const [done, setDone] = useState(DEFAULT_DONE)
  const [loaded, setLoaded] = useState(false)

  // Read saved progress after mount; localStorage doesn't exist on the server.
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? 'null')
      if (Array.isArray(saved) && saved.length === ACTIVITIES.length) setDone(saved.map(Boolean))
    } catch {
      /* Ignore unreadable or blocked storage. */
    }
    setLoaded(true)
  }, [])

  useEffect(() => {
    if (!loaded) return
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(done))
    } catch {
      /* Progress just won't persist. */
    }
  }, [done, loaded])
  const completed = done.filter(Boolean).length

  return (
    <div className="page-shell">
      <title>Progression — SLAM.COM</title>
      <meta name="description" content="Track your reps and unlock the next stage." />
      <PageHeader number="005" title="PROGRESSION" description="Track the reps, unlock the next stage, and keep your sessions focused." />
      <div className="progress-grid">
        <section className="progress-stage-panel">
          <p className="label">CURRENT STAGE / 02</p>
          <h2 className="progress-heading">BOARD CONTROL</h2>
          <p className="progress-summary">
            {completed} of {ACTIVITIES.length} activities complete
          </p>
          <div
            role="progressbar"
            aria-label="Stage completion"
            aria-valuemin={0}
            aria-valuemax={ACTIVITIES.length}
            aria-valuenow={completed}
            className="progress-bar"
          >
            <div className="progress-bar-fill" style={{ width: `${(completed / ACTIVITIES.length) * 100}%` }} />
          </div>
          {ACTIVITIES.map((activity, i) => (
            <button
              key={activity}
              className="progress-activity"
              aria-pressed={done[i]}
              onClick={() => setDone((current) => current.map((value, index) => (index === i ? !value : value)))}
            >
              <span className="progress-tick">{done[i] ? '✓' : ''}</span>
              <span className="progress-activity-text">{activity}</span>
            </button>
          ))}
        </section>
        <div className="progress-side">
          <section className="progress-next">
            <p className="label progress-next-label">RECOMMENDED NEXT</p>
            <h2 className="progress-heading">FRONTSIDE 180</h2>
            <p className="progress-next-text">Your ollies are consistent. Add shoulder rotation and start landing switch.</p>
          </section>
          <section className="progress-panel">
            <p className="label">TODAY&apos;S 30 MIN SESSION</p>
            {SESSION.map(({ item, time }) => (
              <div key={item} className="progress-session-row">
                <span>{item}</span>
                <span className="progress-session-time">{time}</span>
              </div>
            ))}
          </section>
        </div>
      </div>
      <div className="progress-path-section">
        <p className="label">LEARNING PATH</p>
        <div className="progress-path">
          {STAGES.map((stage, i) => (
            <div key={stage} className={`progress-stage ${i < 2 ? 'progress-stage-done' : ''}`}>
              {String(i + 1).padStart(2, '0')} — {stage}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
