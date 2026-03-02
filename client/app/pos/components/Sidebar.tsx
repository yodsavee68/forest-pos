"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../pos.module.css";

export default function Sidebar() {
    const pathname = usePathname();

    const isActive = (path: string) => pathname?.startsWith(path);

    return (
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
    );
}
