import React from "react";
import Icon from "client/components/icon";
import cx from "classnames";

import style from "./section.css";

export default ({ title, id, className, children }) => (
  <div className={cx(style.section, className)}>
    <div className={style.sectionHeader} {...{ id }}>
      {title}
      {id && (
        <React.Fragment>
          {" "}
          <a href={`#${id}`}>
            <Icon name="paragraph" />
          </a>
        </React.Fragment>
      )}
    </div>
    {children}
  </div>
);
