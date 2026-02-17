"use client";

import React, { useState } from "react";
import styles from "./pos.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function POSLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [searchQuery, setSearchQuery] = useState("");

    const isActive = (path: string) => pathname?.startsWith(path);

    return (
        <div className={styles.container}>
            <div className={styles.componentContainer}>
                {/* Sidebar */}
                <aside className={styles.sidebar}>
                    <div className={styles.logo}>
                        <i className="fas fa-utensils"></i>
                    </div>
                    <nav>
                        <Link
                            href="/pos/tables"
                            className={`${styles.navItem} ${isActive("/pos/tables") ? styles.active : ""}`}
                        >
                            <i className="fas fa-th"></i>
                            <span>TABLES</span>
                        </Link>
                        <Link
                            href="/pos/menu"
                            className={`${styles.navItem} ${isActive("/pos/menu") ? styles.active : ""}`}
                        >
                            <i className="fas fa-book-open"></i>
                            <span>MENU</span>
                        </Link>
                        <Link
                            href="/pos/orders"
                            className={`${styles.navItem} ${isActive("/pos/orders") ? styles.active : ""}`}
                        >
                            <i className="fas fa-clipboard-list"></i>
                            <span>ORDERS</span>
                        </Link>
                        <Link
                            href="/pos/terminal"
                            className={`${styles.navItem} ${isActive("/pos/terminal") ? styles.active : ""}`}
                        >
                            <i className="fas fa-cash-register"></i>
                            <span>POS</span>
                        </Link>
                        <Link
                            href="/pos/settings"
                            className={`${styles.navItem} ${isActive("/pos/settings") ? styles.active : ""}`}
                        >
                            <i className="fas fa-cog"></i>
                            <span>SETTINGS</span>
                        </Link>
                    </nav>
                </aside>

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
                        <div className="flex items-center gap-4">
                            <span className="font-semibold text-gray-700">Admin Staff</span>
                            <div className="w-8 h-8 rounded-full bg-purple-500"></div>
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
