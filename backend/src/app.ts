import cors from "cors";
import express from "express";
import healthRoutes from "./routes/healthRoutes";

const app = express();
const frontendUrl = process.env.FRONTEND_URL ?? "http://localhost:5173";

app.use(cors({ origin: frontendUrl }));
app.use(express.json());

app.use("/api/health", healthRoutes);

export default app;
