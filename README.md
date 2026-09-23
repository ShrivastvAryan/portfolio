This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Writing blog posts with Sanity

The editor is embedded at `/studio`. Publishing a post there updates the blog without a GitHub change or a new deployment.

### One-time connection

1. Create a Sanity account and a new project at [sanity.io/manage](https://www.sanity.io/manage). Use the `production` dataset.
2. Create `.env.local` in the project root with:

   ```bash
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_REVALIDATE_SECRET=a-long-random-secret
   ```

3. Add the same three variables to your hosting provider (for example, Vercel), then deploy this initial integration once.
4. In Sanity Manage, add `http://localhost:3000` and your production domain under **API → CORS origins**. Enable **Allow credentials** for both.
5. In Sanity Manage, create a webhook pointing to `https://your-domain.com/api/revalidate`, use the same `SANITY_REVALIDATE_SECRET`, and set its projection to:

   ```groq
   {_type, "slug": slug.current}
   ```

   Trigger it on create, update, and delete. This refreshes `/blog` and the affected article immediately after publishing.

After that, open `/studio`, sign in with your Sanity account, create a **Post**, and publish it. The public pages are `/blog` and `/blog/[slug]`.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
