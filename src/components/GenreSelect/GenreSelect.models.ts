export type Genre = Record<'id' | 'name', string>

export interface GenreSelectProps {
  genres: Genre[]
  selectedGenre?: Genre
  handleSelect: (genre: Genre) => void
  className?: string
}
