"use client";

import React, { useState, useEffect } from "react";
import styles from "../pos.module.css";
import SkeletonTable from "../components/SkeletonTable";

export default function POSTablesPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [tables, setTables] = useState<any[]>([]);

    // Simulate API fetch
    useEffect(() => {
        const fetchTables = async () => {
            // Fake delay of 1.5s
            await new Promise((resolve) => setTimeout(resolve, 1500));

            setTables([
                { id: "T1", name: "Table 1", status: "empty", pax: 0, time: "-" },
                { id: "T2", name: "Table 2", status: "newOrder", pax: 2, time: "5 mins" },
                { id: "T3", name: "Table 3", status: "occupied", pax: 4, time: "25 mins" },
                { id: "T4", name: "Table 4", status: "empty", pax: 0, time: "-" },
                { id: "T5", name: "Table 5", status: "newOrder", pax: 3, time: "2 mins" },
            ]);
            setIsLoading(false);
        };

        fetchTables();
    }, []);

    return (
        <div className={styles.screen} style={{ display: "flex" }}>
            <div className={styles.sectionHeader}>
                <h2 className={styles.tableName}>Table Management</h2>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">Refresh</button>
            </div>
            {isLoading ? (
                <SkeletonTable count={8} />
            ) : (
                <div className={styles.tableGrid}>
                    {tables.map(t => (
                        <div key={t.id} className={`${styles.tableCard} ${styles[t.status]}`}>
                            <div className="flex justify-between items-start">
                                <span className={styles.tableName}>{t.name}</span>
                                <span className={`${styles.badge} ${t.status === "newOrder" ? styles.badgePurple :
                                    t.status === "occupied" ? styles.badgeYellow : styles.badgeGray
                                    }`}>
                                    {t.status}
                                </span>
                            </div>
                            <div className="text-sm text-gray-500 mt-2">
                                <div>Pax: {t.pax}</div>
                                <div>Time: {t.time}</div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
