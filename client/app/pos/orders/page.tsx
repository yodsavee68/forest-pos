"use client";

import React from "react";
import styles from "../pos.module.css";

export default function POSOrdersPage() {
    return (
        <div className={styles.screen} style={{ display: "flex" }}>
            <div className={styles.sectionHeader}>
                <h2 className={styles.tableName}>Order List</h2>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">Filter</button>
            </div>
            <div className="flex-1 flex items-center justify-center text-gray-500">
                Order List Placeholder
            </div>
        </div>
    );
}
