import React, { useContext } from "react";
import styles from "./Navigation.module.css";
import { AccountCircle } from "@material-ui/icons";
import { AccountBalanceWallet } from "@material-ui/icons";
import SearchBar from "../SearchBar/SearchBar";
import Logo from "../Logo/Logo";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../App";

const Navigation = () => {
  const navigate = useNavigate();
  const login = useContext(Context).login;

  const onAccountClick = () => {
    if (!login) {
      navigate("/login");
    } else {
      navigate("/account");
    }
  };

  const onWalletClick = () => {
    navigate("/login");
  };

  return (
    <div className={styles.navbarWrapper}>
      <nav className={styles.navbar}>
        <div className={styles.navbarLeft}>
          <Link className={styles.logo} to="/">
            <Logo />
            <span style={{marginLeft:'10px',fontFamily: "Englisgh Gilroy-Light",letterSpacing:'1rem',textDecoration:"none"}}>LIGHTSEA</span>
          </Link>
        </div>
        <div className={styles.searchBar}>
          <SearchBar />
        </div>
        <ul className={styles.navLink}>
          <div className={styles.navLinkLeft}>
            <li className={styles.leftItem}>
              <Link className={styles.link} to="/explore">
                Explore
              </Link>
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
              <li className={styles.leftItem} onClick={onAccountClick}>
                <a className={styles.accountLink}>
                  <AccountCircle
                    className={styles.otherlink}
                    style={{ fontSize: "2rem" }}
                  />
                </a>
              </li>
            </div>
            <li className={styles.leftItem} onClick={onWalletClick}>
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
