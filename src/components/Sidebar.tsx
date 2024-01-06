import Navigation from "./ui/Navigation";
import Logo from "./ui/Logo";

import { navigation } from "../data/index";

export default function Sidebar() {
  return (
    <>
      <div className="fixed bottom-0 z-10 w-full lg:h-full lg:w-72 bg-stone-800">
        <div className="lg:mt-16 lg:pl-8">
          <Logo />
        </div>
        <div>
          <Navigation navigation={navigation} />
        </div>
      </div>
    </>
  );
}
