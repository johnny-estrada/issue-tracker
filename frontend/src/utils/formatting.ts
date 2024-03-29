// Function that is small, helpful with formatting.
//Ex. Currencies, dates, numbers, etc. or 3ed party libraries.
interface Props {
  dateString: string;
  options: string;
}

export const formatDate = ({ dateString, options }: Props) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
};

interface Props {
  fullName: string;
}

export const formatName = ({fullName}: Props) => {
  const firstName = fullName.split(" ");
  return firstName[0];
};

export const formatNameDisplay = ({fullName}: Props) => {
  const parts = fullName.split(" ");
  const firstName = parts[0];
  const lastNameInitial =
    parts.length > 1 ? parts[parts.length - 1].charAt(0) : "";
  return `${firstName} ${lastNameInitial}`;
};
