import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { PostsType } from 'types'
import { getAllTags, getAllPosts } from 'utils'
import Head from 'next/head'
import { Articles } from 'components'

interface Props extends PostsType {
  slug: string
}
const TagsPage: NextPage<Props> = ({ posts, slug }) => {
  return (
    <div>
      <Head>Tag: {slug}</Head>
      <h1>Tag: {slug}</h1>
      <Articles posts={posts} />
    </div>
  )
}

export default TagsPage

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // folder names can only contain: a-z, A-Z, 0-9, -
  const { slug } = params as { slug: string }
  const posts = (await getAllPosts()).filter((post) => post.tags.includes(slug))

  return {
    props: { posts, slug },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = await getAllTags()
  const paths = tags.map((slug: string) => {
    return { params: { slug } }
  })
  return {
    paths,
    fallback: false, //show 404 page
  }
}
