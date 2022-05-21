import Link from 'next/link';
import { useState, ReactNode } from 'react';
import * as cookie from 'cookie';
import jwt from 'jsonwebtoken';
import prisma from '../utils/prisma';
import { stripe, getPortalUrl } from '../utils/stripe';
import { getUserFromToken } from '../utils/auth';

export default function Account({ user, plan }) {
  const fetchPortal = async () => {
    const { url } = await getPortalUrl();
    location.href = url;
    console.log(url);
  };
  return (
    <div>
      <button onClick={fetchPortal}>Client Portal</button>
    </div>
  );
}

export async function getServerSideProps(context) {
  const user = await getUserFromToken(context.req.headers.cookie);
  //handle error and loading states here

  const subscriptions = await stripe.subscriptions.list({
    limit: 1,
    customer: user.customerId
  });
  const { amount, product } = subscriptions.data[0]?.items.data[0].plan;

  const productObj = await stripe.products.retrieve(product);
  console.log(productObj.name);

  return {
    props: {
      user: {
        email: user.email,
        id: user.id
      },
      plan: {
        amount,
        name: productObj.name
      }
    }
  };
}
