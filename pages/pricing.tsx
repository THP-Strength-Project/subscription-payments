import React from 'react';
import Link from 'next/link';
import { stripe } from '@/utils/stripe';
import { getPricingPage } from '@/utils/graphcms';
import { Button, Group, Box, Grid, Image, Paper } from '@mantine/core';

const Pricing = ({ content }) => {
  console.log(content);
  return (
    <Paper>
      {content.pricingCards.map((card) => {
        return (
          <div style={{ marginBottom: '20px' }}>
            <div>{card.id}</div>
            <div>{card.amount}</div>
            <div>{card.months}</div>
            <Link href={`/signup?price=${card.id}`}>
              <a>
                <button>Order</button>
              </a>
            </Link>
          </div>
        );
      })}
    </Paper>
  );
};

export default Pricing;

//Using Next.js to fetch Stripe products
export async function getStaticProps(context) {
  const prices = await stripe.prices.list({
    active: true
  });

  // Using  Next.js to hoist pricing and product props to render on page
  const pricingCards = prices.data
    .filter((item) => item.type === 'recurring')
    .map((item) => {
      return {
        id: item.id,
        months: item.recurring.interval_count,
        amount: item.unit_amount / 100
      };
    });
  return {
    props: {
      content: page,
      pricingCards
    }
  };
}
