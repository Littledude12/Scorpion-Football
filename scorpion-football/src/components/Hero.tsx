const HERO_IMAGE =
  'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1920&q=80&fit=crop'

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden px-5 pb-12 pt-32 md:px-10 md:pb-16">
      <img
        src={HERO_IMAGE}
        alt=""
        className="absolute inset-0 size-full object-cover opacity-40 grayscale"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />

      <div className="relative mx-auto w-full max-w-[1600px]">
        <p className="animate-fade-up mb-6 border-l border-gold pl-3 text-[11px] font-medium uppercase tracking-[0.3em] text-gold md:text-xs">
          Exclusive agency for premium players
        </p>
        <h1 className="animate-fade-up max-w-5xl font-serif text-5xl font-bold uppercase leading-[0.95] tracking-tight [animation-delay:0.15s] sm:text-7xl lg:text-8xl xl:text-9xl">
          All footballers are individuals
        </h1>
        <div className="animate-fade-up mt-10 flex flex-col gap-8 border-t border-white/15 pt-6 [animation-delay:0.3s] sm:flex-row sm:items-center sm:justify-between">
          <p className="font-serif text-xl italic text-white/80 md:text-2xl">
            Each journey, carefully guided
          </p>
          <a
            href="#players"
            className="group inline-flex items-center gap-3 self-start text-xs font-medium uppercase tracking-[0.25em] text-white transition-colors hover:text-gold sm:self-auto"
          >
            Meet the players
            <span
              aria-hidden
              className="transition-transform group-hover:translate-y-1"
            >
              ↓
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
