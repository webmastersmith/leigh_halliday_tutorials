import fs from 'fs'
import path from 'path'

const POST_PATH = path.join(process.cwd(), 'posts')

export const getAllPost = () => {
  return fs.readdirSync(POST_PATH).reduce((acc: string[], file: string) => {
    if (/\.mdx$/.test(file)) {
      acc.push(file.replace(/\.mdx$/, ''))
    }
    return acc
  }, [])
}
