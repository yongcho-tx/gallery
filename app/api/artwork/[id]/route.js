import { connectToDB } from "@utils/database"
import Art from "@models/art"

//GET (read)
export const GET = async (request, { params }) => {
  try {
    await connectToDB()

    const art = await Art.findById(params.id).populate("creator")
    if (!art) return new Response("Art not found", { status: 404 })

    return new Response(JSON.stringify(art), { status: 200 })
  } catch (error) {
    return new Response("Failed to fetch all art", { status: 500 })
  }
}

//PATCH (update)

export const PATCH = async (request, { params }) => {
  const { title, createAt, img } = await request.json()

  try {
    await connectToDB()

    const existingArt = await Art.findById(params.id)

    if (!existingArt) return new Response("Art not found", { status: 404 })

    existingArt.title = title
    existingArt.createdAt = createdAt
    existingArt.img = img

    await existingArt.save()

    return new Response(JSON.stringify(existingArt), { status: 200 })
  } catch (error) {
    return new Response("Failed to update art", { status: 500 })
  }
}

//DELETE (delete)

export const DELETE = async (request, { params }) => {
  try {
    await connectToDB()

    await Art.findByIdAndRemove(params.id)

    return new Response("Prompt deleted Successfully", { status: 200 })
  } catch (error) {
    return new Response("Failed to delete art", { status: 500 })
  }
}
