import React from "react";
import styles from "./order.module.css";

export default function OrderLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={styles.container}>
            <div className={styles.appContainer}>
                {children}
            </div>

            {/* Font Awesome Script for Icons */}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        </div>
    );
}
