import { Link, Outlet } from "umi";
import styles from "./index.less";
import "./normalize.css";

export default function Layout() {
  return (
    <div className={styles.navs}>
      <Outlet />
    </div>
  );
}
