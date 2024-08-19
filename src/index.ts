import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
    res.send("Hello, TypeScript + Node.js + Express!");
});

const port = 3000;
app.listen(port, () => {
    console.log(`🚀 Server started at http://localhost:${port}`);
});
