const express = require('express')

const app = express()

app.set('view engine', 'hbs')

app.listen(4000, () => {
    console.log('mapp listening on 4000')
})

app.get('/', (req, res) =>{
    res.render('index', {name: "you"})
})

app.get('/:name', (req, res) => {
	const randomCompliment =
		compliments[Math.floor(Math.random() * compliments.length)]

	const randomColor = colors[Math.floor(Math.random() * colors.length)]

	res.render('index', { randomCompliment, randomColor, name: req.params.name })
})

// app.get('/:name&:lastName', (req, res) => {
// 	const randomCompliment =
// 		compliments[Math.floor(Math.random() * compliments.length)]

// 	const randomColor = colors[Math.floor(Math.random() * colors.length)]

// 	res.render('index', { randomCompliment, randomColor, name: req.params.name, lastName: req.params.lastName })
// })

const compliments = [
    "Your instructors love you",
    "High five = ^5",
    "Is it Ruby Tuesday yet?",
    "It's almost beer o'clock",
    "The Force is strong with you"
  ];
const colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"];