const convertNumberToTime = (minute: number): string => {
  const [hour, minutes, seconds] = new Date(minute * 60 * 1000)
    .toISOString()
    .substring(11, 11 + 8)
    .split(':')
    .map(item => Number(item))
  
  return `${hour ? `${hour}h` : ''}${minutes ? `${minutes}'` : ''}${seconds ? `${seconds}"` : ''}`
}

export default convertNumberToTime
