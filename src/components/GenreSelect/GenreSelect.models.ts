export type Genre = Record<'id' | 'name', string>

export interface GenreSelectProps {
  genres: Genre[]
  selectedGenre?: Genre
  handleSelect: (id: string) => void
  className?: string
}
