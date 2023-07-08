import React from "react";
import styles from "./SearchNotice.module.scss";

export type SearchNoticeProps = {};

const SearchNotice: React.FC<SearchNoticeProps> = ({}) => {
  return (
    <div className={styles.searchnotice}>
      <div>SearchNotice</div>
    </div>
  );
};

export default SearchNotice;
