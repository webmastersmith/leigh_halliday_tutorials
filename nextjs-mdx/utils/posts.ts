import fs from 'fs'
import path from 'path'
import { getMdxBundle } from 'utils'
import { Post } from 'types'

const POST_PATH = path.join(process.cwd(), 'posts')

export const getAllFileNames = () => {
  return fs.readdirSync(POST_PATH).reduce((acc: string[], file: string) => {
    if (/\.mdx$/.test(file)) {
      acc.push(file.replace(/\.mdx$/, ''))
    }
    return acc
  }, [])
}
export const getAllPost = async () => {
  const files = getAllFileNames()
  const posts = await Promise.all(files.map((file) => getMdxBundle(file)))
  posts.sort((aObj: Post, bObj: Post) => {
    const a = aObj.date
    const b = bObj.date
    return a < b ? -1 : a > b ? 1 : 0 //small to big
  })
  return posts
}
