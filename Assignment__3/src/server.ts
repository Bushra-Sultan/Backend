
import express,{ Application , Request, Response } from "express";
import studentRoutes from "./route";
const app = express();
app.use(express.json());
app.use("/students", studentRoutes);
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

