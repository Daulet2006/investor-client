import NavBar from "../components/nav";
import InvestorsList from "../components/investors-list";

const InvestorsPage = () => {

  return (
    <div className="flex gap-5">
      <NavBar />
      <InvestorsList />
    </div>
  );
};

export default InvestorsPage;
