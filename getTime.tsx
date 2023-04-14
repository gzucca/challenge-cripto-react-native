export const getCurrentTime = () => {
  const date = new Date();
  const dateFormatted = date.toLocaleDateString('en-GB');
  return dateFormatted;
};

export const getAPITime = (t: string) => {
  const date = new Date(t);
  const dateFormatted = date.toLocaleDateString('en-GB');
  return dateFormatted;
};
