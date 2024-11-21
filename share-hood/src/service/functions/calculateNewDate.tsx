export const calculateNewDate = (duration: number, setDate?: number) => {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + duration + (setDate ?? 0));
  return currentDate.toDateString();
};

export const calculateNewDateLocale = (duration: number, setDate?: number) => {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + duration + (setDate ?? 0));
  return currentDate.toLocaleDateString();
};

export const calculateNewDateISO = (duration: number, setDate?: number) => {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + duration + (setDate ?? 0));
  return currentDate.toISOString();
};
