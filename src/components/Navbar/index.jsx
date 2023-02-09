import style from "./style.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <h1>HealthVault</h1>
      <ul>
        <li>
          <Link href="/" className={style.list}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/dashboard/patient" className={style.list}>
            Patient
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
