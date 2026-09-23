import {NextStudio} from 'next-sanity/studio'
import config from '../../../../sanity.config'

export const dynamic = 'force-static'

export {metadata, viewport} from 'next-sanity/studio'

export default function StudioPage() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return (
      <main className="min-h-screen bg-[#101010] px-5 py-14 text-[#f6f4ef] sm:px-8 sm:py-20">
        <div className="mx-auto max-w-2xl rounded-2xl border border-white/15 bg-white/[0.03] p-7 sm:p-10">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#f3a08b]">
            One-time setup
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-geist-sans)] text-4xl font-black uppercase leading-[0.88] tracking-[-0.075em] sm:text-5xl">
            Connect your Sanity project.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-white/70">
            Create a project in Sanity, then add its project ID to your local
            environment before opening Studio.
          </p>
          <ol className="mt-7 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-white/70">
            <li>
              Create a project at{' '}
              <a className="text-[#f3a08b] underline underline-offset-4" href="https://www.sanity.io/manage">
                sanity.io/manage
              </a>.
            </li>
            <li>
              Add <code className="rounded bg-white/10 px-1.5 py-0.5 text-white">NEXT_PUBLIC_SANITY_PROJECT_ID</code>{' '}
              and <code className="rounded bg-white/10 px-1.5 py-0.5 text-white">NEXT_PUBLIC_SANITY_DATASET=production</code>{' '}
              to <code className="rounded bg-white/10 px-1.5 py-0.5 text-white">.env.local</code>.
            </li>
            <li>Restart <code className="rounded bg-white/10 px-1.5 py-0.5 text-white">npm run dev</code>, then return here.</li>
          </ol>
        </div>
      </main>
    )
  }

  return <NextStudio config={config} />
}
