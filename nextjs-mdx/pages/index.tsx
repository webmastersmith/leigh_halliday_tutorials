import type { NextPage, GetStaticProps } from 'next'
import { getAllPosts } from 'utils'
import { PostsType } from 'types'
import { Articles } from 'components'

const HomePage: NextPage<PostsType> = ({ posts }) => {
  // return <Youtube id="J_0SBJMxmcw" />
  return (
    <div>
      <h1>Articles</h1>
      <Articles posts={posts} />
    </div>
  )
}

export default HomePage

export const getStaticProps: GetStaticProps = async () => {
  const posts = (await getAllPosts()).slice(0, 9)

  return {
    props: { posts },
  }
}
