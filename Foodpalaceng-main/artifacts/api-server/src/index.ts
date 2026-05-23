import { Router } from "express";
import authRouter from "./auth.js";

const router = Router();

router.get("/health", (req, res) => {
  res.json({ status: "ok", message: "API is running" });
});

router.use("/auth", authRouter);

export default router;
