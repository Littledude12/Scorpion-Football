import { useEffect, useRef, useState } from 'react'
import type { Player } from '../data/players'

interface PlayerCardProps {
  player: Player
  index: number
}

export default function PlayerCard({ player, index }: PlayerCardProps) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <article
      ref={ref}
      style={{ transitionDelay: `${(index % 4) * 0.1}s` }}
      className={`group transition-all duration-700 ease-out ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900">
        <img
          src={player.image}
          alt={player.name}
          loading="lazy"
          className="size-full object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <span className="absolute bottom-3 left-4 font-serif text-5xl font-bold leading-none text-white">
          {player.number}
        </span>
        <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />
      </div>
      <div className="pt-4">
        <h3 className="font-serif text-2xl font-bold uppercase leading-tight sm:text-3xl">
          {player.name}
        </h3>
        <p className="mt-2 text-xs uppercase tracking-[0.15em] text-gold">
          {player.position}
        </p>
        <p className="mt-1 text-sm text-neutral-400">{player.club}</p>
      </div>
    </article>
  )
}
