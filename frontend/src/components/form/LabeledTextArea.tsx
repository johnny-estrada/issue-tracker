interface Props {
  label: string;
  name: string;
  rows: number;
  onChange(): void;
}

const LabeledTextArea = ({ label, rows, onChange }: Props) => {
  return (
    <div className="sm:col-span-3 p-3">
      <label
        htmlFor="description"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <textarea
          rows={rows}
          name="description"
          id="description"
          autoComplete="description"
          defaultValue={"value"}
          onChange={onChange}
          className="block w-full rounded-md border-0 py-1.5 px-3 bg-gray-50 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export default LabeledTextArea;
