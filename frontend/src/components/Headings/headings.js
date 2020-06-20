import React from "react";
import "./headings.css";
function headings({ children }) {
  return (
    <div>
      <h1 className="heading-background">{children}</h1>
      <h1 className="heading-foreground">{children}</h1>
    </div>
  );
}
export default headings;