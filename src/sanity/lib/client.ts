import {createClient} from 'next-sanity'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production'

export const isSanityConfigured = Boolean(projectId)

export const client = createClient({
  projectId: projectId ?? 'missing-project-id',
  dataset,
  apiVersion: '2026-09-23',
  useCdn: true,
})
