import type { NextPage } from 'next'
//import styles from './articles.module.scss'
import { PostsType, Post } from 'types'
import { ArticleItem } from './articleItem'

export const Articles: NextPage<PostsType> = ({ posts }): JSX.Element => {
  return (
    <ul>
      {posts.map((post: Post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}
