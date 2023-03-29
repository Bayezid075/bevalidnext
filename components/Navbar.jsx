"use client";
import React from "react";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navholder}>
        <ul>
          <li> Home </li>
          <li> About </li>
          <li> Social Link </li>
        </ul>
      </div>
    </div>
  );
}
