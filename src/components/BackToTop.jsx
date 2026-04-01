import { useState, useEffect } from 'react'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-yellow-500 hover:scale-110 hover:shadow-xl z-50 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Back to Top"
    >
      <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 4l-8 8h6v8h4v-8h6z" />
      </svg>
    </button>
  )
}
