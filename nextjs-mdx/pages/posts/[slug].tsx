import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import { MdxComponent, YouTube } from 'components'
import { PostType } from 'types'
import { getAllFileNames, getMdxBundle } from 'utils'
import 'highlight.js/styles/atom-one-dark.css'

const PostPage: NextPage<PostType> = ({ post }) => {
  const { title } = post

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>{title}</h1>
      <MdxComponent post={post} components={{ Image, YouTube }} />
    </>
  )
}

export default PostPage

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // folder names can only contain: a-z, A-Z, 0-9, -
  const { slug } = params as { slug: string }
  const post = await getMdxBundle(slug)
  return {
    props: { post },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const files = getAllFileNames()
  const paths = files.map((slug: string) => {
    return { params: { slug } }
  })

  return {
    paths,
    fallback: false, //show 404 page
  }
}
