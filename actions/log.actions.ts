import { useState, useEffect } from "react";

export const useFetchLogs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/logs");
        if (!response.ok) {
          throw new Error("Failed to fetch logs");
        }
        const data = await response.json();
        setLogs(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setError("err");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { logs, loading, error };
};
