"use client";

import React from "react";
import styles from "../../pos.module.css";

export default function POSDashboardPage() {
    return (
        <div className={styles.screen} style={{ display: "flex" }}>
            <div className={styles.sectionHeader}>
                <h2 className={styles.tableName}>Dashboard</h2>
                <div className="flex gap-2">
                    <button className="bg-white border text-gray-600 px-4 py-2 rounded-lg">Last 7 Days</button>
                    <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">Export</button>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border">
                    <div className="text-gray-500 text-sm mb-1">Total Sales (Today)</div>
                    <div className="text-2xl font-bold">฿12,450</div>
                    <div className="text-green-500 text-sm">+15% from yesterday</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border">
                    <div className="text-gray-500 text-sm mb-1">Total Orders</div>
                    <div className="text-2xl font-bold">45</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border">
                    <div className="text-gray-500 text-sm mb-1">Active Tables</div>
                    <div className="text-2xl font-bold">8/12</div>
                </div>
            </div>

            <div className="flex-1 bg-white rounded-xl border p-6 flex flex-col items-center justify-center text-gray-400">
                Chart Placeholder
            </div>
        </div>
    );
}
