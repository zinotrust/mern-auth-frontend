import React from "react";
import { BiSearch } from "react-icons/bi";
import styles from "./Search.module.scss";

const Search = ({ value, onChange }) => {
  return (
    <div className={styles.search}>
      <BiSearch size={18} className={styles.icon} />
      <input
        type="text"
        placeholder="Search Users"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Search;
