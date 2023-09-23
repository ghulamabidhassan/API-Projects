import express from "express";
import serverless from "serverless-http";
import { showAll, showUnique } from "./functions";
import cors from "cors";

const app = express();
const router = express.Router();

app.use(express.json());

app.use(
  cors({
    origin: "https://devjobs-web-app-abid.netlify.app",
  })
);

app.use("/.netlify/functions/server", router);

router.get("/", async (req, res) => {
  const data = await showAll();
  res.json({ data });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const data = showUnique(id);
  res.json({ data });
});

export const handler = serverless(app);
