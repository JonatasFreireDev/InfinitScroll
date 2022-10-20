export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en", {
    day: "numeric",
    year: "numeric",
    month: "short",
  });
}
