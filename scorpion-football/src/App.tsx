import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import PlayerCard from './components/PlayerCard'
import { players } from './data/players'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <section
          id="players"
          className="mx-auto max-w-[1600px] scroll-mt-16 px-5 py-24 md:px-10 md:py-32"
        >
          <div className="mb-12 flex items-end justify-between border-b border-white/15 pb-6">
            <h2 className="font-serif text-4xl font-bold uppercase leading-none sm:text-6xl">
              Our players
            </h2>
            <span className="text-xs uppercase tracking-[0.25em] text-gold">
              {String(players.length).padStart(2, '0')}
            </span>
          </div>
          <div className="grid grid-cols-1 gap-x-5 gap-y-12 min-[520px]:grid-cols-2 lg:grid-cols-4">
            {players.map((player, index) => (
              <PlayerCard key={player.id} player={player} index={index} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
