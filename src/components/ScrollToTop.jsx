import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const OFFSET = -80 // sticky header

/**
 * Route changes reset the scroll position — except when the URL carries a
 * hash, where we scroll to that section instead. The section may not be in
 * the DOM on the first frame (a fresh load of /#titles, or a lazy route), so
 * this retries for a few frames before giving up.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      window.__lenis?.scrollTo(0, { immediate: true })
      return
    }

    let frame
    let tries = 0
    const timers = []

    const go = (el, immediate) => {
      if (window.__lenis)
        window.__lenis.scrollTo(el, { offset: OFFSET, immediate })
      else
        window.scrollTo({
          top: el.getBoundingClientRect().top + window.scrollY + OFFSET,
          behavior: immediate ? 'instant' : 'smooth',
        })
    }

    const seek = () => {
      const el = document.querySelector(hash)
      if (el) {
        go(el, false)
        // Lazy images below the fold resize the document while the scroll
        // is still running, which drags the target out from under us.
        // Re-aim once things have settled.
        timers.push(setTimeout(() => go(el, false), 400))
        timers.push(setTimeout(() => go(el, true), 1100))
        return
      }
      if (tries++ < 60) frame = requestAnimationFrame(seek)
    }
    frame = requestAnimationFrame(seek)

    return () => {
      cancelAnimationFrame(frame)
      timers.forEach(clearTimeout)
    }
  }, [pathname, hash])

  return null
}
