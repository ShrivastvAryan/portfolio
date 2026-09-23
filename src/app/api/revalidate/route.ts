import {revalidatePath} from 'next/cache'
import type {NextRequest} from 'next/server'
import {parseBody} from 'next-sanity/webhook'

type WebhookPayload = {
  _type?: string
  slug?: string
}

export async function POST(request: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET

  if (!secret) {
    return new Response('Missing SANITY_REVALIDATE_SECRET', {status: 500})
  }

  try {
    const {body, isValidSignature} = await parseBody<WebhookPayload>(
      request,
      secret,
      true,
    )

    if (!isValidSignature) {
      return new Response('Invalid signature', {status: 401})
    }

    revalidatePath('/blog')

    if (body?._type === 'post' && body.slug) {
      revalidatePath(`/blog/${body.slug}`)
    }

    return Response.json({revalidated: true, now: Date.now()})
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    return new Response(message, {status: 500})
  }
}
