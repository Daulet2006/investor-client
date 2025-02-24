import { UsersRound, CalendarFold, TrendingUp } from 'lucide-react'
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="flex flex-col gap-5 bg-[#14191C] h-screen w-[270px] py-5 px-5">
        <Link to={'/investors'} className="text-xl font-bold text-[#EAB30F] flex">
          <img src="/logo.png" height={50} width={50} alt="logo" className="mr-5" />
          <span>Binance <br /> Stock Exchange</span>
        </Link>

        <Link to={'/investors'} className="font-bold flex bg-white p-2 gap-3 rounded text-[#14191C]">
          <UsersRound />
          <span>Manage Investors</span>
        </Link>
        <Link to={'/events'} className="font-bold flex bg-white p-2 gap-3 rounded text-[#14191C]">
          <CalendarFold />
          <span>Manage Events</span>
        </Link>
        <Link to={'/statistics'} className="font-bold flex bg-white p-2 gap-3 rounded text-[#14191C]">
          <TrendingUp />
          <span>Statistics</span>
        </Link>
    </nav>
  )
}

export default NavBar
// #EAB30F