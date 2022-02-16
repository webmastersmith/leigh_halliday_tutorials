import type { NextPage } from 'next'
//import styles from './mDX.module.scss'
import { MDXRemote } from 'next-mdx-remote'
import { PostType } from 'types'

interface Props extends PostType {
  components: any
}

export const MDX: NextPage<Props> = ({ post, components = {} }) => {
  const { compiledSource } = post

  return <MDXRemote {...post} components={components} />
}
