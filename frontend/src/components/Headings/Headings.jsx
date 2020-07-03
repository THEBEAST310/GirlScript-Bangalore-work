import React from "react";
import styles from  "./Headings.module.scss";
function Headings({ children }) {
  return (
    <div>
      <h1 className={styles['heading-background']}>{children}</h1>
      <h1 className={styles['heading-foreground']}>{children}</h1>
    </div>
  );
}
export default Headings;