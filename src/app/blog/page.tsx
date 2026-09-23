import type {Metadata} from 'next'
import Link from 'next/link'
import {ArrowUpRight, Clock3, Sparkles} from 'lucide-react'
import {getPosts} from '@/sanity/lib/posts'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Notes from Aryan Shrivastava on building thoughtful, fast web experiences.',
  alternates: {canonical: '/blog'},
}

const accentColors = ['bg-[#e85d3f]', 'bg-[#d8d4ff]', 'bg-[#bddfcb]']

function formatPostDate(value: string) {
  return new Intl.DateTimeFormat('en', {day: 'numeric', month: 'short', year: 'numeric'}).format(new Date(value))
}

export default async function BlogPage() {
  const posts = await getPosts()
  const featuredPost = posts[0]

  return (
    <article className="min-h-screen bg-[#101010] px-5 py-14 text-[#f6f4ef] sm:px-8 sm:py-20">
      <div className="mx-auto max-w-[940px]">
        <header className="border-b border-white/15 pb-10 sm:pb-14">
          <div className="flex items-center justify-between gap-4">
            <p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-white/55">Field notes</p>
            <Link href="/" className="rounded-full border border-white/15 px-3 py-1.5 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-white/80 transition-colors hover:border-white/40 hover:bg-white hover:text-black">Home</Link>
          </div>
          <div className="mt-10 grid gap-8 sm:mt-14 sm:grid-cols-[1.25fr_0.75fr] sm:items-end">
            <div>
              <h1 className="font-[family-name:var(--font-geist-sans)] text-6xl font-black uppercase leading-[0.78] tracking-[-0.05em] sm:text-8xl">BLOGS &amp;<br />ideas.</h1>
              <p className="mt-5 max-w-lg text-lg font-semibold leading-snug tracking-[-0.035em] sm:text-xl">Thoughts on making useful things for the web—and the curiosity that keeps the work moving.</p>
            </div>
            <div className="border-l border-[#e85d3f] pl-5 text-sm leading-relaxed text-white/60 sm:mb-1 sm:pl-6 sm:text-[0.95rem]">A growing collection of practical lessons, in-progress ideas, and small observations from the intersection of code and craft.</div>
          </div>
        </header>

        {featuredPost ? (
          <section className="border-b border-white/15 py-10 sm:py-14" aria-labelledby="featured-note">
            <div className="mb-5 flex items-center gap-2 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#f3a08b]">Latest note</div>
            <Link href={`/blog/${featuredPost.slug}`} className="group relative block overflow-hidden rounded-2xl bg-[#e85d3f] p-6 text-[#171312] sm:p-9">
              <div className="absolute -right-7 -top-10 font-[family-name:var(--font-geist-sans)] text-[11rem] font-black leading-none tracking-[-0.14em] text-black/[0.07] sm:text-[15rem]">01</div>
              <div className="relative max-w-2xl">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.19em] text-black/55">{featuredPost.category} / {formatPostDate(featuredPost.publishedAt)}</p>
                <h2 id="featured-note" className="mt-7 font-[family-name:var(--font-geist-sans)] text-3xl font-black uppercase leading-[0.86] tracking-[-0.075em] sm:text-5xl">{featuredPost.title}</h2>
                <p className="mt-5 max-w-xl text-sm leading-relaxed text-black/70 sm:text-[0.95rem]">{featuredPost.excerpt}</p>
              </div>
            </Link>
          </section>
        ) : null}

        <section className="py-10 sm:py-14" aria-labelledby="all-notes">
          <div className="mb-6 flex items-end justify-between gap-4 sm:mb-8">
            <div><p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-white/55">The collection</p><h2 id="all-notes" className="mt-2 text-xl font-semibold tracking-[-0.045em] sm:text-2xl">{posts.length ? 'All Blogs.' : 'The first note is on its way.'}</h2></div>
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-white/40">{posts.length} {posts.length === 1 ? 'entry' : 'entries'}</span>
          </div>
          {posts.length ? (
            <div className="divide-y divide-white/15 border-t border-white/15">
              {posts.map((post, index) => (
                <Link key={post._id} href={`/blog/${post.slug}`} className="group grid gap-5 py-7 sm:grid-cols-[auto_1fr_auto] sm:gap-8 sm:py-9">
                  <div className={`flex size-10 shrink-0 items-center justify-center rounded-full ${accentColors[index % accentColors.length]} text-xs font-black text-black`}>{String(index + 1).padStart(2, '0')}</div>
                  <div><p className="text-[0.6rem] font-bold uppercase tracking-[0.18em] text-white/50">{post.category}</p><h3 className="mt-2 text-xl font-semibold leading-[1.02] tracking-[-0.045em] transition-colors group-hover:text-[#f3a08b] sm:text-2xl">{post.title}</h3><p className="mt-3 max-w-xl text-sm leading-relaxed text-white/60 sm:text-[0.95rem]">{post.excerpt}</p></div>
                  <div className="flex items-center gap-3 self-start text-[0.65rem] font-bold uppercase tracking-[0.15em] text-white/45 sm:flex-col sm:items-end sm:gap-2 sm:text-right"><span>{formatPostDate(post.publishedAt)}</span></div>
                </Link>
              ))}
            </div>
          ) : <p className="border-t border-white/15 pt-7 text-sm leading-relaxed text-white/55">Once your Sanity project is connected, published posts will show up here automatically.</p>}
        </section>
      </div>
    </article>
  )
}
