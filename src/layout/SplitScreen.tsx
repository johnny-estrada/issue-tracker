import Sidebar from "../components/Sidebar";

export default function SplitScreen({ children }) {
  const [header, main] = children;

  return (
    <>
      {/* container */}
      <div className="bg-gray-100">
        {/* Sidebar col-1 */}
        <Sidebar />

        {/*  wrapper col-2 */}
        <div className="pt-5 lg:pt-1 lg:ml-72 overflow-hidden">
          {header}
          {main}
        </div>
      </div>
    </>
  );
}
