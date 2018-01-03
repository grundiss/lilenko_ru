import React from "react";
import Page from "client/layout/page";

import style from "./styles.css";
import elementsStyle from "client/components/elements.css";

export default () => (
  <Page>
    <div className={elementsStyle.section}>
      <div className={elementsStyle.sectionHeader}>Конференция</div>
      <p>Каждый год я провожу конференцию.</p>
    </div>
  </Page>
);
