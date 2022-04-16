import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SearchBar.module.css";
import { Search } from "@material-ui/icons";

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      navigate(`/explore/${searchText}`);
    }
  };

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
            onKeyDown={handleKeyDown}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
