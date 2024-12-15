export type Post = {
  id: string,
  author: Partial<string | unknown>,
  images: string[],
  description: string,
  title: string,
  likes: {
    images: string[],
    first: string
  }
}
