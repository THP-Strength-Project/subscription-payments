import { useState } from 'react';
import { post } from '@/utils/api';
import ErrorMessage from '@/components/ErrorMessage';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const [errorMessage, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await post('/reset', { email });
    if (data.error) {
      // Do something with the message
      setError(data.message);
      return;
    }
    setDone(true);
  };

  return (
    <div>
      <ErrorMessage
        message={errorMessage}
        onClose={() => {
          setError('');
        }}
      />
      {done ? (
        <div>
          <h2>If this is a valid email, check your inbox for a reset link</h2>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            placeholder="email"
            onChange={handleEmail}
          />
          <button type="submit">submit</button>
        </form>
      )}
    </div>
  );
};

export default ForgotPassword;
