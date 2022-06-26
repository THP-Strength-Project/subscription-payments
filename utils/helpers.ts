import { Price } from 'types'
import { getPricingPage } from './graphcms'

export const getURL = () => {
  const url =
    process?.env?.URL && process.env.URL !== ''
      ? process.env.URL
      : process?.env?.VERCEL_URL && process.env.VERCEL_URL !== ''
      ? process.env.VERCEL_URL
      : process?.env?.NEXT_PUBLIC_VERCEL_URL && process.env.NEXT_PUBLIC_VERCEL_URL !== ''
      ? process.env.NEXT_PUBLIC_VERCEL_URL
      : 'http://localhost:3000'
  return url.includes('http') ? url : `https://${url}`
}

export const postData = async ({ url, data }: { url: string; data? }) => {
  const res: Response = await fetch(url, {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    credentials: 'same-origin',
    body: JSON.stringify(data)
  })

  if (!res.ok) {
    throw Error(res.statusText)
  }

  return res.json()
}

export const toDateTime = (secs: number) => {
  var t = new Date('1970-01-01T00:30:00Z') // Unix epoch start.
  t.setSeconds(secs)
  return t
}

export const formatUserForClient = ({ email, id, name, isVerified, created, updated }) => {
  return { email, id, name, isVerified, created, updated }
}

// export const pricingCMS = async getStaticProps({ preview = false }) {
//     const page = await getPricingPage(preview);

//     return {
//       props: {
//         content: page,
//         preview
//       },

//       revalidate: 10
//     };
//   }
