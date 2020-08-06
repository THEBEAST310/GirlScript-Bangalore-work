import React from "react";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

/*
 * To open an internal link on button click, add `to` prop as in `Link` tag.
 *
 * To open an external link on button click, add `href` prop as in `a` tag.
 *
 * You can also pass `onClick` prop on the button
 */
function Button({ children, onClick, to, href }) {
  if (to) {
    return (
      <Link to={to} className={styles["btn"]} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        target="_blank"
        rel="noreferrer noopener"
        href={href}
        className={styles["btn"]}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={styles["btn"]} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
