import { useState, useEffect } from "react";

const API_BASE_URL = "http://localhost:8080/market";

type StockEvent = {
  stockName: string;
  priceChange: number;
  event: string;
};

export function useStockEvents() {
  const [events, setEvents] = useState<StockEvent[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/events`);
      if (!response.ok) {
        throw new Error("Failed to fetch events");
      }
      const data: StockEvent[] = await response.json();
      setEvents(data);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  return { events, loading, error, fetchEvents };
}

export function useMarketActions() {
  const triggerMarketEvent = async (): Promise<void> => {
    try {
      const response = await fetch(`${API_BASE_URL}/trigger`, {
        method: "POST",
      });
      if (!response.ok) {
        throw new Error("Failed to trigger market event");
      }
    } catch (err) {
      console.error("Error triggering market event", err);
    }
  };

  const addMarketEvent = async (stockName: string, priceChange: number, event: string): Promise<StockEvent | void> => {
    try {
      const response = await fetch(`${API_BASE_URL}/events?stockName=${encodeURIComponent(stockName)}&priceChange=${encodeURIComponent(priceChange)}&event=${encodeURIComponent(event)}`, {
        method: "POST",
      });
      if (!response.ok) {
        throw new Error("Failed to add market event");
      }
      return await response.json();
    } catch (err) {
      console.error("Error adding market event", err);
    }
  };

  return { triggerMarketEvent, addMarketEvent };
}