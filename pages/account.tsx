import Link from 'next/link';
import { useState, ReactNode } from 'react';
import * as cookie from 'cookie';
import jwt from 'jsonwebtoken';
import prisma from '../utils/prisma';
import { stripe } from '../utils/stripe';

// export const getServerSideProps = withAuthRequired({ redirectTo: '/signin' });

export default function Account({ user, plan }) {
  return `${user.email} ${plan.name} $${plan.amount / 100}`;
}

export async function getServerSideProps(context) {
  const parsedCookies = cookie.parse(context.req.headers.cookie);
  let user = jwt.verify(
    parsedCookies[process.env.COOKIE_NAME],
    process.env.JWT_SECRET
  );
  user = await prisma.user.findUnique({
    where: { id: user.id }
  });

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
