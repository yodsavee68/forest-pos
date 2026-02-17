"use client";

import React from "react";
import styles from "../pos.module.css";

export default function POSMenuPage() {
    return (
        <div className={styles.screen} style={{ display: "flex" }}>
            <div className={styles.sectionHeader}>
                <h2 className={styles.tableName}>Menu Management</h2>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">Add Item</button>
            </div>
            <div className="flex-1 flex items-center justify-center text-gray-500">
                Menu Management Placeholder
            </div>
        </div>
    );
}
