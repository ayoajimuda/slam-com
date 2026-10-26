'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { HOME_BACKGROUNDS } from '@/data/skate'
import './page.css'

const STORAGE_KEY = 'slam-home-background'

/** Picks a background different from the last one shown in this tab. Runs only in the browser. */
function pickBackground() {
  let previous = -1
  try {
    previous = Number(sessionStorage.getItem(STORAGE_KEY) ?? -1)
  } catch {
    /* Storage may be unavailable. */
  }
  const offset = 1 + Math.floor(Math.random() * (HOME_BACKGROUNDS.length - 1))
  const next = previous >= 0 ? (previous + offset) % HOME_BACKGROUNDS.length : Math.floor(Math.random() * HOME_BACKGROUNDS.length)
  try {
    sessionStorage.setItem(STORAGE_KEY, String(next))
  } catch {
    /* Rotation still works for this load. */
  }
  return next
}

export default function Page() {
  // Chosen after mount so the server and client render the same markup.
  const [index, setIndex] = useState(null)

  useEffect(() => {
    setIndex(pickBackground())
  }, [])
  const background = index === null ? null : HOME_BACKGROUNDS[index]

  return (
    <div className="home-hero">
      <title>SLAM.COM — Learn · Track · Explore</title>
      <meta name="description" content="Learn skateboard tricks, track your progression and find places to skate." />
      {background && <Image src={background.url} alt="" fill priority sizes="100vw" className="home-background" />}
      <div className="home-fade" />
      <div className="home-grain" />
      <div className="home-accent-line" />
      <div className="home-title-wrap">
        <h1 className="home-title">SLAM.COM</h1>
        <div className="home-glitch" aria-hidden="true">
          SLAM.COM
        </div>
      </div>
      <p className="home-kicker">LEARN · TRACK · EXPLORE</p>
      <div className="home-side-note">OR DIE TRYING</div>
    </div>
  )
}
