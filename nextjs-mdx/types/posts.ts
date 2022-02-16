export interface Post {
  excerpt: string
  slug: string
  title: string
  tags: string[]
  date: string
  code: string
  id: string
  content: string
}

export interface PostType {
  post: Post
}
export interface PostsType {
  posts: Post[]
}
