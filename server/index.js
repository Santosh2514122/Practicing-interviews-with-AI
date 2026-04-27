import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import connectDb from "./config/connectDb.js";

import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import interviewRouter from "./routes/interview.route.js";
import paymentRouter from "./routes/payment.route.js";

const app = express();

// ✅ CORS configuration (important)
app.use(cors({
  origin: "https://practicing-interviews-with-ai-client-ufvq.onrender.com",
  credentials: true
}));

// ✅ Middleware
app.use(express.json());   // only once
app.use(cookieParser());

// ✅ Routes
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/interview", interviewRouter);
app.use("/api/payment", paymentRouter);

// ✅ Test route (optional but helpful)
app.get("/", (req, res) => {
  res.send("API is running...");
});

// ✅ Server start
const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDb();
});
