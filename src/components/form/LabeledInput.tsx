interface Props {
  label: string;
  name: string;
  type: string;
  onChange(): void;
}

const LabeledInput = ({ label, type, name, onChange }: Props) => {
  return (
    <div className="sm:col-span-3 p-3">
      <label
        htmlFor="title"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          type={type}
          name="title"
          id="title"
          autoComplete="off"
          value={name}
          onChange={onChange}
          className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 bg-gray-50 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export default LabeledInput;
