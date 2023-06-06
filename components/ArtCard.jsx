"use client"

import { useState } from "react"
import Image from "next/image"
import { useSession } from "next-auth/react"
import { usePathname, useRouter } from "next/navigation"

const ArtCard = ({ post, handleTitleClick, handleEdit, handleDelete }) => {
  const { data: session } = useSession()
  const pathName = usePathname()
  const router = useRouter()

  console.log(post)
  return (
    <div className='prompt_card'>
      <div className='flex justify-between items-start gap-5'>
        <div className='flex-1 flex-start items-center gap-3 cursor-pointer'>
          <Image
            src={post.creator.image}
            alt='user_image'
            width={40}
            height={40}
            className='rounded-full object-contain'
          />
          <div className='flex flex-col'>
            <h3 className='font-satoshi font-semibold text-gray-900'>
              {post.creator.username}
            </h3>
            <p className='font-inter text-sm text-gray-500'>
              {post.creator.email}
            </p>
          </div>
        </div>
      </div>

      <p className='mt-4 mb-1 font-satoshi text-xl text-gray-700'>
        Title: {post.title}
      </p>
      <p className='font-inter text-sm'>
        Creation Date: {post.createdAt.slice(0, 10)}
      </p>
      {console.log(typeof post.createdAt)}
      <img src={post.img}></img>

      {session?.user.id === post.creator._id && pathName === "/profile" && (
        <div className='mt-5 flex-center gap-4 border border-t border-gray-100 pt-3'>
          <p
            className='font-inter text-sm green_gradient cursor-pointer'
            onClick={handleEdit}
          >
            Edit
          </p>
          <p
            className='font-inter text-sm video_gradient cursor-pointer'
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  )
}

export default ArtCard
