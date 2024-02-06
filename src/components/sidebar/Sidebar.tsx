import Navigation from "./Navigation";
import Logo from "./Logo";

import { navigation } from "../../data/index";

export default function Sidebar() {
  return (
    <>
      <aside className="fixed bottom-0 z-10 w-full lg:h-full lg:w-72 bg-neutral-800">
        <div className="lg:mt-20 lg:pl-8">
          <Logo />
        </div>
        <div className="lg:px-0 lg:mt-8">
          <Navigation navigation={navigation} />
        </div>
      </aside>
    </>
  );
}
