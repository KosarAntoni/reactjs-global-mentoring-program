export const formatGenres = (genres: string[]): string => genres.length > 2 ? genres.join(', ') : genres.join(' & ')
