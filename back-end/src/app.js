import express from "express";
import cors from "cors";

const server = express();
server.use(cors());
server.use(express.json());

let users = [
	{
		username: "ToddVaughan",
		avatar: "https://img.freepik.com/fotos-premium/a-imagem-do-cerebro-humano_99433-294.jpg",
	},
	{
		username: "JannieGoodwin",
		avatar: "https://img.freepik.com/fotos-premium/a-imagem-do-cerebro-humano_99433-294.jpg",
	},
	{
		username: "HillaryHinton",
		avatar: "https://img.freepik.com/fotos-premium/a-imagem-do-cerebro-humano_99433-294.jpg",
	},
	{
		username: "KristinCote",
		avatar: "https://img.freepik.com/fotos-premium/a-imagem-do-cerebro-humano_99433-294.jpg",
	},
	{
		username: "PierceBest",
		avatar: "https://img.freepik.com/fotos-premium/a-imagem-do-cerebro-humano_99433-294.jpg",
	},
	{
		username: "GibbsCarr",
		avatar: "https://img.freepik.com/fotos-premium/a-imagem-do-cerebro-humano_99433-294.jpg",
	},
];
let tweets = [
	{
		username: "ToddVaughan",
		tweet: "Laboris aliqua quis aliqua irure. Laboris esse excepteur adipisicing esse. Veniam deserunt culpa ullamco quis officia deserunt deserunt sit dolore veniam. Fugiat deserunt excepteur sunt proident culpa et do elit in consequat quis tempor.\r\n",
	},
	{
		username: "JannieGoodwin",
		tweet: "Aliquip incididunt veniam deserunt sunt ullamco ex culpa id. Laborum esse ad aliquip mollit ad et ipsum eiusmod ut sunt. Proident ut laborum ea velit ea ullamco voluptate incididunt id non commodo laboris adipisicing. Ut ullamco qui ad laborum eu cillum elit incididunt fugiat.\r\n",
	},
	{
		username: "HillaryHinton",
		tweet: "Aliqua dolor anim ad enim excepteur cupidatat magna nisi enim cillum ad laborum excepteur magna. Cupidatat et laboris quis tempor ullamco amet. Et est Lorem et anim qui velit pariatur excepteur sunt cillum id nostrud. Non cupidatat labore cupidatat fugiat nostrud non.\r\n",
	},
	{
		username: "KristinCote",
		tweet: "Aliquip eu do qui aliqua Lorem dolore. Qui id ad sint in est pariatur magna nostrud velit reprehenderit labore pariatur velit. In do laboris eu do. Cillum fugiat laborum aute minim id fugiat labore officia labore amet culpa. Ipsum Lorem velit occaecat tempor laboris mollit cillum voluptate sint. Aliqua commodo labore et proident ex exercitation dolor consequat sint ad labore exercitation fugiat tempor. Dolor deserunt cupidatat incididunt enim aliquip id.\r\n",
	},
	{
		username: "PierceBest",
		tweet: "Lorem dolor nulla excepteur proident adipisicing occaecat occaecat dolore tempor eu. Qui laborum ut labore sit pariatur eiusmod anim do. Esse nostrud consequat elit id officia irure deserunt pariatur pariatur culpa laborum irure cupidatat elit. Duis laboris eu ea laborum pariatur cupidatat mollit aliquip ex sunt qui et. Eu ad fugiat irure exercitation. Enim culpa sit non adipisicing minim id velit incididunt veniam culpa aliquip.\r\n",
	},
	{
		username: "GibbsCarr",
		tweet: "Lorem nostrud elit in deserunt aliqua occaecat proident labore minim nulla eiusmod cupidatat qui. Aute amet velit commodo et adipisicing consequat reprehenderit. Exercitation do exercitation sit labore officia commodo excepteur. Esse esse ad incididunt sint ut id commodo pariatur voluptate officia consectetur proident. Ad incididunt ut ea veniam commodo. Irure veniam occaecat aliquip labore est magna cillum irure ex.\r\n",
	},
	{
		username: "KristinCote",
		tweet: "Aliquip eu do qui aliqua Lorem dolore. Qui id ad sint in est pariatur magna nostrud velit reprehenderit labore pariatur velit. In do laboris eu do. Cillum fugiat laborum aute minim id fugiat labore officia labore amet culpa. Ipsum Lorem velit occaecat tempor laboris mollit cillum voluptate sint. Aliqua commodo labore et proident ex exercitation dolor consequat sint ad labore exercitation fugiat tempor. Dolor deserunt cupidatat incididunt enim aliquip id.\r\n",
	},
	{
		username: "PierceBest",
		tweet: "Lorem dolor nulla excepteur proident adipisicing occaecat occaecat dolore tempor eu. Qui laborum ut labore sit pariatur eiusmod anim do. Esse nostrud consequat elit id officia irure deserunt pariatur pariatur culpa laborum irure cupidatat elit. Duis laboris eu ea laborum pariatur cupidatat mollit aliquip ex sunt qui et. Eu ad fugiat irure exercitation. Enim culpa sit non adipisicing minim id velit incididunt veniam culpa aliquip.\r\n",
	},
	{
		username: "GibbsCarr",
		tweet: "Lorem nostrud elit in deserunt aliqua occaecat proident labore minim nulla eiusmod cupidatat qui. Aute amet velit commodo et adipisicing consequat reprehenderit. Exercitation do exercitation sit labore officia commodo excepteur. Esse esse ad incididunt sint ut id commodo pariatur voluptate officia consectetur proident. Ad incididunt ut ea veniam commodo. Irure veniam occaecat aliquip labore est magna cillum irure ex.\r\n",
	},
	{
		username: "KristinCote",
		tweet: "Aliquip eu do qui aliqua Lorem dolore. Qui id ad sint in est pariatur magna nostrud velit reprehenderit labore pariatur velit. In do laboris eu do. Cillum fugiat laborum aute minim id fugiat labore officia labore amet culpa. Ipsum Lorem velit occaecat tempor laboris mollit cillum voluptate sint. Aliqua commodo labore et proident ex exercitation dolor consequat sint ad labore exercitation fugiat tempor. Dolor deserunt cupidatat incididunt enim aliquip id.\r\n",
	},
	{
		username: "PierceBest",
		tweet: "Lorem dolor nulla excepteur proident adipisicing occaecat occaecat dolore tempor eu. Qui laborum ut labore sit pariatur eiusmod anim do. Esse nostrud consequat elit id officia irure deserunt pariatur pariatur culpa laborum irure cupidatat elit. Duis laboris eu ea laborum pariatur cupidatat mollit aliquip ex sunt qui et. Eu ad fugiat irure exercitation. Enim culpa sit non adipisicing minim id velit incididunt veniam culpa aliquip.\r\n",
	},
	{
		username: "GibbsCarr",
		tweet: "Lorem nostrud elit in deserunt aliqua occaecat proident labore minim nulla eiusmod cupidatat qui. Aute amet velit commodo et adipisicing consequat reprehenderit. Exercitation do exercitation sit labore officia commodo excepteur. Esse esse ad incididunt sint ut id commodo pariatur voluptate officia consectetur proident. Ad incididunt ut ea veniam commodo. Irure veniam occaecat aliquip labore est magna cillum irure ex.\r\n",
	},
];

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
