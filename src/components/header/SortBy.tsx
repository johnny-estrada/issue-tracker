const SortBy = () => {
  return (
    <div className="hidden lg:block">
      <label
        htmlFor="sort"
        className="ml-10 mr-2 text-sm text-slate-500 my-auto"
      >
        sort by:
      </label>
      <select
        id="sort"
        name="sort"
        className="relative inline-flex items-center rounded-md bg-white px-3 text-sm font-normal text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 p-2"
      >
        <option value="status">status</option>
        <option value="priority">priority</option>
        <option value="start date">start date</option>
        <option value="target date">target date</option>
      </select>
    </div>
  );
};

export default SortBy;
