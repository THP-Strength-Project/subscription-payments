import React, { useState } from 'react';
import Link from 'next/link';
import { stripe } from '@/utils/stripe';
import {  Box, Grid, Title, Text, Select } from '@mantine/core';
import Container from '@/components/Container'
import PriceCard from '@/components/PriceCard';

const Pricing = ({ stripeSubscriptions }) => {
  const [activeSub, setSub] = useState(stripeSubscriptions[0].id)

  const handleChange = (value) => {
    setSub(value)
  }

  const getPriceById = id => stripeSubscriptions.find(sub => sub.id === id)

  return (
    <Box>
      <Container>
        <Grid justify="center" align="center" sx={{width: '100%', textAlign: 'center'}}>
          <Grid.Col span={9} py={40}>
            <Text sx={{fontSize: '3.5em'}}>Choose a flexible training plan to reach your goals.</Text>
          </Grid.Col>
          <Grid.Col span={9}>
            <Text sx={theme => ({
              fontSize: '1.5em',
              color: theme.colors.gray[6]
            })}>
              A tremor in the Force. The last time I felt it was in the presence of my old master.Don't act so surprised, Your Highness. You weren't on any mercy mission this time.
            </Text>
          </Grid.Col>

          <Grid.Col span={4} sx={{marginTop: 40}}>
            <Select
              size="lg"
              shadow="sm"
              label="Frequency"
              placeholder="Pick one"
              transition="scale-y"
              transitionDuration={300}
              value={activeSub}
              onChange={handleChange}
              data={stripeSubscriptions.map(sub => ({
                value: sub.id,
                label: `${sub.months} ${sub.months === 1 ? 'month' : 'months'}`
              }))}
            />
          </Grid.Col>

          <Grid.Col span={12}>
            <Grid gutter="lg" justify={"left"}>
              <Grid.Col span={6}>
                <PriceCard stripePrice={getPriceById(activeSub)}/>
              </Grid.Col>
              <Grid.Col span={6}>
                <PriceCard stripePrice={getPriceById(activeSub)}/>
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>

        
      </Container>
      {/* <Paper>
        {stripeSubscriptions.map((card) => {
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
      </Paper> */}
    </Box>
    
  );
};

export default Pricing;

//Using Next.js to fetch Stripe products
export async function getStaticProps() {
  const prices = await stripe.prices.list({
    active: true
  });

  // Using  Next.js to hoist pricing and product props to render on page
  const stripeSubscriptions = prices.data
    .filter((item) => item.type === 'recurring')
    .map((item) => {
      return {
        id: item.id,
        months: item.recurring.interval_count,
        amount: item.unit_amount / 100
      };
    })
    .sort((a, b) => a.months - b.months)

  return {
    props: {
      stripeSubscriptions
    }
  };
}
