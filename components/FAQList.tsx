import { FC } from 'react';
import { Accordion } from '@mantine/core';

const FAQList: FC<{ items: { question: string; answer: string }[] }> = ({
  items = []
}) => {
  return (
    <Accordion
      iconPosition="right"
      iconSize={40}
      styles={{
        label: {
          fontSize: '1.5em',
          fontWeight: 'bold'
        },
        control: {
          backgroundColor: 'rgb(226, 231, 240)',
          padding: '1.8em',
          '&:hover': {
            backgroundColor: 'rgb(226, 231, 240)'
          }
        },
        item: {
          marginBottom: '1em',
          borderRadius: '1.2em',
          overflow: 'hidden'
        },
        content: {
          fontSize: '1.5em',
          lineHeight: '1.4em',
          backgroundColor: 'rgb(226, 231, 240)',
          padding: '0 .6em'
        }
      }}
    >
      {items.map((item) => (
        <Accordion.Item label={item.question} key={item.id || item.question}>
          {item.answer}
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default FAQList;
