import Head from "next/head";
import styles from "./../styles/Home.module.css";
import IndexPage from "../components/homePageComponents/indexpage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Health Vault - Secure Health Information Management</title>
      </Head>
      <main className={styles.main}>
      <div style = {{display : "flex",flexDirection: "column"}}>
            <IndexPage />
        </div>
      </main>
    </>
  );
}
