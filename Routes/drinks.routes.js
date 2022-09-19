import express from "express";
import data from "../data.js";

const drinksRouter = express.Router()

// READ (get):

drinksRouter.get("/", (req, res) => {
    return res.json("Testando o router");
})



// CREATE (post):

drinksRouter.post("/create-drinks", (req, res) => {
    console.log(req.body);
    data.push(req.body);
    return res.json(data);
})



// UPDATE (put/patch):

drinksRouter.put("/update-drinks", (req, res) => {
    // Fazer atualizar o valor que foi inserido em POST
})



// DELETE (delete):

drinksRouter.delete("/delete-drinks", (req, res) => {
    // Fazer deletar o valor que foi inserido em POST
})


export { drinksRouter };