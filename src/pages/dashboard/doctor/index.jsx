import React from "react";
// import QrReader from "react-qr-reader";
import Prescription from "../../../components/Prescription";
import Vaccine from "../../../components/Vaccine";
import styles from "../../../components/Prescription/style.module.css";
import QRScanner from "../../../components/QRScanner";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Health Vault!</h1>
        <QRScanner />
        <Prescription />
        <Vaccine />
      </main>
    </>
  );
}
