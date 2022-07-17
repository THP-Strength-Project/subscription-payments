import { Box, Center, Image } from '@mantine/core'
import Container from '@/components/Container'
import HeroTitle from '@/components/HeroTitle'
import Footer from '@/components/Footer'
import BottomCTA from '@/components/BottomCTA'
import { getTeamPage } from '@/utils/graphcms'
import { FC } from 'react'
import Member from '@/components/Member'

const Team: FC<{ content; preview: boolean }> = ({ content, preview }) => {
    return (
        <Box sx={{ paddingTop: '2em' }}>
            <Container>
                <Box component="section" sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ marginBottom: '10em' }}>
                            <HeroTitle text={content.title} duration={0.5} />
                        </Box>
                    </Box>
                </Box>
                <Box component="section" mt="10em">
                    {content.teamMember.map((member, i) => (
                        <Box key={member.name} my="10em">
                            <Member member={member} reverse={i % 2 === 1 ? true : false} />
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

export default Team
export async function getStaticProps({ preview = false }) {
    const page = await getTeamPage(preview)
    return {
        props: {
            content: page,
            preview
        },

        revalidate: 10
    }
}
