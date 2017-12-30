import React from "react";
import ReactDOMServer from "react-dom/server";
import { PassThrough } from "stream";

const Html = ({ App, title = "lilenko.ru", bundleName }) => (
  <html>
    <head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <link rel="stylesheet" href={`/static/css/${bundleName}.bundle.css`} />
    </head>
    <body>
      <div id="app" dangerouslySetInnerHTML={{ __html: ReactDOMServer.renderToString(<App />) }} />
      <script src={`static/js/${bundleName}.bundle.js`} />
    </body>
  </html>
);

export default (App, bundleName) => {
  const resp = new PassThrough();

  resp.push("<!DOCTYPE html>", "utf8");

  ReactDOMServer.renderToStaticNodeStream(<Html bundleName={bundleName} App={App} />).pipe(resp);

  return resp;
};
