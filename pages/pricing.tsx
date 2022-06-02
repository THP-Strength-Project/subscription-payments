import React from 'react';
import Link from 'next/link';
import { stripe } from '@/utils/stripe';

const Pricing = ({ pricingCards }) => {
  return (
    <div>
      {pricingCards.map((card) => {
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
    </div>
  );
};

export default Pricing;
export const getStaticProps = async (context) => {
  const prices = await stripe.prices.list({
    active: true
  });
  console.log(prices);
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
      pricingCards
    }
  };
};
