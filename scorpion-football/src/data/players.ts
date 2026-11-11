export interface Player {
  id: number
  number: number
  name: string
  position: string
  club: string
  /** Portrait URL. Replace PLACEHOLDER_PORTRAIT with a real photo per player. */
  image: string
  /** true while `image` is a temporary placeholder, not a real portrait */
  imageIsPlaceholder: boolean
}

export const PLACEHOLDER_PORTRAIT = '/images/player-placeholder.svg'

export const players: Player[] = [
  { id: 1, number: 10, name: 'Marcus Johansen', position: 'Attacking Midfielder', club: 'Rosenborg BK', image: PLACEHOLDER_PORTRAIT, imageIsPlaceholder: true },
  { id: 2, number: 7, name: 'Erik Solberg', position: 'Right Winger', club: 'Molde FK', image: PLACEHOLDER_PORTRAIT, imageIsPlaceholder: true },
  { id: 3, number: 1, name: 'Andreas Nilsen', position: 'Goalkeeper', club: 'Viking FK', image: PLACEHOLDER_PORTRAIT, imageIsPlaceholder: true },
  { id: 4, number: 23, name: 'Thomas Berg', position: 'Center Back', club: 'Lillestrøm SK', image: PLACEHOLDER_PORTRAIT, imageIsPlaceholder: true },
  { id: 5, number: 14, name: 'Daniel Karlsen', position: 'Striker', club: 'Brann', image: PLACEHOLDER_PORTRAIT, imageIsPlaceholder: true },
  { id: 6, number: 8, name: 'Lars Hagen', position: 'Defensive Midfielder', club: 'Odds BK', image: PLACEHOLDER_PORTRAIT, imageIsPlaceholder: true },
  { id: 7, number: 11, name: 'Kristian Moen', position: 'Left Winger', club: 'Strømsgodset', image: PLACEHOLDER_PORTRAIT, imageIsPlaceholder: true },
  { id: 8, number: 5, name: 'Henrik Larsen', position: 'Center Back', club: 'Sarpsborg 08', image: PLACEHOLDER_PORTRAIT, imageIsPlaceholder: true },
]

