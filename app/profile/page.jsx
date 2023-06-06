"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

import Profile from "@components/profile"

const MyProfile = () => {
  const { data: session } = useSession()
  const router = useRouter()

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`/api/users/${session?.user.id}/posts`)
      const data = await res.json()

      setPosts(data)
    }
    //only fetchposts if session user id exists
    if (session?.user.id) fetchPosts()
  }, [])

  const handleEdit = (post) => {
    router.push(`/update-artwork?id=${post._id}`)
  }

  const handleDelete = async (post) => {
    const hasConfirmed = confirm("Are you sure you want to delete this art?")

    if (hasConfirmed) {
      try {
        await fetch(`/api/artwork/${post._id.toString()}`, {
          method: "DELETE",
        })
        const filteredPosts = posts.filter((p) => p._id !== post._id)
        setPosts(filteredPosts)
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <Profile
      name='My'
      desc='Welcome to your personalized profile page'
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  )
}

export default MyProfile
