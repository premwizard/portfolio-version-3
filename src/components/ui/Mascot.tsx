'use client';

import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const DIRECTIONS = [
  'up-left',
  'up',
  'up-right',
  'left',
  'center',
  'right',
  'down-left',
  'down',
  'down-right',
] as const

const REACTIONS = [
  'blink',
  'heart',
  'sparkle',
  'surprised',
  'wink',
  'bashful',
  'sleepy',
  'dizzy',
  'delighted',
] as const

type Direction = (typeof DIRECTIONS)[number]
type Reaction = (typeof REACTIONS)[number]

const CLOCKWISE: Direction[] = [
  'right',
  'down-right',
  'down',
  'down-left',
  'left',
  'up-left',
  'up',
  'up-right',
]
const SECTOR = (Math.PI * 2) / CLOCKWISE.length
const HYSTERESIS = 0.12
const DEAD_ZONE = 70

const PAYOFFS: Reaction[] = ['heart', 'sparkle', 'delighted']
const GREETINGS = ['Hey there! ✨', 'Boop! ❤️', 'Welcome! 🚀', 'Awesome! 💡']

const BOOP_PAYOFF = 120
const BOOP_END = 560
const SQUASH_MS = 420
const DIZZY_AFTER = 4
const DIZZY_WINDOW = 1600
const DIZZY_END = 1100

const SQUASH: Keyframe[] = [
  { transform: 'scale(1, 1)', easing: 'ease-in' },
  { transform: 'scale(1.10, 0.86)', offset: 0.18, easing: 'ease-out' },
  { transform: 'scale(0.95, 1.08)', offset: 0.45, easing: 'ease-in-out' },
  { transform: 'scale(1.03, 0.97)', offset: 0.72, easing: 'ease-in-out' },
  { transform: 'scale(1, 1)' },
]

function cell(index: number): CSSProperties {
  return { backgroundPosition: `${(index % 3) * 50}% ${Math.floor(index / 3) * 50}%` }
}

function wrap(angle: number) {
  return Math.atan2(Math.sin(angle), Math.cos(angle))
}

const layer: CSSProperties = {
  position: 'absolute',
  inset: 0,
  backgroundSize: '300% 300%',
  backgroundRepeat: 'no-repeat',
}

export type MascotProps = {
  directions: string
  reactions: string
  size?: number
  className?: string
  label?: string
}

export function Mascot(props: MascotProps) {
  const { directions, reactions, size = 280, className, label = 'mascot' } = props

  const buttonRef = useRef<HTMLButtonElement>(null)
  const squashRef = useRef<HTMLSpanElement>(null)
  const timersRef = useRef<number[]>([])
  const boopsRef = useRef({ count: 0, at: 0 })
  const [direction, setDirection] = useState<Direction>('center')
  const [reaction, setReaction] = useState<Reaction | null>(null)
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const [isBubbleVisible, setIsBubbleVisible] = useState<boolean>(true)
  const [greetingIndex, setGreetingIndex] = useState<number>(0)

  // Auto-appear speech bubble on initial entrance
  useEffect(() => {
    setIsBubbleVisible(true)
    const timer = setTimeout(() => {
      setIsBubbleVisible(false)
    }, 7000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      return
    }

    let sector = -1
    let pointer: { x: number; y: number } | null = null

    const aim = () => {
      const button = buttonRef.current
      if (!button || !pointer) {
        return
      }

      const box = button.getBoundingClientRect()
      const dx = pointer.x - (box.left + box.width / 2)
      const dy = pointer.y - (box.top + box.height / 2)

      if (Math.hypot(dx, dy) < DEAD_ZONE) {
        sector = -1
        setDirection('center')
        return
      }

      const angle = Math.atan2(dy, dx)
      if (sector !== -1 && Math.abs(wrap(angle - sector * SECTOR)) < SECTOR / 2 + HYSTERESIS) {
        return
      }

      sector = (Math.round(angle / SECTOR) + CLOCKWISE.length) % CLOCKWISE.length
      setDirection(CLOCKWISE[sector])
    }

    const onPointerMove = (event: PointerEvent) => {
      pointer = { x: event.clientX, y: event.clientY }
      aim()
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    window.addEventListener('scroll', aim, { passive: true })

    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('scroll', aim)
    }
  }, [])

  useEffect(() => {
    return () => {
      timersRef.current.forEach(window.clearTimeout)
    }
  }, [])

  const boop = () => {
    timersRef.current.forEach(window.clearTimeout)
    timersRef.current = []

    setIsBubbleVisible(true)
    setGreetingIndex((prev) => (prev + 1) % GREETINGS.length)

    const later = (ms: number, next: Reaction | null) => {
      timersRef.current.push(window.setTimeout(() => setReaction(next), ms))
    }

    const now = Date.now()
    const boops = boopsRef.current
    boops.count = now - boops.at < DIZZY_WINDOW ? boops.count + 1 : 1
    boops.at = now

    if (boops.count >= DIZZY_AFTER) {
      boops.count = 0
      setReaction('dizzy')
      later(DIZZY_END, null)
    } else {
      setReaction('blink')
      later(BOOP_PAYOFF, PAYOFFS[(boops.count - 1) % PAYOFFS.length])
      later(BOOP_END, null)
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    squashRef.current?.animate(SQUASH, { duration: SQUASH_MS, easing: 'linear' })
  }

  return (
    <div className="relative flex flex-col items-center z-30 overflow-visible">
      {/* Theme-Matched Animated Side Speech Bubble */}
      <AnimatePresence>
        {(isBubbleVisible || isHovered) && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -12, y: 0 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: [0, -4, 0] }}
            exit={{ opacity: 0, scale: 0.8, x: -10 }}
            transition={{
              y: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' },
              opacity: { duration: 0.3 },
              scale: { type: 'spring', stiffness: 350, damping: 22 },
            }}
            className="absolute -top-8 -right-8 sm:-right-16 lg:-right-24 px-5 py-3.5 rounded-2xl bg-gradient-to-r from-[#2A2332]/95 via-[#3D314A]/95 to-[#2A2332]/95 backdrop-blur-xl border border-[#A288A6]/75 shadow-[0_15px_40px_rgba(28,29,33,0.85),0_0_22px_rgba(162,136,166,0.4)] text-[#F1E3E4] z-50 pointer-events-none flex items-center justify-center whitespace-nowrap"
          >
            <motion.span
              key={greetingIndex}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="text-base sm:text-lg font-bold font-sans text-[#F1E3E4] drop-shadow-md tracking-wider"
            >
              {GREETINGS[greetingIndex]}
            </motion.span>

            {/* Glowing Pointer Tail */}
            <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-4 h-4 bg-[#2A2332] border-l border-b border-[#A288A6]/75 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      <button
        ref={buttonRef}
        type="button"
        onClick={boop}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
        aria-label={`Boop the ${label}`}
        className={className}
        style={{
          position: 'relative',
          display: 'block',
          flexShrink: 0,
          width: size,
          height: size,
          padding: 0,
          border: 0,
          background: 'transparent',
          appearance: 'none',
          cursor: 'pointer',
          userSelect: 'none',
        }}
      >
        <span
          ref={squashRef}
          style={{ position: 'relative', display: 'block', width: '100%', height: '100%', transformOrigin: '50% 78%' }}
        >
          <span
            style={{
              ...layer,
              backgroundImage: `url(${directions})`,
              ...cell(DIRECTIONS.indexOf(direction)),
              opacity: reaction ? 0 : 1,
            }}
          />
          <span
            style={{
              ...layer,
              backgroundImage: `url(${reactions})`,
              ...cell(REACTIONS.indexOf(reaction ?? 'blink')),
              opacity: reaction ? 1 : 0,
            }}
          />
        </span>
      </button>
    </div>
  )
}
