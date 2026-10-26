'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { NAV_ITEMS } from '@/data/skate'
import { useWipeNavigate } from './TransitionShell'
import '../styles/Nav.css'

export default function Nav() {
  const pathname = usePathname()
  const navigate = useWipeNavigate()
  const [open, setOpen] = useState(false)
  const [authMessage, setAuthMessage] = useState('')
  const menuButtonRef = useRef(null)
  const closeButtonRef = useRef(null)

  const handleNav = (event, href) => {
    // Let modified clicks (new tab, etc.) behave like normal links.
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return
    event.preventDefault()
    setOpen(false)
    setTimeout(() => navigate(href), 80)
  }

  useEffect(() => {
    if (!open) return
    const menuButton = menuButtonRef.current
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    closeButtonRef.current?.focus()
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
      menuButton?.focus()
    }
  }, [open])

  return (
    <>
      <div className="nav-top-actions">
        {!open && (
          <div className="nav-auth-actions">
            <button onClick={() => setAuthMessage('Login will be available soon.')} className="nav-auth-button nav-auth-secondary">
              LOG IN
            </button>
            <button onClick={() => setAuthMessage('Sign up will be available soon.')} className="nav-auth-button nav-auth-primary">
              SIGN UP
            </button>
            <span role="status" aria-live="polite" className="nav-auth-message">
              {authMessage}
            </span>
          </div>
        )}

        <button className="nav-menu-toggle" ref={menuButtonRef} aria-expanded={open} aria-controls="main-menu" onClick={() => setOpen(true)}>
          MENU
        </button>
      </div>

      {open && (
        <div className="nav-overlay" role="dialog" aria-modal="true" aria-label="Main navigation" onClick={() => setOpen(false)}>
          <button className="nav-close" ref={closeButtonRef} onClick={() => setOpen(false)} aria-label="Close menu">
            <svg aria-hidden="true" width="26" height="26" viewBox="0 0 26 26" fill="none">
              <path d="M3 3L23 23M23 3L3 23" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
            </svg>
          </button>

          <div className="nav-rule" />

          <nav id="main-menu" className="nav-grid" onClick={(e) => e.stopPropagation()}>
            {NAV_ITEMS.map((item, i) => {
              const active = item.href === pathname
              return (
                <Link
                  className="nav-link"
                  key={item.href}
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  onClick={(e) => handleNav(e, item.href)}
                  style={{ '--i': i }}
                >
                  {item.label}
                  {active && <span className="nav-now">← NOW</span>}
                </Link>
              )
            })}
          </nav>

          <p className="nav-footer">SLAM.COM — EST. 2026</p>
        </div>
      )}
    </>
  )
}
