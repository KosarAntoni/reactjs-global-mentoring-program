import { SortOption } from 'components/SortSelect/SortSelect.models'

export const SORT_OPTIONS: SortOption[] = [{
  id: 'release_date',
  name: 'Release date'
}, {
  id: 'vote_average',
  name: 'Rate'
}]

export const API_URL = 'http://localhost:4000'
export const MOVIES_LIMIT = 12

export const GENRES = [
  { name: 'ALL', id: 'all' },
  { name: 'DOCUMENTARY', id: 'documentary' },
  { name: 'COMEDY', id: 'comedy' },
  { name: 'HORROR', id: 'horror' },
  { name: 'CRIME', id: 'crime' }
]
