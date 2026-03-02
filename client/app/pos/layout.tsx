"use client";

import React, { useState } from "react";
import styles from "./pos.module.css";
import { usePathname } from "next/navigation";
import Sidebar from "./components/Sidebar";
import { getCurrentAdmin } from "../../lib/auth";

export default function POSLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [searchQuery, setSearchQuery] = useState("");
    const [user, setUser] = useState<{ display_name: string } | null>(null);

    React.useEffect(() => {
        getCurrentAdmin().then((res) => {
            if (res) {
                setUser(res);
            }
        }).catch(console.error);
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.componentContainer}>
                {/* Sidebar */}
                <Sidebar />

                {/* Main Content */}
                <main className={styles.mainWrapper}>
                    {/* Top Bar */}
                    <header className={styles.topBar}>
                        <div className={styles.searchBox}>
                            <i className="fas fa-search"></i>
                            <input
                                type="text"
                                placeholder="Search table, order, menu..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center gap-4 cursor-pointer hover:bg-gray-50 py-1 px-3 rounded-lg transition-colors">
                            <span className="font-semibold text-gray-700">
                                {user ? user.display_name : "Loading..."}
                            </span>
                            <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-sm">
                                {user ? user.display_name.charAt(0).toUpperCase() : ""}
                            </div>
                        </div>
                    </header>

                    {/* Page Content */}
                    {children}

                </main>
            </div>

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        </div>
    );
}
