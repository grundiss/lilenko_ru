import path from "path";
import express from "express";
import React from "react";
import html from "./html";
import { Main } from "client/pages";

export default root => {
  const app = express();

  if (process.env.NODE_ENV === "development") {
    app.use("/static", express.static(path.join(root, "dist/static")));
    app.use("/assets", express.static(path.join(root, "assets")));
  }

  app.get("/", (req, res) => {
    html(Main, "main").pipe(res);
  });

  app.listen(3000, () => {
    console.log("Server is started on a port 3000");
  });
};
