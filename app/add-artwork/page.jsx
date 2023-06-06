"use client"

import { useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

import Form from "@components/Form"

const AddArt = () => {
  const router = useRouter()
  const { data: session } = useSession()

  const [submitting, setSubmitting] = useState(false)
  const [post, setPost] = useState({
    title: "",
    createdAt: "",
    img: "",
  })
  const addArtwork = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    //api we want to call
    try {
      const res = await fetch("/api/artwork/new", {
        method: "POST",
        body: JSON.stringify({
          title: post.title,
          userId: session?.user.id,
          createdAt: post.createdAt,
          img: post.img,
        }),
      })
      if (res.ok) {
        router.push("/")
      }
    } catch (error) {
      console.log(error)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Form
      type='Add'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={addArtwork}
    />
  )
}

export default AddArt
