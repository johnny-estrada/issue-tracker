import Navigation from "../components/ui/Navigation";
import Logo from "./ui/Logo";

export default function Sidebar() {
  return (
    <>
      <div className="fixed bottom-0 w-full">
        <div className="flex flex-col lg:h-screen bg-stone-800 lg:w-72 px-4">
          <Logo />

          <Navigation />
        </div>
      </div>
    </>
  );
}
