import { connectToDB } from "@utils/database"
import Art from "@models/art"

export const GET = async (request, { params }) => {
  try {
    await connectToDB()

    const arts = await Art.find({
      creator: params.id,
    }).populate("creator")

    return new Response(JSON.stringify(arts), { status: 200 })
  } catch (error) {
    return new Response("Failed to fetch all art", { status: 500 })
  }
}
