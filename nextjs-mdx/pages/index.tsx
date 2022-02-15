import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import { Youtube } from 'components'
import { getAllPost } from 'utils'

const Home: NextPage = () => {
  // return <Youtube id="J_0SBJMxmcw" />
  return <div>hello next</div>
}

export default Home

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // const { slug } = params as { slug: string }
  const files = getAllPost()

  return {
    props: {
      data: {},
    },
  }
}
