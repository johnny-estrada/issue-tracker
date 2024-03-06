interface Props {
  type: string;
}

const Input = ({ type }: Props) => {
  return (
    <>
      <input type={type} />
    </>
  );
};

export default Input;
