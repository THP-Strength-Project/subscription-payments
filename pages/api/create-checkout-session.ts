import { stripe } from 'utils/stripe'
import { getURL } from 'utils/helpers'
import { NextApiRequest, NextApiResponse } from 'next'
import { getUserFromToken } from '@/utils/auth'

const createCheckoutSession = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { price, quantity = 1, metadata = {} } = req.body

    try {
      const user = await getUserFromToken(req.headers.cookie)
      if (!user) throw Error('Could not get user')

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        billing_address_collection: 'required',
        customer: user.customerId,
        line_items: [
          {
            price: price,
            quantity
          }
        ],
        mode: 'subscription',
        // allow_promotion_codes: true,
        // subscription_data: {
        //   trial_from_plan: true,
        //   metadata
        // },
        success_url: `${getURL()}/account`,
        cancel_url: `${getURL()}/`
      })

      return res.status(200).json({ url: session.url })
    } catch (err: any) {
      console.log(err)
      res.status(500).json({ error: { statusCode: 500, message: err.message } })
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}

export default createCheckoutSession
