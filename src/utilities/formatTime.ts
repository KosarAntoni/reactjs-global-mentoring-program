export const formatTime = (minutes: number): string => {
  const hours = Math.floor(minutes / 60)
  const minutesLeft = minutes % 60
  return `${hours < 10 ? '0' : ''}${hours}h ${
      minutesLeft < 10 ? '0' : ''
    }${minutesLeft} min`
}
