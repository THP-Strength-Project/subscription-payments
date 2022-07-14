import React, { FC, useState } from 'react';
import { stripe } from '@/utils/stripe';
import { Box, Grid, Text, Select, Center } from '@mantine/core';
import Container from '@/components/Container';
import PriceCard from '@/components/PriceCard';
import FAQList from '@/components/FAQList';
import Footer from '@/components/Footer';
import PriceBox from '@/components/PriceBox';
import HeroTitle from '@/components/HeroTitle';
import { getPricingPage } from '@/utils/graphcms';

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
    //   <Box>
    //     <Container>
    //       <Grid
    //         justify="center"
    //         align="center"
    //         sx={{ width: '100%', textAlign: 'center' }}
    //       >
    //         <Grid.Col span={9} py={40}>
    //           <Text sx={{ fontSize: '3.5em' }}>{content.title}</Text>
    //         </Grid.Col>
    //         <Grid.Col span={9}>
    //           <Text
    //             sx={(theme) => ({
    //               fontSize: '1.5em',
    //               color: theme.colors.gray[6]
    //             })}
    //           >
    //             {content.subtitle}
    //           </Text>
    //         </Grid.Col>

    //         <Grid.Col span={4} sx={{ marginTop: 40, marginBottom: 40 }}>
    //           <Select
    //             size="lg"
    //             shadow="sm"
    //             placeholder="Pick one"
    //             transition="scale-y"
    //             transitionDuration={300}
    //             value={activeSub}
    //             onChange={handleChange}
    //             data={stripeSubscriptions.map((sub) => ({
    //               value: sub.id,
    //               label: `${sub.months} ${sub.months === 1 ? 'month' : 'months'}`
    //             }))}
    //           />
    //         </Grid.Col>

    //         <Grid.Col span={12}>
    //           <Grid gutter="lg" justify="center">
    //             <Grid.Col span={4}>
    //               <PriceCard
    //                 stripePrice={getPriceById(activeSub)}
    //                 badge="Most Popular"
    //                 badgeColor="green"
    //                 buttonText="Select Package"
    //                 features={content.standardPlanFeatures}
    //               />
    //             </Grid.Col>
    //             <Grid.Col span={4}>
    //               <PriceCard
    //                 buttonText="Contact Us"
    //                 stripePrice={getPriceById(activeSub)}
    //                 badge="Custom"
    //                 badgeColor="blue"
    //                 features={[
    //                   ...content.standardPlanFeatures,
    //                   ...content.customPlanFeatures
    //                 ]}
    //               />
    //             </Grid.Col>
    //           </Grid>
    //         </Grid.Col>
    //       </Grid>
    //       <Box mt={60} sx={(theme) => ({ paddingBottom: theme.spacing.xl * 3 })}>
    //         <FAQList items={content.faqs} />
    //       </Box>
    <Box>
      <Box pt="2em">
        <Container>
          <HeroTitle order={3} size={4} duration={0.01} text="Pricing" />
          <Box mt="4em" mb="3.5em">
            <Center>
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
                  label: `${sub.months} ${
                    sub.months === 1 ? 'month' : 'months'
                  }`
                }))}
              />
            </Center>
          </Box>
          <Grid
            justify="center"
            align="center"
            sx={{ width: '100%', textAlign: 'center' }}
          >
            <Grid.Col span={4} py={40}>
              <PriceBox />
            </Grid.Col>
            <Grid.Col span={4} py={40}>
              <PriceBox gradient={true} name="Custom" />
            </Grid.Col>
          </Grid>
        </Container>
      </Box>
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
    }
  };
}
