"use client";

import React from "react";
import styles from "../../pos.module.css";

export default function POSMembersPage() {
    return (
        <div className={styles.screen} style={{ display: "flex" }}>
            <div className={styles.sectionHeader}>
                <h2 className={styles.tableName}>Members / CRM</h2>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">New Member</button>
            </div>

            <div className={styles.dataTable}>
                <table style={{ width: "100%" }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Points</th>
                            <th>Level</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>M001</td>
                            <td>Somchai Jai-dee</td>
                            <td>081-234-5678</td>
                            <td>1,240</td>
                            <td><span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs px-2">Gold</span></td>
                            <td><button className="text-blue-600">Edit</button></td>
                        </tr>
                        <tr>
                            <td>M002</td>
                            <td>Jane Doe</td>
                            <td>089-999-9999</td>
                            <td>50</td>
                            <td><span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs px-2">Standard</span></td>
                            <td><button className="text-blue-600">Edit</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
