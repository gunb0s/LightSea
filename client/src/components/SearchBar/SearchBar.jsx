import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import { Search } from "@material-ui/icons";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchWrapper}>
        <div className={styles.search}>
          <div className={styles.searchIcon}>
            <Search />
          </div>
          <input
            className={styles.serachInput}
            type="text"
            placeholder="Search items, collections, and accounts"
            value={searchText}
            onChange={(e) => {
              setSearchText((prev) => e.target.value);
            }}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
