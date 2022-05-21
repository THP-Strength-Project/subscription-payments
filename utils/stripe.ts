import Stripe from 'stripe';
import { get, post } from './api';

export const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY_LIVE || process.env.STRIPE_SECRET_KEY || '',
  {
    // https://github.com/stripe/stripe-node#configuration
    apiVersion: '2020-08-27',
    // Register this as an official Stripe plugin.
    // https://stripe.com/docs/building-plugins#setappinfo
    appInfo: {
      name: 'Next.js Subscription Starter',
      version: '0.1.0'
    }
  }
);

export const getPortalUrl = async () => {
  const data = await get('/create-portal-link');
  console.log(data);
  return data;
};

export const getCheckoutUrl = async (priceId) => {
  const data = await post('/create-checkout-session', { price: priceId });
  console.log(data);
  return data;
};
