import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import InvestorsPage from "./pages/investors";
import EventsPage from "./pages/events";
import StatisticsPage from "./pages/statistics";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/investors" element={<InvestorsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/statistics" element={<StatisticsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
