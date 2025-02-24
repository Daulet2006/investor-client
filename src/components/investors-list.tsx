import { Trash2, UserPen, CirclePlus } from "lucide-react";
import { useGetInvestors } from "../../actions/investor.actions";
import { useState } from "react";
import AddInvestorForm from "./add-investor.form";

const InvestorsList = () => {
  const { error, isLoading, investors } = useGetInvestors();
  const [isOpen, SetOpen] = useState<boolean>(false);

  return (
    <main className="py-4 grow pr-5">
      <h2 className="flex justify-between mb-4">
        <span className="text-2xl font-bold">Manage Investors</span>
        <button
          className="bg-black text-white p-2 px-4 rounded-lg flex items-center hover:bg-[#14191c]"
          onClick={() => SetOpen(!isOpen)}
        >
          <CirclePlus className="mr-2" size={20} /> Add Investor
        </button>
      </h2>

      {isOpen && (
        <AddInvestorForm isOpen={ isOpen } SetOpen={ SetOpen } />
      )}

      {isLoading && <p>Loading investors...</p>}
      {error && <p className="text-red-500">Error loading investors.</p>}

      {!isLoading && !error && investors?.length > 0 ? (
        <ul className="flex flex-col w-full">
          {investors.map((investor) => (
            <li
              key={investor.id}
              className="flex justify-between items-center p-4 border rounded-lg shadow-sm"
            >
              <p className="text-lg font-semibold mr-2">
                Name: {investor.name} Type: {investor.strategyType === "AGGRESSIVE" ? "Aggressive" : "Conservative"}
              </p>
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
  );
};

export default InvestorsList;
