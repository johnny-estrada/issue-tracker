// Function that is small, helpful with formatting.
//Ex. Currencies, dates, numbers, etc. or 3ed party libraries.

export const formatDate = (dateString, options) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
};
