import React, { FC } from 'react'
import { Box, Grid, Text } from '@mantine/core'
import Container from '@/components/Container'
import FAQList from '@/components/FAQList'
import Footer from '@/components/Footer'
import { getFaqPage } from '@/utils/graphcms'
import { breakpoints } from '@/utils/breakpoints'

const Faq: FC<{
  content: {
    faqs: { question: string; answer: string }[]
    title: string
    subtitle: string
  }
}> = ({ content }) => {
  return (
    <Box>
      <Container sx={{ minHeight: 'calc(100vh - 80px)' }}>
        <Grid justify="center" align="center" sx={{ width: '100%', textAlign: 'center' }}>
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
        </Grid>
        <Box mt={60} sx={(theme) => ({ paddingBottom: theme.spacing.xl * 3 })}>
          <FAQList items={content.faqs} />
        </Box>
      </Container>
      <Footer />
    </Box>
  )
}

export default Faq

//Using Next.js to fetch Stripe products
export async function getStaticProps() {
  const content = await getFaqPage()

  return {
    props: {
      content
    },
    revalidate: 10
  }
}
