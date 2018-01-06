import path from "path";
import AWS from "aws-sdk";
import express from "express";
import bodyParser from "body-parser";
import React from "react";
import html from "./html";
import { Main, Book, Conference, School, Consulting, Articles, About } from "client/pages";
import { subsribeToSchoolUpdates } from "./db";

export default root => {
  AWS.config.loadFromPath(path.join(root, "aws.credentials.json"));
  const ddb = new AWS.DynamoDB({ apiVersion: "2012-10-08" });

  const app = express();
  app.use(bodyParser.json());

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
    html(Conference, "conference").pipe(res);
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

  app.post("/json/subsribe-to-school-updates", (req, res) => {
    const ok = () => res.json({ ok: true });
    const notOk = () => res.status(500).json({ ok: false });

    const { email, courseType } = req.body;

    if (!email) return notOk();

    subsribeToSchoolUpdates(ddb, { email, courseType })
      .then(ok)
      .catch(notOk);
  });

  app.listen(3000, () => {
    console.log("Server is started on a port 3000");
  });
};
