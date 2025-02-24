import NavBar from "../components/nav";
import { useGetInvestors } from "../../actions/investor.actions";
import { Trash2, UserPen } from "lucide-react";

const InvestorsPage = () => {
  const { error, isLoading, investors } = useGetInvestors();

  return (
    <div className="flex gap-5">
      <NavBar />

      <main className="py-4 grow pr-5">
        <h2 className="text-2xl font-bold mb-4">Manage Investors</h2>

        {isLoading && <p>Loading investors...</p>}
        {error && <p className="text-red-500">Error loading investors.</p>}

        {!isLoading && !error && investors?.length > 0 ? (
          <ul className="flex flex-col w-full">
            {investors.map((investor) => (
              <li key={investor.id} className="flex justify-between items-center p-4 border rounded-lg shadow-sm">
                <p className="text-lg font-semibold mr-2">Name: {investor.name} Type: {investor.strategyType}0</p>
                <div className="flex gap-5">
                  <button className="hover:bg-gray-500 hover:text-white rounded-full p-2 gap-5 transition-colors duration-150">
                    <UserPen />
                  </button>
                  <button className="hover:bg-red-500 hover:text-white rounded-full p-2 gap-5 transition-colors duration-150">
                    <Trash2 />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          !isLoading && !error && <p>No investors found.</p>
        )}
      </main>
    </div>
  );
};

export default InvestorsPage;
