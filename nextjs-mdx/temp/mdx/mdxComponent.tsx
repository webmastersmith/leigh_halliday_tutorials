import type { NextPage } from 'next'
import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import { PostType } from 'types'

interface Props extends PostType {
  components: any
}

export const MdxComponent: NextPage<Props> = ({ post, components = {} }) => {
  const { code } = post
  // const components = {
  //   p: getImage(post),
  //   pre: getPre(post),
  // }
  const Component = useMemo(() => getMDXComponent(code), [code])
  return <Component components={components} />
}
