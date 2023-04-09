
export const getCurrentTime = () => {
  const date = new Date()
  const hour = date.getUTCHours()
  const day= date.getUTCDate()
  const month= date.getUTCMonth()+1
  const year=date.getUTCFullYear()
  const dayMonthYear = `${day}-${month}-${year}: ${hour}hs`

  return dayMonthYear
}


export const getAPITime = (t: string) => {
  const hour = Number(t.slice(11,13))
  const day = Number(t.slice(9,10))
  const month = Number(t.slice(6,7))
  const year= Number(t.slice(0,4))
  const dayMonthYear = `${day}-${month}-${year}: ${hour}hs`
  return dayMonthYear;
}

