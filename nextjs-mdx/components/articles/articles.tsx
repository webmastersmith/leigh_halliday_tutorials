import type { NextPage } from 'next'
import styles from './articles.module.scss'
import { PostsType, Post } from 'types'
import { ArticleItem } from './articleItem'

export const Articles: NextPage<PostsType> = ({ posts }): JSX.Element => {
  return (
    <ul className={styles.list}>
      {posts.map((post: Post) => (
        <ArticleItem post={post} key={post.id} />
      ))}
    </ul>
  )
}
