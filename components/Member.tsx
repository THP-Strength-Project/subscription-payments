import { Grid } from '@mantine/core'
import { FC, useEffect } from 'react'
import { motion, useAnimation, Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import FeatureImage from './FeatureImage'
import FeatureText from './FeatureText'
import { GrpahCMSImage } from '@/utils/graphcms'
import { breakpoints } from '@/utils/breakpoints'

const imageVariants: Variants = {
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', bounce: 0.3 } },
    hidden: { opacity: 0, scale: 0.8, y: 20 }
}

const textVariants: Variants = {
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { delay: 0.2, type: 'spring', bounce: 0.3 }
    },
    hidden: { opacity: 0, scale: 0.8, y: 20 }
}

const Member: FC<{
    reverse: boolean
    member: { image: GrpahCMSImage; bio: string; name: string; email: string }
}> = ({ member, reverse }) => {
    console.log(member)
    const control = useAnimation()
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 })
    useEffect(() => {
        if (inView) {
            control.start('visible')
        } else {
            control.start('hidden')
        }
    }, [control, inView])

    return (
        <Grid align="center" justify="center" gutter={80}>
            <Grid.Col
                md={6}
                xs={12}
                sx={{ order: reverse ? 2 : 1, [breakpoints.phone]: { order: 1 }, [breakpoints.tablet]: { order: 1 } }}
            >
                <motion.div ref={ref} variants={imageVariants} initial="hidden" animate={control}>
                    <FeatureImage image={member.image} />
                </motion.div>
            </Grid.Col>
            <Grid.Col
                md={6}
                xs={12}
                sx={{ order: reverse ? 1 : 2, [breakpoints.phone]: { order: 2 }, [breakpoints.tablet]: { order: 2 } }}
            >
                <motion.div ref={ref} variants={textVariants} initial="hidden" animate={control}>
                    <FeatureText body={member.bio} title={member.name} coloredTitle={member.email} />[]
                </motion.div>
            </Grid.Col>
        </Grid>
    )
}
export default Member
