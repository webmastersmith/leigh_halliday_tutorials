import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import {} from 'types'
import { getAllTags } from 'utils'

interface TagsType {
  tags: string[]
}
const TagsPage: NextPage<TagsType> = ({ tags }) => {
  return <div>TagsPage</div>
}

export default TagsPage

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // folder names can only contain: a-z, A-Z, 0-9, -
  const { slug } = params as { slug: string }
  return {
    props: { tags: 'hello' },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  // const tags = await getAllTags()
  // const paths = tags.map((slug: string) => {
  //   // folder names can only contain: a-z, A-Z, 0-9, -
  //   return { params: { slug } }
  // })

  // console.log('paths', paths)

  return {
    paths: [{ params: { slug: 'hooks' } }],
    fallback: false, //show 404 page
  }
}
