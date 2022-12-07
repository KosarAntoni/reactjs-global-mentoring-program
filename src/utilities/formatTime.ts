export const numberToTime = (minutes: number): string => {
  const hours = Math.floor(minutes / 60)
  const minutesLeft = minutes % 60
  return `${hours < 10 ? '0' : ''}${hours}h ${minutesLeft < 10 ? '0' : ''
    }${minutesLeft} min`
}

export const numberToFormTime = (minutes: number): string => {
  const hours = Math.floor(minutes / 60)
  const minutesLeft = minutes % 60
  return `${hours < 10 ? '0' : ''}${hours}:${minutesLeft < 10 ? '0' : ''
    }${minutesLeft}`
}

export const timeToNumber = (time: string) => {
  const [hours, minutes] = time.split(/[.:]/)
  return +hours * 60 + +minutes
}
