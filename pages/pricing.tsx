import React, { FC, useState } from 'react';
import { stripe } from '@/utils/stripe';
import { Box, Grid, Text, Select } from '@mantine/core';
import Container from '@/components/Container';
import PriceCard from '@/components/PriceCard';
import FAQList from '@/components/FAQList';
import Footer from '@/components/Footer';
import { getPricingPage } from '@/utils/graphcms';
import { breakpoints } from '@/utils/breakpoints';
import CustomePriceCard from '@/components/CustomPriceCard';

const Pricing: FC<{
  content: {
    faqs: { question: string; answer: string }[];
    standardPlanFeatures: { featureName: string; id: string }[];
    customPlanFeatures: { featureName: string; id: string }[];
    title: string;
    subtitle: string;
  };
  stripeSubscriptions: { id: string; months: number; amount: number }[];
}> = ({ stripeSubscriptions, content }) => {
  const [activeSub, setSub] = useState(stripeSubscriptions[0].id);

  const handleChange = (value) => {
    setSub(value);
  };

  const getPriceById = (id) => stripeSubscriptions.find((sub) => sub.id === id);

  return (
    <Box>
      <Container>
        <Grid
          justify="center"
          align="center"
          sx={{ width: '100%', textAlign: 'center' }}
        >
          <Grid.Col span={9} py={40}>
            <Text
              sx={{
                fontSize: '3.5em',
                [breakpoints.phone]: {
                  fontSize: '2.3em'
                }
              }}
            >
              {content.title}
            </Text>
          </Grid.Col>
          <Grid.Col span={9}>
            <Text
              sx={(theme) => ({
                fontSize: '1.5em',
                color: theme.colors.gray[6]
              })}
            >
              {content.subtitle}
            </Text>
          </Grid.Col>

          <Grid.Col
            sx={{
              maxWidth: '40%',
              [breakpoints.phone]: {
                maxWidth: '100%'
              },
              marginTop: 40,
              marginBottom: 40
            }}
          >
            <Select
              size="lg"
              shadow="sm"
              placeholder="Pick one"
              transition="scale-y"
              transitionDuration={300}
              value={activeSub}
              onChange={handleChange}
              data={stripeSubscriptions.map((sub) => ({
                value: sub.id,
                label: `${sub.months} ${sub.months === 1 ? 'month' : 'months'}`
              }))}
            />
          </Grid.Col>

          <Grid.Col span={12}>
            <Grid
              gutter="lg"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                [breakpoints.phone]: {
                  flexDirection: 'column',
                  alignItems: 'center'
                }
              }}
            >
              <Grid.Col
                sx={{
                  maxWidth: '40%',
                  [breakpoints.phone]: {
                    maxWidth: '100%'
                  }
                }}
              >
                <PriceCard
                  stripePrice={getPriceById(activeSub)}
                  badge="Most Popular"
                  badgeColor="green"
                  buttonText="Select Package"
                  features={content.standardPlanFeatures}
                />
              </Grid.Col>
              <Grid.Col
                sx={{
                  maxWidth: '40%',
                  [breakpoints.phone]: {
                    maxWidth: '100%'
                  }
                }}
              >
                <CustomePriceCard
                  buttonText="Contact Us"
                  badge="Custom"
                  badgeColor="blue"
                  features={[
                    ...content.standardPlanFeatures,
                    ...content.customPlanFeatures
                  ]}
                />
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>
        <Box mt={60} sx={(theme) => ({ paddingBottom: theme.spacing.xl * 3 })}>
          <FAQList items={content.faqs} />
        </Box>
      </Container>
      <Footer />
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
    .sort((a, b) => a.months - b.months);

  const content = await getPricingPage();
  return {
    props: {
      stripeSubscriptions,
      content
    },
    revalidate: 10
  };
}
