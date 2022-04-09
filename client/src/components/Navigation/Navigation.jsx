import React from "react";
import styles from "./Navigation.module.css";
import { AccountCircle } from "@material-ui/icons";
import { AccountBalanceWallet } from "@material-ui/icons";
import { Pool } from "@material-ui/icons";
import SearchBar from "../SearchBar/SearchBar";

const Navigation = () => {
  return (
    <div className={styles.navbarWrapper}>
      <nav className={styles.navbar}>
        <div className={styles.navbarLeft}>
          <a className={styles.logo} href="/">
            <Pool />
            LightSea
          </a>
        </div>
        <div className={styles.searchBar}>
          <SearchBar />
        </div>
        <ul className={styles.navLink}>
          <div className={styles.navLinkLeft}>
            <li className={styles.leftItem}>
              <a className={styles.link}>Explore</a>
            </li>
            <li className={styles.leftItem}>
              <a className={styles.link}>Stats</a>
            </li>
            <li className={styles.leftItem}>
              <a className={styles.link}>Resources</a>
            </li>
            <li className={styles.leftItem}>
              <a className={styles.link}>Create</a>
            </li>
          </div>
          <div className={styles.navLinkRight}>
            <div className={styles.accountWrapper}>
              <li className={styles.leftItem}>
                <a className={styles.accountLink}>
                  <AccountCircle
                    className={styles.otherlink}
                    style={{ fontSize: "2rem" }}
                  />
                </a>
              </li>
            </div>
            <li className={styles.leftItem}>
              <button className={styles.walletLink}>
                <AccountBalanceWallet
                  className={styles.otherlink}
                  style={{ fontSize: "2rem" }}
                />
              </button>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
