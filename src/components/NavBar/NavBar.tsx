import React from "react";
import styles from "./NavBar.module.scss";
import Image from "next/image";

export type NavBarProps = {};

const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <div className={styles.navbar}>
      <header className={styles.__header}>
        <div className={styles.__containerLogo}>Dev News</div>
      </header>
      <nav className={styles.__nav}>
        <ul className={styles.__listLinks}>
          <li className={styles.__itemLinks}>item1</li>
          <li className={styles.__itemLinks}>item2</li>
          <li className={styles.__itemLinks}>item2</li>
          <li className={styles.__itemLinks}>item2</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
