import Feed from "@components/feed"

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>
        Create & Cherish
        <br className='max-md:hidden' />
        <span className='skysea_gradient text-center'>Personal Artwork</span>
      </h1>
      <p className='desc text-center'>Post your artwork daily.</p>
      <Feed />
    </section>
  )
}

export default Home
