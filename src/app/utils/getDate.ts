export function getDefaultFromDate(months: number): Date {
  const currentDate = new Date();
  currentDate.setMonth(currentDate.getMonth() - months);
  currentDate.setHours(18, 0, 0, 0);
  return currentDate;
}

export function getDefaultToDate() {
  const currentDate = new Date();
  currentDate.setHours(10, 0, 0, 0);
  return currentDate;
}
