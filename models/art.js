import { Schema, model, models } from "mongoose"

const ArtSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: [true, "Date is required"],
  },
  img: {
    type: String,
    required: [true, "Image is required to add artwork"],
  },
})

//either get the Art that already exists in the models object, or create a new model that will be called 'Art' based on the schema
const Art = models.Art || model("Art", ArtSchema)

export default Art
