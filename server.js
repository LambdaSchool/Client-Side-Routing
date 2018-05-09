const express = require('express');
const bodyParser = require('body-parser');
const CORS = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(CORS());

const movies = [
	{
		id: 0,
		title: 'The Godfather',
		director: 'Francis Ford Coppola',
		metascore: 100,
		stars: ['Marlon Brando', 'Al Pacino', 'Robert Duvall'],
		poster: '/Img/0_godfather.jpg',
	},
	{
		id: 1,
		title: 'Star Wars',
		director: 'George Lucas',
		metascore: 92,
		stars: ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher'],
		poster: '/Img/1_starwars.jpg',
	},
	{
		id: 2,
		title: 'The Lord of the Rings: The Fellowship of the Ring',
		director: 'Peter Jackson',
		metascore: 92,
		stars: ['Elijah Wood', 'Ian McKellen', 'Orlando Bloom'],
		poster: '/Img/2_lotr.jpg',
	},
	{
		id: 3,
		title: 'Terminator 2: Judgement Day',
		director: 'James Cameron',
		metascore: 94,
		stars: ['Arnold Schwarzenegger', 'Edward Furlong', 'Linda Hamilton'],
		poster: '/Img/3_terminator2.jpg',
	},
	{
		id: 4,
		title: 'Dumb and Dumber',
		director: 'The Farely Brothers',
		metascore: 76,
		stars: ['Jim Carrey', 'Jeff Daniels', 'Lauren Holly'],
		poster: '/Img/4_dumbanddumber.jpg',
	},
	{
		id: 5,
		title: 'Tombstone',
		director: 'George P. Cosmatos',
		metascore: 89,
		stars: ['Kurt Russell', 'Bill Paxton', 'Sam Elliot'],
		poster: '/Img/5_tombstone.jpg',
	},
];


app.get('/api/movies', (req, res) => {
	res.send(movies);
});

app.get('/api/movies/:id', (req, res) => {
	const movie = movies.filter(movie => movie.id.toString() === req.params.id)[0];
	res.status(200).json(movie);
});

app.post('/api/movies', (req, res) => {
	if (req.body.id !== undefined) movies.push(req.body);
	res.status(201).json(movies);
});

app.listen(5000, () => {
	console.log('Server listening on port 5000');
});
