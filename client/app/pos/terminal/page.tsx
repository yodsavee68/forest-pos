"use client";

import React from "react";
import styles from "../pos.module.css";

export default function POSTerminalPage() {
    return (
        <div className={styles.screen} style={{ display: "flex" }}>
            <div className={styles.posLayout}>
                <div className={styles.posMenuGrid}>
                    {/* Placeholder Products */}
                    {[1, 2, 3, 4, 5, 6].map(i => (
                        <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                            <div className="h-24 bg-gray-100 rounded-lg mb-2"></div>
                            <div className="font-semibold">Product {i}</div>
                            <div className="text-purple-600 font-bold">฿120</div>
                        </div>
                    ))}
                </div>
                <div className={styles.cartPanel}>
                    <h3 className="font-bold text-lg mb-4">Current Order</h3>
                    <div className="flex-1 overflow-y-auto">
                        <div className="text-gray-500 text-center mt-10">No items</div>
                    </div>
                    <div className="border-t pt-4 mt-auto">
                        <div className="flex justify-between font-bold text-xl mb-4">
                            <span>Total</span>
                            <span>฿0.00</span>
                        </div>
                        <button className="w-full bg-purple-600 text-white py-3 rounded-xl font-bold">
                            Charge
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
