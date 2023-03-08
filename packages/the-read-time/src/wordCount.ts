const wordCount = (text: string): number => {
  const chinese = Array.from(text).filter(ch => /[\u4e00-\u9fa5]/.test(ch)).length

  const english = Array.from(text)
    .map(ch => (/[a-zA-Z0-9\-\s]/.test(ch) ? ch : ' '))
    .join('')
    .split(/\s+/)
    .filter(s => s).length

  return chinese + english
}

export default wordCount
