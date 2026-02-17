"use client";

import React from "react";
import styles from "../order.module.css";

export default function OrderBillPage() {
    return (
        <div className={styles.container}>
            <div className={styles.appContainer}>
                <div className={styles.topHeader}>
                    <div className={styles.logoPlaceholder}>LOGO</div>
                </div>

                <div className={styles.contentScroll} style={{ padding: "20px" }}>
                    <h2 className={styles.wsTitle} style={{ fontSize: "1.2rem", marginBottom: "20px" }}>สรุปยอดเงิน</h2>

                    <div className={styles.wsCard} style={{ alignItems: "flex-start" }}>
                        <div style={{ width: "100%", display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
                            <span>ค่าอาหาร</span>
                            <span>฿350.00</span>
                        </div>
                        <div style={{ width: "100%", display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
                            <span>VAT 7%</span>
                            <span>฿24.50</span>
                        </div>
                        <div style={{ width: "100%", height: "1px", background: "#eee", margin: "10px 0" }}></div>
                        <div style={{ width: "100%", display: "flex", justifyContent: "space-between", fontWeight: "bold", fontSize: "1.2rem" }}>
                            <span>ยอดสุทธิ</span>
                            <span>฿374.50</span>
                        </div>
                    </div>

                    <button className={styles.wsBtnPrimary} style={{ marginTop: "20px" }}>
                        เรียกพนักงานเก็บเงิน
                    </button>
                </div>
            </div>
        </div>
    );
}
