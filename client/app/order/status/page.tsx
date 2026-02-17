"use client";

import React from "react";
import styles from "../order.module.css";

export default function OrderStatusPage() {
    return (
        <div className={styles.container}>
            <div className={styles.appContainer}>
                <div className={styles.topHeader}>
                    <div className={styles.logoPlaceholder}>LOGO</div>
                </div>

                <div className={styles.contentScroll} style={{ padding: "20px" }}>
                    <h2 className={styles.wsTitle} style={{ fontSize: "1.2rem", marginBottom: "20px" }}>สถานะออเดอร์</h2>

                    <div className={styles.wsCard}>
                        <div style={{ width: "100%", display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                            <span style={{ fontWeight: "bold" }}>โต๊ะ T-12</span>
                            <span style={{ color: "green" }}>กำลังปรุงสดใหม่</span>
                        </div>
                        <div style={{ height: "4px", background: "#eee", borderRadius: "2px", overflow: "hidden" }}>
                            <div style={{ width: "60%", height: "100%", background: "green" }}></div>
                        </div>
                    </div>

                    <div style={{ marginTop: "20px" }}>
                        <div className={styles.menuCard} style={{ display: "flex", flexDirection: "row", padding: "10px", marginBottom: "10px" }}>
                            <div style={{ width: "60px", height: "60px", background: "#eee", borderRadius: "8px" }}></div>
                            <div style={{ marginLeft: "10px", flex: 1 }}>
                                <div style={{ fontWeight: "bold" }}>ต้มยำกุ้ง</div>
                                <div style={{ fontSize: "0.8rem", color: "orange" }}>กำลังปรุง...</div>
                            </div>
                        </div>
                        <div className={styles.menuCard} style={{ display: "flex", flexDirection: "row", padding: "10px", marginBottom: "10px" }}>
                            <div style={{ width: "60px", height: "60px", background: "#eee", borderRadius: "8px" }}></div>
                            <div style={{ marginLeft: "10px", flex: 1 }}>
                                <div style={{ fontWeight: "bold" }}>ข้าวกะเพรา</div>
                                <div style={{ fontSize: "0.8rem", color: "green" }}>เสิร์ฟแล้ว</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
