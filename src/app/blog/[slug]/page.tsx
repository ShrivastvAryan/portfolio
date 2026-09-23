import type {Metadata} from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {PortableText} from '@portabletext/react'
import {ArrowLeft, Clock3} from 'lucide-react'
import {notFound} from 'next/navigation'
import {urlFor} from '@/sanity/lib/image'
import {getPostBySlug, getPostSlugs} from '@/sanity/lib/posts'

type PostPageProps = {params: Promise<{slug: string}>}

function formatPostDate(value: string) {
  return new Intl.DateTimeFormat('en', {day: 'numeric', month: 'long', year: 'numeric'}).format(new Date(value))
}

export async function generateStaticParams() {
  const posts = await getPostSlugs()
  return posts.map(({slug}) => ({slug}))
}

export async function generateMetadata({params}: PostPageProps): Promise<Metadata> {
  const {slug} = await params
  const post = await getPostBySlug(slug)
  if (!post) return {}
  return {title: post.title, description: post.excerpt, alternates: {canonical: `/blog/${post.slug}`}, openGraph: {type: 'article', title: post.title, description: post.excerpt, publishedTime: post.publishedAt}}
}

export default async function BlogPostPage({params}: PostPageProps) {
  const {slug} = await params
  const post = await getPostBySlug(slug)
  if (!post) notFound()
  const coverImageUrl = post.coverImage ? urlFor(post.coverImage).width(1600).url() : null

  return (
    <article className="min-h-screen bg-[#101010] px-5 py-14 text-[#f6f4ef] sm:px-8 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <Link href="/blog" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-white/75 transition-colors hover:border-white/40 hover:bg-white hover:text-black"><ArrowLeft className="size-3" aria-hidden="true" />BLOGS</Link>
        <header className="border-b border-white/15 pb-10 pt-12 sm:pb-14 sm:pt-16">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.19em] text-[#f3a08b]">{post.category}</p>
          <h1 className="mt-5 font-[family-name:var(--font-geist-sans)] text-5xl font-black uppercase leading-[0.83] tracking-[-0.045em] sm:text-7xl">{post.title}</h1>
          <p className="mt-6 max-w-2xl text-lg font-semibold leading-snug tracking-[-0.035em] text-white/75 sm:text-xl">{post.excerpt}</p>
          <div className="mt-7 flex items-center gap-4 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-white/50"><span>{formatPostDate(post.publishedAt)}</span></div>
        </header>
        {coverImageUrl ? <Image src={coverImageUrl} alt={post.coverImage?.alt ?? ''} width={1600} height={900} className="mt-10 aspect-video w-full rounded-2xl object-cover sm:mt-14" priority /> : null}
        {post.body ? <div className="prose-blog py-12 text-[1.05rem] leading-8 text-white/75 sm:py-16 sm:text-lg"><PortableText value={post.body} /></div> : null}
      </div>
    </article>
  )
}
