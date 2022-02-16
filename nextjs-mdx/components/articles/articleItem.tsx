import type { NextPage } from 'next'
import { PostType } from 'types'
import Link from 'next/link'
import styles from './articles.module.scss'

export const ArticleItem: NextPage<PostType> = ({ post }): JSX.Element => {
  const { title, slug, excerpt, tags } = post
  return (
    <li>
      <div className={styles.title}>
        <Link href={`/posts/${slug}`}>{title}</Link>
      </div>
      <p>{excerpt}</p>
      <p className={styles.tags}>
        {tags.map((tag) => {
          return (
            <Link href={`/tags/${tag}`} key={tag}>
              {tag}
            </Link>
          )
        })}
      </p>
    </li>
  )
}
