import Link from "next/link"

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{type} Artwork</span>
      </h1>
      <p className='desc text-left max-w-md'>{type} and share</p>
      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Your artwork
          </span>
          <input
            type='text'
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            placeholder='title of artwork'
            required
            className='form_input'
          />
          <input
            type='text'
            value={post.createAt}
            onChange={(e) => setPost({ ...post, createdAt: e.target.value })}
            placeholder='creation date'
            required
            className='form_input '
          />
          <input
            type='text'
            value={post.img}
            onChange={(e) => setPost({ ...post, img: e.target.value })}
            placeholder='image'
            required
            className='form_input'
          />
        </label>
        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='text-gray-500 text-sm'>
            Cancel
          </Link>
          <button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  )
}

export default Form
