import {defineQuery} from 'next-sanity'

const postFields = `
  _id,
  title,
  "slug": slug.current,
  excerpt,
  category,
  publishedAt,
  readTime,
  coverImage,
  body
`

export const postsQuery = defineQuery(`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    ${postFields}
  }
`)

export const postBySlugQuery = defineQuery(`
  *[_type == "post" && slug.current == $slug][0] {
    ${postFields}
  }
`)

export const postSlugsQuery = defineQuery(`
  *[_type == "post" && defined(slug.current)] {"slug": slug.current}
`)
