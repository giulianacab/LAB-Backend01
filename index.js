import express from "express";
import { drinksRouter } from "./Routes/drinks.routes.js";

const app = express ()

app.get("/", (req, res) => {
    return res.json ("Você deu GET em http://localhost:4000/");
});

app.use(express.json());

app.use("/drinks", drinksRouter);

app.listen(4000, () => {
    console.log("Rodando ok!")
});