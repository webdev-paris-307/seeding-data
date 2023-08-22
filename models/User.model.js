const { Schema, model } = require("mongoose")

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, "Name is required."],
			trim: true,
		},
	},
	{
		// this second object adds extra properties: `createdAt` and `updatedAt`
		timestamps: true,
	}
)

const User = model("User", userSchema)

module.exports = User
