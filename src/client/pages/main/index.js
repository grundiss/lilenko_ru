import React from "react";

import style from "./styles.css";

export default () => (
  <div className={style.test}>
    <div>it's alive!</div>
    <div>
      <button onClick={() => alert(1)} className={style.test2}>
        click me
      </button>
    </div>
  </div>
);
