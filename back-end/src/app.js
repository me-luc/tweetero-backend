import express from "express";
import cors from "cors";

const server = express();
server.use(cors);
// server.use(express.json());

//DECLARAÇÃO DE VARIÁVEIS
let users = [];
let tweets = [];

server.get("/", (req, res) => {
	res.send("HI");
});

server.post("/sign-up", (req, res) => {
	const newUser = req.body;
	users.push(newUser);
	console.log(newUser);
	res.send("created -> ");
});

server.listen(5000);
