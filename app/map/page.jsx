'use client'

import { useRef, useState } from 'react'
import { INITIAL_SPOTS } from '@/data/skate'
import PageHeader from '@/components/PageHeader'
import './page.css'

export default function Page() {
  const [spots, setSpots] = useState(INITIAL_SPOTS)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const nextId = useRef(INITIAL_SPOTS.length + 1)

  const addSpot = () => {
    const trimmed = name.trim()
    if (!trimmed) {
      setMessage('Enter a spot name first.')
      return
    }
    const id = nextId.current++
    setSpots((all) => [...all, { id, name: trimmed, type: 'COMMUNITY SPOT', x: 25 + Math.random() * 55, y: 20 + Math.random() * 60 }])
    setMessage(`${trimmed} was added to the map.`)
    setName('')
  }

  return (
    <div className="page-shell">
      <title>Skate Map — SLAM.COM</title>
      <meta name="description" content="Find skateparks and share practice spots." />
      <PageHeader number="006" title="SKATE MAP" description="Find nearby skateparks and share practice spots with the local skate community." />
      <div className="map-layout">
        <div className="map-map">
          <div className="map-road" />
          {spots.map((spot, i) => (
            <div key={spot.id} className="map-spot" style={{ left: `${spot.x}%`, top: `${spot.y}%` }}>
              <div className={`map-pin ${i === spots.length - 1 ? 'map-pin-latest' : ''}`} />
              <div className="map-spot-label">{spot.name.toUpperCase()}</div>
            </div>
          ))}
          <div className="map-count">LOCAL AREA · {spots.length} SPOTS</div>
        </div>
        <aside className="map-panel">
          <p className="label">ADD A SAFE SPOT</p>
          <h2 className="map-heading">SHARE YOUR FIND</h2>
          <p className="map-intro">Only add public, well-lit places where skating is permitted. New spots appear on the map for this session.</p>
          <input
            className="map-input"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
              if (message) setMessage('')
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') addSpot()
            }}
            placeholder="Spot name"
            aria-label="Spot name"
            aria-describedby="spot-feedback"
          />
          <button onClick={addSpot} className="chip chip-primary map-add-button">
            + ADD TO MAP
          </button>
          <p id="spot-feedback" role="status" aria-live="polite" className="map-feedback">
            {message}
          </p>
          <p className="label map-nearby-label">NEARBY</p>
          {spots.slice(0, 4).map((spot) => (
            <div key={spot.id} className="map-nearby-row">
              <strong>{spot.name}</strong>
              <span className="label map-nearby-type">{spot.type}</span>
            </div>
          ))}
        </aside>
      </div>
    </div>
  )
}
