import React, { lazy, Suspense } from "react";

let Loading = <div>Loading</div>;
let Lazy = (loader) => {
  let Component = lazy(loader);
  return (props) => (
    <Suspense fallback={Loading}>
      <Component {...props} />
    </Suspense>
  );
};

export default Lazy;
export { Loading };
