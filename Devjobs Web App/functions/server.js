import express from "express";
import serverless from "serverless-http";
import { showAll, showUnique } from "./functions";
import cors from "cors";

const app = express();
const router = express.Router();

app.use(
  cors({
    origin: "*",
  })
);

app.use("/.netlify/functions/server", router);

router.get("/", async (req, res) => {
  const data = await showAll();
  res.json({ data });
});

router.get("/job/:id", async (req, res) => {
  const { id } = await req.params;
  const data = await showUnique(id);
  res.json({ data });
});

export const handler = serverless(app);
