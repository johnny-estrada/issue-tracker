import Navigation from "./Navigation";
import Logo from "./Logo";

import { navigation, mobileNavigation } from "../../data/index";

export default function Sidebar() {
  return (
    <>
      <aside className="fixed bottom-0 z-10 w-full lg:h-full lg:w-72 bg-neutral-800">
        <div className="lg:my-12 lg:pl-8">
          <Logo />
        </div>
        <div>
          <Navigation
            navigation={navigation}
            mobileNavigation={mobileNavigation}
          />
        </div>
      </aside>
    </>
  );
}
