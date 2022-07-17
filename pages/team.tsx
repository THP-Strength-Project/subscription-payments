import { Box, Center, Image } from '@mantine/core'
import Container from '@/components/Container'
import HeroTitle from '@/components/HeroTitle'
import Feature from '@/components/Feature'
import Footer from '@/components/Footer'
import BottomCTA from '@/components/BottomCTA'
import { getHomePage, HomePageContent } from '@/utils/graphcms'
import { FC } from 'react'

const Home: FC<{ content: HomePageContent; preview: boolean }> = ({ content, preview }) => {
    return (
        <Box sx={{ paddingTop: '2em' }}>
            <Container>
                <Box component="section" sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ marginBottom: '10em' }}>
                            <HeroTitle text="Jump Higher Now" duration={0.5} />
                        </Box>
                    </Box>
                </Box>
                <Box component="section" mt="10em">
                    {content.featureSections.map((feature, i) => (
                        <Box my="10em">
                            <Feature feature={feature} reverse={i % 2 === 1 ? true : false} />
                        </Box>
                    ))}
                </Box>
            </Container>
            <Box>
                <BottomCTA />
                <Footer />
            </Box>
        </Box>
    )
}

export default Home
export async function getStaticProps({ preview = false }) {
    const page = await getHomePage(preview)

    return {
        props: {
            content: page,
            preview
        },

        revalidate: 10
    }
}
