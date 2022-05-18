import { handleAuth } from '@supabase/supabase-auth-helpers/nextjs';

export default async (req, res) => {
  console.log('PROXY =>>>>>>>>>>');
  const result = await handleAuth({
    logout: { returnTo: '/signin' },
    cookieOptions: { lifetime: 1 * 365 * 24 * 60 * 60 } // Keep the user logged in for a year.
  })(req, res);

  console.log(result);

  return result;
};
