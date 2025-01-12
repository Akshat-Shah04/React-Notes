import React from 'react';
// import "./style.css";
// import "./style1.css";

import Astyle from "./style.module.css";
import Bstyle from "./style1.module.css";

function Module() {
  return (
    <div>
        <h1 className={Astyle.box}>Hello this box 1 file</h1>

        <h1 className={Bstyle.box}>hellot this box 2 file</h1>
    </div>
  )
}

export default Module