export const getCurrentTime = () => {
  const date = new Date();
  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1;
  const year = date.getUTCFullYear();
  const dayMonthYear = `${day}-${month}-${year}`;

  return dayMonthYear;
};


export const getAPITime = (t: string) => {
  const splitString = t.split('T');
  const date = splitString[0].split('-');
  const day = Number(date[2])
  const month = Number(date[1])
  const year = Number(date[0])
  const dayMonthYear = `${day}-${month}-${year}`;
  return dayMonthYear;
};

