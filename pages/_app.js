import '../styles/globals.css'
import { useEffect } from 'react'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Custom cursor
    const dot = document.querySelector('.cursor-dot')
    const ring = document.querySelector('.cursor-ring')
    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0

    const moveCursor = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (dot) {
        dot.style.left = mouseX + 'px'
        dot.style.top = mouseY + 'px'
      }
    }

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      if (ring) {
        ring.style.left = ringX + 'px'
        ring.style.top = ringY + 'px'
      }
      requestAnimationFrame(animateRing)
    }

    document.addEventListener('mousemove', moveCursor)
    animateRing()

    const addHover = () => {
      document.querySelectorAll('a, button, .service-card, .why-item, .process-step, .service-category').forEach(el => {
        el.addEventListener('mouseenter', () => ring?.classList.add('hovered'))
        el.addEventListener('mouseleave', () => ring?.classList.remove('hovered'))
      })
    }

    addHover()
    const observer = new MutationObserver(addHover)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', moveCursor)
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    // Scroll reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible')
            }, (entry.target.dataset.delay || 0) * 1000)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  })

  return (
    <>
      <div className="cursor-dot" />
      <div className="cursor-ring" />
      <Component {...pageProps} />
    </>
  )
}
