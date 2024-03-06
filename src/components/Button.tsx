interface Props {
  color: string;
  label: string;
  tColor: string;
  onClick(): void;
}

const Button = ({ color, tColor, label, onClick }: Props) => {
  return (
    <button
      className={`rounded-md bg-${color}-600 px-3 py-2 text-sm text-${tColor} shadow-sm hover:bg-${color}-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-${color}-600`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
