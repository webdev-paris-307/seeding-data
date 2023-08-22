const { Schema, model } = require("mongoose")

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const catSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, "Name is required."],
			trim: true,
		},
		colors: {
			type: [String],
			required: [true, "colors is required."],
		},
		owner: {
			type: Schema.Types.ObjectId,
			ref: "User",
		},
	},
	{
		// this second object adds extra properties: `createdAt` and `updatedAt`
		timestamps: true,
	}
)

const Cat = model("Cat", catSchema)

module.exports = Cat
