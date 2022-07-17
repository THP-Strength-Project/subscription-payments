import { Dialog, Text } from '@mantine/core';

const ErrorMessage = ({ message, onClose }) => {
  return (
    <Dialog
      onClose={onClose}
      opened={!!message}
      p={18}
      withCloseButton
      sx={(theme) => ({
        backgroundColor: theme.colors.red[5],
        border: 0
      })}
      styles={{
        closeButton: {
          color: 'white',
          '&:hover': { backgroundColor: 'transparent' }
        }
      }}
    >
      <Text sx={{ fontSize: '1.2em', marginBottom: '1em', color: 'white' }}>
        Error
      </Text>
      <Text sx={{ fontSize: '1.5em', color: 'white' }}>{message}</Text>
    </Dialog>
  );
};

export default ErrorMessage;
