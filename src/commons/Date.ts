export const newDate = (value: Date) => {
  // const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
  const date = new Date(value);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${yyyy}-${mm}-${dd} ${hours}:${minutes}:${seconds}`;
};

export const newHour = (value: Date) => {
  const date = new Date(value);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');

  return `${yyyy}-${mm}-${dd}`;
};

export const getTime = (value: Date) => {
  const date = new Date(value);
  const dd = String(date.getDate()).padStart(2, '0');
  const hh = String(date.getHours()).padStart(2, '0');
  return Number(dd) * 24 + Number(hh);
};
