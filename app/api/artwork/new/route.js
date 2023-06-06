import { connectToDB } from "@utils/database"
import Art from "@models/art"

export const POST = async (request) => {
  const { userId, title, createdAt, img } = await request.json()

  try {
    await connectToDB()
    const newArt = new Art({ creator: userId, title, createdAt, img })

    await newArt.save()

    return new Response(JSON.stringify(newArt), { status: 201 })
  } catch (error) {
    return new Response("Failed to create a new art", { status: 500 })
  }
}
