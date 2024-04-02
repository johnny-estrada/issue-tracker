// Function that is small, helpful with formatting.
//Ex. Currencies, dates, numbers, etc. or 3ed party libraries.
interface DateFormat {
  dateString: string;
  options: object;
}

export const formatDate = ({ dateString, options }: DateFormat) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
};

export const formatName = (fullName: string) => {
  const firstName = fullName.split(" ");
  return firstName[0];
};

export const formatNameDisplay = (fullName: string) => {
  const parts = fullName.split(" ");
  const firstName = parts[0];
  const lastNameInitial =
    parts.length > 1 ? parts[parts.length - 1].charAt(0) : "";
  return `${firstName} ${lastNameInitial}`;
};
