import { stripe } from 'utils/stripe';
import { getURL } from 'utils/helpers';
import { NextApiRequest, NextApiResponse } from 'next';
import { getUserFromToken } from '@/utils/auth';
import prisma from '@/utils/prisma';

const createCheckoutSession = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method === 'POST') {
    const { price, quantity = 1 } = req.body;
    let user;
    try {
      user = await getUserFromToken(req.headers.cookie);
      if (!user) throw Error('Could not get user');

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
        success_url: `${getURL()}/account`,
        cancel_url: `${getURL()}/`
      });

      return res.status(200).json({ url: session.url });
    } catch (err) {
      console.log(err);
      await prisma.user.delete({ where: { id: user.id } });
      res.status(500).json({ error: 'Sorry, try again.' });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
};

export default createCheckoutSession;
