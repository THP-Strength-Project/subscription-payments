import { useState } from 'react';
import { post } from '@/utils/api';
import { useRouter } from 'next/router';

const Reset = () => {
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { token } = router.query;

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await post('/claim', { password, token });
    router.push('/signin');
  };

  return (
    <div>
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
