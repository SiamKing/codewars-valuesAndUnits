function valAndUnits(s) {
  const number = parseFloat(s)
  return {
    val: number,
    units: s.slice(number.toString().length).trim()
  }
}
