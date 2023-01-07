import express from "express";
import cors from "cors";

const server = express();
server.use(cors());
server.use(express.json());

let users = [];
let tweets = [];

/* --- SIGN UP --- */
server.post("/sign-up", (req, res) => {
	const newUser = req.body;

	if (!newUser.username || !newUser.avatar) {
		res.status(422).send("user and/or avatar missing!");
		return;
	}

	users.push(newUser);
	res.send(`user created successfully`);
});

/* --- POST A TWEET --- */
server.post("/tweets", (req, res) => {
	const newTweet = req.body;

	if (!newTweet.username || !newTweet.tweet) {
		res.status(422).send("user and/or tweet missing!");
		return;
	}

	const searchedUser = users.find(
		(user) => user.username == newTweet.username
	);

	console.log(searchedUser);

	if (!searchedUser) {
		res.status(401).send("UNAUTHORIZED");
		return;
	}
	newTweet.avatar = searchedUser.avatar;
	tweets.push(newTweet);
	res.status(201).send(`tweet created successfully`);
	return;
});

/* --- GET TWEETS --- */
server.get("/tweets", (req, res) => {
	const N_OF_TWEETS = 10;
	const lastTweets = tweets.slice(-N_OF_TWEETS).reverse();
	res.status(200).send(lastTweets);
	return;
});

server.listen(5000);

// --- LIST OF STATUS CODES
// 200: Ok => Significa que deu tudo certo com a requisição
// 201: Created => Sucesso na criação do recurso
// 301: Moved Permanently => Significa que o recurso que você está tentando acessar foi movido pra outra URL
// 401: Unauthorized => Significa que você não tem acesso a esse recurso
// 404: Not Found => Significa que o recurso pedido não existe
// 409: Conflict => Significa que o recurso que você está tentando inserir já foi inserido
// 422: Unprocessable Entity => Significa que a requisição enviada não está no formato esperado
// 500: Internal Server Error => Significa que ocorreu algum erro desconhecido no servidor
