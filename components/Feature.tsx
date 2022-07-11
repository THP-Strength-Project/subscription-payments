import { Grid } from '@mantine/core'
import { FC } from 'react'
import FeatureImage from './FeatureImage'
import FeatureText from './FeatureText'

const Feature: FC<{
  reverse: boolean
  feature: { image: string; body: string; title: string; titleWithColor: string }
}> = ({ feature, reverse }) => {
  return (
    <Grid align="center" justify="space-between" gutter={100}>
      <Grid.Col span={6} sx={{ order: reverse ? 2 : 1 }}>
        <FeatureImage image={feature.image} />
      </Grid.Col>
      <Grid.Col span={6} sx={{ order: reverse ? 1 : 2 }}>
        <FeatureText body={feature.body} title={feature.title} titleWithColor={feature.titleWithColor} />
      </Grid.Col>
    </Grid>
  )
}
export default Feature
