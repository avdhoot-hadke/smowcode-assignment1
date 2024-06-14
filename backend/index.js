import express from "express";
import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import cors from "cors";

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const privateKey = process.env.SECRETE_KEY;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await prisma.user.create({
      data: { name, email, password },
    });
    const token = jwt.sign({ id: user.id }, privateKey);
    console.log("success*****", token);
    res.status(200).json({ user, token });
  } catch (error) {
    console.log(error);
    res.status(403).json(error);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: { email, password },
    });
    if (!user) res.status(403).send("Incorrect credentials!");
    const token = jwt.sign({ id: user.id }, privateKey);
    res.status(200).json({ user, token });
  } catch (error) {
    console.log(error);
    res.status(403).json(error);
  }
});

app.post("/add-note", async (req, res) => {
  const token = req.headers["token"];
  if (!token) {
    return res.status(401).json({ error: "Token not provided" });
  }
  const { title, content } = req.body;
  try {
    const user = jwt.verify(token, privateKey);
    const note = await prisma.notes.create({
      data: { title, content, userId: user.id },
    });
    res.json(note);
  } catch (error) {
    console.log(error);
    res.status(403).json(error);
  }
});

app.get("/notes", async (req, res) => {
  const token = req.headers["token"];
  if (!token) return res.status(401).json({ error: "Token not provided" });
  const user = jwt.verify(token, privateKey);
  try {
    const notes = await prisma.notes.findMany({
      where: { userId: user.id },
    });
    res.json(notes);
  } catch (error) {
    res.status(403).json(error);
  }
});

app.listen(3001, () => {
  console.log("Server started on port 3001");
});
