import { JSX } from "react";
import { UsersRound, CalendarFold, TrendingUp } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  return (
    <>
      <div className="w-[270px]"></div>
      <nav className="fixed top-0 left-0 flex flex-col gap-5 bg-[#14191C] h-screen w-[270px] py-5 px-5">
        <Link to={"/investors"} className="text-xl font-bold text-[#EAB30F] flex">
          <img src="/logo.png" height={50} width={50} alt="logo" className="mr-5" />
          <span>
            Binance <br /> Stock Exchange
          </span>
        </Link>

        <NavItem to="/investors" icon={<UsersRound />} text="Manage Investors" currentPath={location.pathname} />
        <NavItem to="/events" icon={<CalendarFold />} text="Manage Events" currentPath={location.pathname} />
        <NavItem to="/statistics" icon={<TrendingUp />} text="Statistics" currentPath={location.pathname} />
      </nav>
    </>
  );
};

const NavItem = ({ to, icon, text, currentPath }: { to: string; icon: JSX.Element; text: string; currentPath: string }) => {
  const isActive = currentPath === to;

  return (
    <Link
      to={to}
      className={`flex items-center font-bold p-3 gap-3 rounded transition-all ${
        isActive ? "bg-[#EAB30F] text-[#14191C]" : "bg-white text-[#14191C] hover:bg-[#EAB30F] hover:text-[#14191C]"
      }`}
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
};

export default NavBar;
