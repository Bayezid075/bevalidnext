"use client";
import React from "react";
import styles from "./img.module.css";
import Image from "next/image";
import chlogo from "../public/logo.png";

export default function Imageholder() {
  return (
    <div className={styles.imgContainer}>
      <Image src={chlogo} alt="channel logo" />
    </div>
  );
}
