import { Outlet } from "react-router-dom";
import Logo from "./components/AppLayout/Logo";
import NavLinks from "./components/AppLayout/NavLinks";

function AppLayout() {
  return (
    <div>
      <header className="mb-1 shadow-md flex flex-col justify-center pt-4">
        <Logo />
        <hr className="border-t border-slate-200 mt-3" />
        <NavLinks />
      </header>

      <main className="bg-gray-100 h-screen p-8">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
