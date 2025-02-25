import { useState } from "react";
import {  CirclePlus } from "lucide-react";
import AddInvestorForm from "./add-investor.form";
import InvestorCard from "./investor.card";
import { useGetInvestors } from "../../actions/investor.actions";

const InvestorsList = () => {
  const [isOpen, SetOpen] = useState<boolean>(false);
  const { error, isLoading, investors, setC, c } = useGetInvestors();

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
        <AddInvestorForm
          isOpen={isOpen}
          SetOpen={SetOpen}
          updater={() => setC(c + 1)}
        />
      )}

      {isLoading && <p>Loading investors...</p>}
      {error && <p className="text-red-500">Error loading investors.</p>}

      {!isLoading && !error && investors?.length > 0 ? (
        <ul className="flex flex-col w-full gap-5">
          {investors.map((investor) => (
            <InvestorCard investor={investor} updater={() => setC(c + 1)} />
          ))}
        </ul>
      ) : (
        !isLoading && !error && <p>No investors found.</p>
      )}
    </main>
  );
};

export default InvestorsList;
