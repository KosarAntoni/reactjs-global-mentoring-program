export type SortOption = Record<'id' | 'name', string>

export interface SortSelectProps {
  className?: string
  options: SortOption[]
  selectedOption: SortOption
  handleSelect: (option: SortOption) => void
}
