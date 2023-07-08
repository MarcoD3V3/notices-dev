import React from "react";
import styles from "./NavBar.module.scss";
import Image from "next/image";

export type NavBarProps = {};

const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <div className={styles.navbar}>
      <header className={styles.__header}>
        <div className={styles.__containerLogo}>
          LOGO
          {/* <Image src="./" width={100} height={100} alt="hola"></Image> */}
        </div>
      </header>
      <nav className={styles.__nav}>
        <ul className={styles.__listLinks}>
          <li className={styles.__itemLinit}>item1</li>
          <li className={styles.__itemLinit}>item2</li>
          <li className={styles.__itemLinit}>item2</li>
          <li className={styles.__itemLinit}>item2</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
