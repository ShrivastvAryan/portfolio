import type {PortableTextBlock} from '@portabletext/types'
import type {SanityImageSource} from '@sanity/image-url'
import {client, isSanityConfigured} from './client'
import {postBySlugQuery, postsQuery, postSlugsQuery} from './queries'

export type BlogPost = {
  _id: string
  title: string
  slug: string
  excerpt: string
  category: string
  publishedAt: string
  readTime?: string
  coverImage?: SanityImageSource & {alt?: string}
  body?: PortableTextBlock[]
}

export async function getPosts() {
  if (!isSanityConfigured) return [] as BlogPost[]

  return client.fetch<BlogPost[]>(postsQuery, {}, {next: {revalidate: 3600}})
}

export async function getPostBySlug(slug: string) {
  if (!isSanityConfigured) return null

  return client.fetch<BlogPost | null>(postBySlugQuery, {slug}, {
    next: {revalidate: 3600},
  })
}

export async function getPostSlugs() {
  if (!isSanityConfigured) return [] as {slug: string}[]

  return client.fetch<{slug: string}[]>(postSlugsQuery, {}, {
    next: {revalidate: 3600},
  })
}
