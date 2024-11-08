export function convertToDate(dateString: string | undefined): string | null {
  if (!dateString) {
    return null;
  }

  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const formattedDate = new Date(year, month, day);
  const options: Intl.DateTimeFormatOptions = {year: "numeric", month: "short", day: "numeric"};
  return formattedDate.toLocaleDateString("en-US", options);
}
