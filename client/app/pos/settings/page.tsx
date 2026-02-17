"use client";

import React from "react";
import styles from "../pos.module.css";

export default function POSSettingsPage() {
    return (
        <div className={styles.screen} style={{ display: "flex" }}>
            <div className={styles.sectionHeader}>
                <h2 className={styles.tableName}>Settings</h2>
            </div>
            <div className="flex-1 flex items-center justify-center text-gray-500">
                Settings Placeholder
            </div>
        </div>
    );
}
