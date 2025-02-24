import { FC, useState } from "react";
import { Loader2, X } from "lucide-react";
import { useAddInvestor } from "../../actions/investor.actions";

const AddInvestorForm: FC<{
  isOpen: boolean;
  SetOpen: (open: boolean) => void;
  updater: () => void;
}> = ({ isOpen, SetOpen, updater }) => {
  const { isLoading, addInvestor } = useAddInvestor();

  const [name, setName] = useState<string>("");
  const [typeOfStrategy, setTypeStrategy] = useState<
    "AGGRESSIVE" | "CONSERVATIVE"
  >("AGGRESSIVE");

  return (
    <>
      <div className="fixed inset-0 bg-black opacity-70 z-10 flex"></div>

      <div className="fixed inset-0 flex justify-center items-center z-20">
        <div className="bg-white p-5 rounded-xl w-full max-w-[360px]">
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold mb-4">Create New Investor:</span>
            <button
              className="mb-3 bg-black text-white p-2 rounded-xl hover:bg-[#14191c]"
              onClick={() => SetOpen(!isOpen)}
            >
              <X />
            </button>
          </div>
          <form
            className="flex flex-col gap-5"
            onSubmit={(e) => {
              e.preventDefault();
              if (!name) return;

              addInvestor({ name, strategyType: typeOfStrategy }).then(() => {
                updater();
                SetOpen(false);
              });
            }}
          >
            <input
              type="text"
              placeholder="Name"
              className="p-2 rounded-lg border pl-3"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <select
              className="p-2 rounded-lg border"
              value={typeOfStrategy}
              onChange={(e) =>
                setTypeStrategy(e.target.value as "AGGRESSIVE" | "CONSERVATIVE")
              }
            >
              <option value="AGGRESSIVE">Aggressive</option>
              <option value="CONSERVATIVE">Conservative</option>
            </select>
            <button className="bg-black text-white p-2 rounded-lg hover:bg-[#14191c] flex justify-center">
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin" />
                </>
              ) : (
                "Add Investor"
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddInvestorForm;
