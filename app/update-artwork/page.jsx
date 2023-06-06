"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Form from "@components/Form"

const EditArt = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const artId = searchParams.get("id")

  const [submitting, setSubmitting] = useState(false)
  const [post, setPost] = useState({
    title: "",
    createdAt: "",
    img: "",
  })

  useEffect(() => {
    const getArtDetails = async () => {
      const response = await fetch(`/api/artwork/${artId}`)
      const data = await response.json()

      setPost({
        title: data.title,
        createdAt: data.createdAt,
        img: data.img,
      })
    }
    if (artId) getArtDetails()
  }, [artId])

  const updateArtwork = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    if (!artId) return alert("ArtId not found")
    //api we want to call
    try {
      const res = await fetch(`/api/artwork/${artId}`, {
        method: "PATCH",
        body: JSON.stringify({
          title: post.title,
          createdAt: post.createdAt,
          img: post.img,
        }),
      })
      if (res.ok) {
        router.push("/")
      }
    } catch (err) {
      console.log(err)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Form
      type='Edit'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updateArtwork}
    />
  )
}

export default EditArt
