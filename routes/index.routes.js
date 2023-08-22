const router = require("express").Router()
const Cat = require("./../models/Cat.model")
const User = require("./../models/User.model")
router.get("/cats", (req, res, next) => {
	Cat.find()
		.populate("owner")
		.then((documents) => res.json(documents))
		.catch((e) => next(e))
})

module.exports = router
