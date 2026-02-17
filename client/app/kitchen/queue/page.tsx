"use client";

import React from "react";

export default function KitchenQueuePage() {
    // Mock orders
    const orders = [
        {
            id: "O-101", table: "T-12", time: "12:30", items: [
                { name: "ข้าวกะเพราหมูสับ", qty: 2, status: "cooking" },
                { name: "ไข่ดาว", qty: 2, status: "pending" }
            ]
        },
        {
            id: "O-102", table: "T-05", time: "12:32", items: [
                { name: "ต้มยำกุ้ง", qty: 1, status: "pending" }
            ]
        },
    ];

    return (
        <div className="p-6 bg-gray-100 min-h-screen font-sans">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold flex items-center gap-2">
                    <span className="text-3xl">👨‍🍳</span> Kitchen Display System
                </h1>
                <div className="flex gap-3">
                    <div className="bg-white px-4 py-2 rounded-lg shadow font-bold text-blue-600">Pending: 3</div>
                    <div className="bg-white px-4 py-2 rounded-lg shadow font-bold text-orange-500">Cooking: 2</div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {orders.map(order => (
                    <div key={order.id} className="bg-white rounded-xl shadow-md border overflow-hidden">
                        <div className="bg-gray-800 text-white p-3 flex justify-between items-center">
                            <span className="font-bold text-lg">{order.table}</span>
                            <span className="text-sm opacity-80">#{order.id} • {order.time}</span>
                        </div>
                        <div className="p-4">
                            {order.items.map((item, idx) => (
                                <div key={idx} className="flex justify-between items-center py-2 border-b last:border-0">
                                    <div className="flex items-center gap-3">
                                        <span className="bg-gray-100 px-2 py-1 rounded font-bold text-lg">{item.qty}x</span>
                                        <span className={item.status === "cooking" ? "text-orange-600 font-bold" : ""}>{item.name}</span>
                                    </div>
                                    <button className={`px-3 py-1 rounded text-sm font-bold ${item.status === "cooking" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"
                                        }`}>
                                        {item.status === "cooking" ? "Done" : "Cook"}
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="p-3 bg-gray-50 border-t flex justify-between">
                            <button className="text-red-500 font-semibold text-sm">Cancel Order</button>
                            <button className="bg-green-600 text-white px-4 py-1 rounded-lg font-bold">Complete All</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
