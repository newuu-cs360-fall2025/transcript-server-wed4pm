import express, { Request, Response } from "express";

const app = express();
const port = parseInt(process.env.PORT || "3000", 10);

// GET / (returns Hello World)
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
