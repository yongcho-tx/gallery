"use client"

import { useState, useEffect } from "react"

import ArtCard from "./ArtCard"

const ArtCardList = ({ data, handleTitleClick }) => {
  return (
    <div className='mt-16 prompt_layout'>
      {data.map((post) => (
        <ArtCard
          key={post._id}
          post={post}
          handleTitleClick={handleTitleClick}
        />
      ))}
    </div>
  )
}

const Feed = () => {
  const [searchQueryString, setSearchQueryString] = useState("")
  const [posts, setPosts] = useState([])

  const handleSearchChange = (e) => {}

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/artwork")
      const data = await res.json()

      setPosts(data)
    }
    console.log(posts)
    fetchPosts()
  }, [])

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
          type='text'
          placeholder='Search for a title'
          value={searchQueryString}
          onChange={handleSearchChange}
          required
          className='search_input peer'
        />
      </form>
      <ArtCardList data={posts} handleTitleClick={() => {}} />
    </section>
  )
}

export default Feed
