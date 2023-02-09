import Head from "next/head";
import styles from "./../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Health Vault - Secure Health Information Management</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Health Vault!</h1>
      </main>
    </>
  );
}
