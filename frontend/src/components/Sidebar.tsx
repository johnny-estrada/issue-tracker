import Navigation from "./ui/sidebar/Navigation";
import Logo from "./ui/sidebar/Logo";

import { navigation, mobileNavigation } from "../data/index";

export default function Sidebar() {
  return (
    <div className="fixed z-10 w-full lg:w-72 bottom-0 row-span-3 lg:h-auto lg:relative">
      <aside className="w-full lg:h-full lg:w-72 bg-neutral-800">
        <div className="lg:pt-14 lg:mb-12 lg:pl-8">
          <Logo />
        </div>
        <div className="flex items-center justify-center lg:block h-full">
          <Navigation
            navigation={navigation}
            mobileNavigation={mobileNavigation}
          />
        </div>
      </aside>
      {/* <aside className="fixed bottom-0 z-20 w-full lg:h-full lg:w-72 bg-neutral-800">
        <div className="lg:mt-14 lg:mb-12 lg:pl-8">
          <Logo />
        </div>
        <div className="flex items-center justify-center lg:block h-full">
          <Navigation
            navigation={navigation}
            mobileNavigation={mobileNavigation}
          />
        </div>
      </aside> */}
    </div>
  );
}
