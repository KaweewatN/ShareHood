export function convertToDate(dateString: string | undefined): string | null {
  if (!dateString) {
    return null;
  }

  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {year: "numeric", month: "short", day: "numeric"};
  return date.toLocaleDateString("en-US", options);
}
