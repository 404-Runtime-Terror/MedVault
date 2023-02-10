import style from "./style.module.css";
import Link from "next/link";

const Navbar = (props) => {
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
          <Link
            href={props.isDoctor ? "/dashboard/doctor" : "/dashboard/patient"}
            className={style.list}
          >
            {props.isDoctor ? "Doctor Dashboard" : "Patient Dashboard"}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
