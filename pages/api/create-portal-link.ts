import { stripe } from 'utils/stripe';

import { getURL } from 'utils/helpers';
import { NextApiRequest, NextApiResponse } from 'next';
import { getUserFromToken } from '@/utils/auth';

const createPortalLink = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const user = await getUserFromToken(req.headers.cookie);
      if (!user) throw Error('Could not get user');

      const { url } = await stripe.billingPortal.sessions.create({
        customer: user.customerId,
        return_url: `${getURL()}/account`
      });

      return res.status(200).json({ url });
    } catch (err: any) {
      console.log(err);
      res
        .status(500)
        .json({ error: { statusCode: 500, message: err.message } });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
};

export default createPortalLink;
