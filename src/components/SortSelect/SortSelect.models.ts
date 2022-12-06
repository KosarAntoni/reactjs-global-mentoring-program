export interface SortOption {
  id: 'release_date' | 'vote_average'
  name: 'Release date' | 'Rate'
}

export interface SortSelectProps {
  className?: string
  options: SortOption[]
  selectedOption: SortOption
  handleSelect: (option: SortOption) => void
}
