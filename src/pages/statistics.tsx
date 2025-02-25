"use client";

import { Activity, AlertCircle } from "lucide-react";
import NavBar from "../components/nav";
import { useFetchLogs } from "../../actions/log.actions";

const StatisticsPage = () => {
  const { logs, loading, error } = useFetchLogs();

  if (error) {
    return (
      <div className="container flex gap-5">
        <NavBar />
        <main className="flex-1 py-4">
          <div className="rounded-lg bg-red-50 p-4">
            <div className="flex items-center">
              <AlertCircle className="h-5 w-5 text-red-400" />
              <h3 className="ml-2 text-sm font-medium text-red-800">
                Error loading statistics
              </h3>
            </div>
            <div className="mt-2 text-sm text-red-700">{error}</div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="container flex gap-5">
      <NavBar />
      <main className="flex-1 py-4">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 flex gap-4 items-center">
            Statistics
          <Activity className="h-6 w-6 text-gray-400" />
          </h2>
        </div>

        {loading ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="h-32 animate-pulse rounded-lg border border-gray-200 bg-gray-50"
              />
            ))}
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {logs.map((log, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-4 transition-all hover:shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <span className="inline-block rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-800">
                    Log #{index + 1}
                  </span>
                  <p className="mt-2 text-sm text-gray-600">{log}</p>
                  <div className="mt-4 flex items-center text-xs text-gray-500">
                    <time dateTime={new Date().toISOString()}>
                      {new Date().toLocaleDateString()}
                    </time>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && logs.length === 0 && (
          <div className="mt-12 text-center">
            <Activity className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">
              No logs found
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Get started by creating some logs.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default StatisticsPage;
