"use client";

import React, { useState } from "react";
import styles from "../order.module.css";
import Link from "next/link"; // If needed for back navigation

export default function OrderMenuPage() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [lang, setLang] = useState("TH");

    const categories = [
        { id: "all", label: "ทั้งหมด", icon: "🍽️" },
        { id: "recom", label: "แนะนำ", icon: "⭐" },
        { id: "rice", label: "จานเดียว", icon: "🍛" },
        { id: "soup", label: "ต้ม/แกง", icon: "🍲" },
        { id: "drink", label: "เครื่องดื่ม", icon: "🥤" },
    ];

    const products = [
        { id: 1, name: "ข้าวกะเพราหมูสับ", price: 65, category: "rice" },
        { id: 2, name: "ต้มยำกุ้ง", price: 150, category: "soup" },
        { id: 3, name: "ไข่เจียวหมูสับ", price: 80, category: "recom" },
        { id: 4, name: "น้ำเปล่า", price: 15, category: "drink" },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.appContainer}>

                {/* Top Header */}
                <div className={styles.topHeader}>
                    <div className={styles.logoPlaceholder}>LOGO</div>
                    <div className={styles.headerActions}>
                        <div className={styles.langSwitch} onClick={() => setLang(lang === "TH" ? "EN" : "TH")}>
                            <span>{lang}</span> <i className="fas fa-chevron-down"></i>
                        </div>
                        <div className={styles.iconBtn}>
                            <i className="fas fa-history"></i>
                        </div>
                    </div>
                </div>

                <div className={styles.contentScroll}>
                    <div className={styles.promoSection}>
                        <div className={styles.promoBanner}>
                            <span style={{ color: "#888" }}>Promotion Banner</span>
                        </div>
                    </div>

                    <div className={styles.categoryNav}>
                        {categories.map((cat) => (
                            <div
                                key={cat.id}
                                className={`${styles.catItem} ${activeCategory === cat.id ? styles.active : ""}`}
                                onClick={() => setActiveCategory(cat.id)}
                            >
                                <div className={styles.catIcon}>{cat.icon}</div>
                                <div className={styles.catLabel}>{cat.label}</div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.menuGrid}>
                        {products.map((p) => (
                            <div key={p.id} className={styles.menuCard}>
                                <div className={styles.cardImg}>
                                    {/* Placeholder Img */}
                                </div>
                                <div className={styles.cardContent}>
                                    <div className={styles.cardTitle}>{p.name}</div>
                                    <div className={styles.cardPriceRow}>
                                        <div className={styles.cardPrice}>฿{p.price}</div>
                                        <button className={styles.addBtn}><i className="fas fa-plus"></i></button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sticky Footer */}
                <div className={styles.stickyFooter}>
                    <div className={styles.footerContent}>
                        <div className={styles.orderInfo}>
                            <span className={styles.itemCount}>5 รายการ</span>
                            <span className={styles.totalPrice}>฿350.00</span>
                        </div>
                        <div className={styles.viewOrderText}>
                            ดูตะกร้า <i className="fas fa-shopping-basket"></i>
                        </div>
                    </div>
                </div>

            </div>

            {/* Font Awesome */}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        </div>
    );
}
