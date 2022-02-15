import type { NextPage } from 'next'
import styles from './youtube.module.scss'

interface Props {
  id: string
}

export const Youtube: NextPage<Props> = ({ id }): JSX.Element => {
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
