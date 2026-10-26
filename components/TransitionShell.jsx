'use client'

import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Nav from './Nav'
import '../styles/TransitionShell.css'

// Keep in step with the 0.42s animations in TransitionShell.css.
const WIPE_MS = 420
const TransitionContext = createContext(() => {})

/** Navigate with the accent wipe. Falls back to a normal route change if used outside the shell. */
export const useWipeNavigate = () => useContext(TransitionContext)

export default function TransitionShell({ children }) {
  const router = useRouter()
  const pathname = usePathname()
  const [phase, setPhase] = useState('idle')
  const pendingHref = useRef(null)

  const navigate = useCallback(
    (href) => {
      if (href === pathname || phase !== 'idle') return
      pendingHref.current = href
      setPhase('wiping-in')
    },
    [pathname, phase],
  )

  // Wipe covers the screen, then push the new route.
  useEffect(() => {
    if (phase !== 'wiping-in') return
    const t = setTimeout(() => {
      if (pendingHref.current) router.push(pendingHref.current)
    }, WIPE_MS)
    return () => clearTimeout(t)
  }, [phase, router])

  // Once the new route has rendered, wipe out.
  useEffect(() => {
    if (phase === 'wiping-in' && pathname === pendingHref.current) setPhase('wiping-out')
  }, [pathname, phase])

  useEffect(() => {
    if (phase !== 'wiping-out') return
    const t = setTimeout(() => {
      setPhase('idle')
      pendingHref.current = null
    }, WIPE_MS)
    return () => clearTimeout(t)
  }, [phase])

  return (
    <TransitionContext.Provider value={navigate}>
      <div className="shell">
        <Nav />
        <main className={`shell-main ${phase === 'wiping-in' ? 'shell-main-hidden' : ''}`}>{children}</main>
        {phase !== 'idle' && <div aria-hidden="true" className={`shell-wipe ${phase === 'wiping-in' ? 'shell-wipe-in' : 'shell-wipe-out'}`} />}
      </div>
    </TransitionContext.Provider>
  )
}
