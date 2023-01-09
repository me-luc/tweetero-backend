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
	const { username, avatar } = newUser;

	if (!username || !avatar) {
		res.status(400).send("user e/ou avatar faltando!");
		return;
	}

	if (typeof username !== "string" || typeof avatar !== "string") {
		res.status(400).send("user e/ou avatar tipo incorreto!");
		return;
	}

	const isUserSignedUp = users.find((item) => item.username == username);

	if (isUserSignedUp) {
		res.status(409).send("usuário já registrado!");
		return;
	}

	users.push(newUser);
	res.status(201).send(`user created successfully`);
	return;
});

/* --- POST A TWEET --- */
server.post("/tweets", (req, res) => {
	const newTweet = req.body;
	const { tweet } = newTweet;

	if (!tweet) {
		res.status(400).send("Formato inválido");
		return;
	}

	const username = req.headers.user;

	if (typeof tweet !== "string") {
		res.status(400).send("user e/ou avatar tipo incorreto!");
		return;
	}

	const searchedUser = users.find((user) => user.username == username);
	if (!searchedUser) {
		res.status(401).send("UNAUTHORIZED");
		return;
	}
	newTweet.username = username;
	newTweet.avatar = searchedUser.avatar;
	tweets.push(newTweet);
	res.status(201).send(`tweet created successfully`);
	return;
});

/* --- GET TWEETS FROM USER --- */
server.get("/tweets/:username", (req, res) => {
	const user = req.params.username;
	let userTweets = [];

	const searchedUser = users.find((item) => item.username == user);

	if (!searchedUser) {
		res.status(404).send("Usuário não encontrado");
	}

	userTweets = tweets.filter((tweet) => tweet.username == user);

	res.status(200).send(userTweets.reverse());
	return;
});

server.listen(5000, function () {
	console.log("server is running...");
});

/* --- GET TWEETS --- */
server.get("/tweets", (req, res) => {
	const page = parseInt(req.query.page);
	const N_OF_TWEETS = 10;
	let lastTweets = tweets.slice(-N_OF_TWEETS).reverse();

	if (page) {
		const aux = page == 1 ? 0 : 1;
		const start = (page - 1) * N_OF_TWEETS + aux;
		const end = (page - 1) * N_OF_TWEETS + N_OF_TWEETS + 1;
		console.log(start, end);
		lastTweets = tweets.slice(start, end);
	}

	res.status(200).send(lastTweets);
	return;
});

// --- LIST OF STATUS CODES
// 200: Ok => Significa que deu tudo certo com a requisição
// 201: Created => Sucesso na criação do recurso
// 301: Moved Permanently => Significa que o recurso que você está tentando acessar foi movido pra outra URL
// 401: Unauthorized => Significa que você não tem acesso a esse recurso
// 404: Not Found => Significa que o recurso pedido não existe
// 409: Conflict => Significa que o recurso que você está tentando inserir já foi inserido
// 422: Unprocessable Entity => Significa que a requisição enviada não está no formato esperado
// 500: Internal Server Error => Significa que ocorreu algum erro desconhecido no servidor
