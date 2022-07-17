import { useState } from 'react';
import { post } from '@/utils/api';
import { useRouter } from 'next/router';
import ErrorMessage from '@/components/ErrorMessage';

const Reset = () => {
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { token } = router.query;

  const [errorMessage, setError] = useState('');

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await post('/claim', { password, token });
    if (data.error) {
      // Do something with the message
      setError(data.message);
      return;
    }

    router.push('/signin');
  };

  return (
    <div>
      <ErrorMessage
        message={errorMessage}
        onClose={() => {
          setError('');
        }}
      />
      <form onSubmit={handleSubmit}>
        <input
          value={password}
          onChange={handleChange}
          type="password"
          placeholder="new password"
        />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default Reset;
