"use client";

import React from "react";

export default function KitchenHistoryPage() {
    return (
        <div className="p-6 bg-gray-100 min-h-screen font-sans">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">📜 Cooking History</h1>
                <button className="bg-gray-200 px-4 py-2 rounded-lg">Back to Queue</button>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
                <div className="text-center text-gray-500 py-10">No history available yet.</div>
            </div>
        </div>
    );
}
