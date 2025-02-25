import { FormEvent, useState } from "react";
import NavBar from "../components/nav";
import { useStockEvents, useMarketActions } from "../../actions/events.actions";

const EventsPage = () => {
  const { events, loading, error, fetchEvents } = useStockEvents();
  const { triggerMarketEvent, addMarketEvent } = useMarketActions();
  
  const [stockName, setStockName] = useState("");
  const [priceChange, setPriceChange] = useState("");
  const [event, setEvent] = useState("");

  const handleAddEvent = async (e: FormEvent) => {
    e.preventDefault();
    await addMarketEvent(stockName, parseInt(priceChange, 10), event);
    fetchEvents(); // Refresh events after adding
    setStockName("");
    setPriceChange("");
    setEvent("");
  };

  return (
    <div className="container flex gap-5">
      <NavBar />
      <main className="py-4 grow pr-5">
        <h2 className="text-2xl font-bold mb-4">Manage Events</h2>

        <button 
          onClick={() => { triggerMarketEvent(); fetchEvents(); }} 
          className="bg-black text-white px-4 py-2 rounded mb-4"
        >
          Trigger Market Event
        </button>

        <form onSubmit={handleAddEvent} className="mb-4">
          <input 
            type="text" 
            placeholder="Stock Name" 
            value={stockName} 
            onChange={(e) => setStockName(e.target.value)} 
            className="border p-2 mr-2 rounded-sm"
          />
          <input 
            type="number" 
            placeholder="Price Change" 
            value={priceChange} 
            onChange={(e) => setPriceChange(e.target.value)} 
            className="border p-2 mr-2 rounded-sm"
          />
          <input 
            type="text" 
            placeholder="Event Type" 
            value={event} 
            onChange={(e) => setEvent(e.target.value)} 
            className="border p-2 mr-2 rounded-sm"
          />
          <button type="submit" className="bg-black text-white px-4 py-2 rounded">
            Add Event
          </button>
        </form>

        {loading && <p>Loading events...</p>}
        {error && <p className="text-red-500">Error: {error.message}</p>}

        <ul className="list-disc pl-5">
          {events.map((ev, index) => (
            <li key={index} className="border p-2 mb-2">
              <strong>{ev.stockName}</strong>: {ev.priceChange} ({ev.event})
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default EventsPage;
