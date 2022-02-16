import type { NextPage } from 'next'
import styles from './youtube.module.scss'

interface Props {
  id: string
}

export const YouTube: NextPage<Props> = ({ id }) => {
  return (
    <div className={styles.container}>
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        allow="autoplay; encrypted-media"
        title="Embedded YouTube video"
        className={styles.frame}
      ></iframe>
    </div>
  )
}
