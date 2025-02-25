import { useState } from "react";
import { Loader2, Trash2, UserPen } from "lucide-react";
import {
  Investor,
  useDeleteInvestor,
  useUpdateInvestor,
} from "../../actions/investor.actions";

const InvestorCard = ({
  investor,
  updater,
}: {
  investor: Investor;
  updater: () => void;
}) => {
  const { isLoading: deleteLoading, deleteInvestor } = useDeleteInvestor();
  const [typeOfStrategy, setTypeStrategy] = useState<
    "AGGRESSIVE" | "CONSERVATIVE"
  >(investor.strategyType);
  const [isOpen, setOpen] = useState<boolean>(false);
  const { isLoading, updateInvestor } = useUpdateInvestor();

  return (
    <>
      <li
        key={investor.id}
        className="flex justify-between items-center p-4 border rounded-lg shadow-sm"
      >
        <p className="text-lg font-semibold mr-2">
          Name: {investor.name} Type:{" "}
          {investor.strategyType === "AGGRESSIVE"
            ? "Aggressive"
            : "Conservative"}
        </p>
        <div className="flex gap-5">
          <button
            className="hover:bg-gray-500 hover:text-white rounded-full p-2 gap-5 transition-colors duration-150"
            onClick={() => setOpen(!isOpen)}
          >
            <UserPen />
          </button>
          <button
            className="hover:bg-red-500 hover:text-white rounded-full p-2 gap-5 transition-colors duration-150"
            onClick={() => {
              deleteInvestor({ id: investor.id }).then(() => updater());
            }}
          >
            {deleteLoading ? <Loader2 /> : <Trash2 />}
          </button>
        </div>
      </li>
      {isOpen && (
        <form className="flex flex-col gap-3 mt-5">
          <h2 className="text-lg font-semibold">
            Edit Trader Type of {investor.name}:
          </h2>
          <select
            className="p-2 rounded-lg border w-3xs mx-auto"
            value={typeOfStrategy}
            onChange={(e) =>
              setTypeStrategy(e.target.value as "AGGRESSIVE" | "CONSERVATIVE")
            }
          >
            <option value="AGGRESSIVE">Aggressive</option>
            <option value="CONSERVATIVE">Conservative</option>
          </select>
          <button
            className="p-2 rounded-lg border w-3xs mx-auto bg-black text-white"
            onClick={() => {
              updateInvestor({ id: investor.id, strategyType: typeOfStrategy });
              updater();
            }}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin" />
              </>
            ) : (
              "Save Changes"
            )}
          </button>
          <hr />
        </form>
      )}
    </>
  );
};

export default InvestorCard;
