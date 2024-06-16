import React from "react";
import styles from './root.module.css';

export default function Home() {
    return (
        <div className={styles.home_container}>
            <h1>HOME</h1>
            <div className={styles.button_container}>
                <a href="/courses" className={styles.home_button}>Courses</a>
                <a href="/members" className={styles.members}>Members</a>
            </div>
        </div>
    );
}