import path from "path";
import express from "express";
import React from "react";
import html from "./html";
import { Main, Book, Conference, School, Consulting, Articles, About } from "client/pages";

export default root => {
  const app = express();

  if (process.env.NODE_ENV === "development") {
    app.use("/static", express.static(path.join(root, "dist/static")));
    app.use("/assets", express.static(path.join(root, "assets")));
  }

  app.get("/", (req, res) => {
    html(Main, "main").pipe(res);
  });

  app.get("/book", (req, res) => {
    html(Book, "book").pipe(res);
  });

  app.get("/conference", (req, res) => {
    html(Conference, "book").pipe(res);
  });

  app.get("/school", (req, res) => {
    html(School, "school").pipe(res);
  });

  app.get("/consulting", (req, res) => {
    html(Consulting, "consulting").pipe(res);
  });

  app.get("/articles", (req, res) => {
    html(Articles, "articles").pipe(res);
  });

  app.get("/about", (req, res) => {
    html(About, "about").pipe(res);
  });

  app.listen(3000, () => {
    console.log("Server is started on a port 3000");
  });
};
