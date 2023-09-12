import Sidebar from "./components/Sidebar";
import DataDisplay from "./components/ui/DataDisplay";
import Tabs from "./components/ui/Tabs";
import Breadcrumbs from "./components/ui/Breadcrumbs";
import SectionHeader from "./components/ui/SectionHeader";
import StackedList from "./components/ui/StackedList";

export default function App() {
  return (
    <>
      {/* container */}
      <div className="flex flex-col-reverse lg:flex-row bg-gray-100">
        {/* Sidebar col-1 */}
        <Sidebar />

        {/*  wrapper col-2 */}
        <div className="pt-5 flex-1 overflow-hidden">
          {/* header */}
          <header className="lg:ml-80 px-4">
            <Breadcrumbs />
            <SectionHeader />
            <DataDisplay />
          </header>

          <div className="lg:block">
            {/* main content */}
            <main className="mt-6 px-7 bg-white">
              <Tabs />
              {/* <StackedList /> */}
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
