import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
// import { Youtube } from 'components'
import { getAllPost } from 'utils'
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
  const posts = (await getAllPost()).slice(0, 9)

  return {
    props: { posts },
  }
}
