"use client";

import React, { useState } from "react";
import styles from "./order.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function OrderWelcomePage() {
    const [lang, setLang] = useState("TH");
    const router = useRouter();

    return (
        <>
            {/* Welcome Screen */}
            <div className={styles.welcomeScreen}>
                <div className={styles.wsLogoArea}>
                    <div className={styles.wsLogoIcon}>
                        <i className="fas fa-utensils"></i>
                    </div>
                    <div className={styles.wsTitle}>Forest POS</div>
                    <div className={styles.wsSubtitle}>Restaurant & Cafe</div>
                </div>

                <div className={styles.wsCard}>
                    <div className={styles.wsCardVisual}>
                        <div className={styles.wsTableIcon}>
                            <i className="fas fa-chair"></i>
                        </div>
                        <div className={styles.wsQrBox}>
                            {/* Placeholder for QR */}
                        </div>
                    </div>
                    <div className={styles.wsTableName}>โต๊ะ T-12</div>
                    <div className={styles.wsTableDesc}>
                        กรุณาเลือกภาษาเพื่อเริ่มต้นสั่งอาหาร
                        <br />
                        Please select language to start ordering
                    </div>
                </div>

                <div className={styles.wsLangRow}>
                    <div
                        className={`${styles.wsLangItem} ${lang === "TH" ? styles.active : ""}`}
                        onClick={() => setLang("TH")}
                    >
                        🇹🇭 TH
                    </div>
                    <div
                        className={`${styles.wsLangItem} ${lang === "EN" ? styles.active : ""}`}
                        onClick={() => setLang("EN")}
                    >
                        🇬🇧 EN
                    </div>
                    <div
                        className={`${styles.wsLangItem} ${lang === "CN" ? styles.active : ""}`}
                        onClick={() => setLang("CN")}
                    >
                        🇨🇳 CN
                    </div>
                </div>

                <button
                    className={styles.wsBtnPrimary}
                    onClick={() => router.push("/order/menu")}
                >
                    สั่งอาหาร / Start Ordering
                </button>

                <button className={styles.wsBtnSecondary}>
                    เรียกพนักงาน / Call Waiter
                </button>
            </div>

            {/* Font Awesome Script */}
        </>
    );
}
