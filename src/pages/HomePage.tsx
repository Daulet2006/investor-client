import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#14191C] text-white">
      <h1 className="text-4xl font-bold mb-6 text-[#EAB30F]">Welcome to Stock Market</h1>
      <button
        onClick={() => navigate("/investors")}
        className="bg-[#EAB30F] text-[#14191C] px-6 py-3 rounded-lg text-lg font-bold transition hover:bg-yellow-500"
      >
        Go to Investors Page
      </button>
    </div>
  );
};

export default HomePage;
