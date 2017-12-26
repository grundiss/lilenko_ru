import React from "react";
import ReactDOMServer from "react-dom/server";

const Html = ({ App, title = "lilenko.ru", bundleName }) => (
  <html>
    <head>
      <title>{title}</title>
      <link type="stylesheet" href="/static/bundle.css" />
    </head>
    <body>
      <div id="app" dangerouslySetInnerHTML={{ __html: ReactDOMServer.renderToString(<App />) }} />
      <script src={`static/js/${bundleName}.bundle.js`} />
    </body>
  </html>
);

export default (App, bundleName) => `
    <!DOCTYPE html>
    ${ReactDOMServer.renderToStaticMarkup(<Html bundleName={bundleName} App={App} />)}
`;
