import { Outlet } from "react-router-dom";
import Logo from "./components/AppLayout/Logo";
import NavLinks from "./components/AppLayout/NavLinks";

function AppLayout() {
  return (
    <div className="flex flex-col h-full">
      <header className="mb-1 shadow-md pt-4 relative px-8">
        <div className="max-w-[1440px] mx-auto flex flex-col justify-center">
          <Logo />
          <hr className="border-t border-slate-200 mt-3 absolute left-0 right-0 bottom-11.5" />
          <NavLinks />
        </div>
      </header>

      <main className="bg-gray-100 p-8 flex-1">
        <div className="max-w-[1440px] mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
