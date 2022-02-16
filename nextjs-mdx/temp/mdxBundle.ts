import path from 'path'
import { bundleMDX } from 'mdx-bundler'
import { Post } from 'types'
import { uuid } from '../utils/util'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'

const ROOT = process.cwd()
const POSTS_PATH = path.join(ROOT, 'posts')

// returns compiled mdx: { code, frontmatter, matter }
export const getMdxBundle = async (slug: string) => {
  if (process.platform === 'win32') {
    process.env.ESBUILD_BINARY_PATH = path.join(
      ROOT,
      'node_modules',
      'esbuild',
      'esbuild.exe'
    )
  } else {
    process.env.ESBUILD_BINARY_PATH = path.join(
      ROOT,
      'node_modules',
      'esbuild',
      'bin',
      'esbuild'
    )
  }

  // Add your remark and rehype plugins here
  const remarkPlugins: any = []
  const rehypePlugins: any = [
    rehypeSlug,
    [rehypeAutolinkHeadings, { behavior: 'wrap' }],
    rehypeHighlight,
  ]

  // const source = fs.readFileSync(path.join(POSTS_PATH, `${slug}.mdx`), 'utf-8')
  try {
    const post = await bundleMDX({
      file: path.join(POSTS_PATH, `${slug}.mdx`),
      cwd: POSTS_PATH,
      xdmOptions(options: any) {
        options.remarkPlugins = [
          ...(options.remarkPlugins ?? []),
          ...remarkPlugins,
        ]
        options.rehypePlugins = [
          ...(options.rehypePlugins ?? []),
          ...rehypePlugins,
        ]
        return options
      },
    })

    const { title, tags, date, excerpt } = post.frontmatter as Post

    return {
      title: title ?? slug,
      date: date ?? new Date().toISOString().split('T')[0],
      tags: (tags ?? []).sort(),
      excerpt: excerpt ?? '',
      id: uuid(''),
      slug,
      code: post.code,
      content: post.matter.content,
    }
  } catch (error: any) {
    throw new Error(error)
  }
}
