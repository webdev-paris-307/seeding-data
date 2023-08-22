require("dotenv").config()

require("./../db/index")

const User = require("../models/User.model")
const Cat = require("./../models/Cat.model")

const cats = [
	{
		name: "Bartholome",
		colors: ["Fire", "Silver"],
		owner: "Patoche",
	},
	{
		name: "Loop",
		colors: ["Blue", "Yellow"],
		owner: "Léa",
	},
	{
		name: "Garfield",
		colors: ["Red", "Black"],
		owner: "Léa",
	},
]

const users = [{ name: "Patoche" }, { name: "Léa" }, { name: "Leia" }]

async function seed() {
	try {
		await User.deleteMany()
		const allUsers = await User.create(users)
		await Cat.deleteMany()

		for (let cat of cats) {
			const foundUser = await User.findOne({ name: cat.owner })
			cat.owner = foundUser._id
			// cat.owner = randomElement(allUsers)
		}

		await Cat.create(cats)
	} catch (error) {
		console.log(error)
	} finally {
		process.exit()
	}
}

seed()

function randomElement(arr) {
	return arr[Math.floor(Math.random() * arr.length)]._id
}
