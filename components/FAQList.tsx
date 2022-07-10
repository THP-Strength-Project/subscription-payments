import { FC } from 'react'
import { Box, Title, Accordion } from '@mantine/core'

const FAQList: FC<{ items: { question: string; answer: string }[] }> = ({ items }) => {
  return (
    <Box>
      <Title order={3} align="center" sx={(theme) => ({ marginBottom: theme.spacing.xl * 2 })}>
        Frequently Asked Quetsions
      </Title>
      <Accordion
        iconPosition="right"
        iconSize={40}
        styles={{
          label: {
            fontSize: '2.5em'
          },
          content: {
            fontSize: '1.5em',
            lineHeight: '1.4em'
          }
        }}
      >
        {items.map((item) => (
          <Accordion.Item label={item.question} key={item.question}>
            {item.answer}
          </Accordion.Item>
        ))}
      </Accordion>
    </Box>
  )
}

export default FAQList
