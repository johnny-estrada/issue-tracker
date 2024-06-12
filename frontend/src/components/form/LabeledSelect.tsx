interface ILabeledSelect {
  label: string;
  options: string[];
}

const LabeledSelect = ({ label, options }: ILabeledSelect) => {
  return (
    <div className="lg:block">
      <label
        htmlFor="sort"
        className="lg:mr-2 text-xs lg:text-sm text-slate-600 my-auto"
      >
        {label}
      </label>
      <select
        id="sort"
        name="sort"
        className="relative inline-flex items-center rounded-md bg-white lg:px-3 text-xs lg:text-sm  text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 p-2"
      >
        {options.map((option) => (
          <option
            key={option}
            value={option}
            defaultValue={option}
            className="w-12 truncate"
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LabeledSelect;
