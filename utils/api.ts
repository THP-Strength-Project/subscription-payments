const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const post = async (url, body) => {
  const res = await fetch(`${API_URL}${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  if (!res.ok) {
    throw new Error('Network response was not OK');
  }

  const data = await res.json();
  return data;
};

export const get = async (url) => {
  const res = await fetch(`${API_URL}${url}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (!res.ok) {
    throw new Error('Network response was not OK');
  }

  const data = await res.json();
  return data;
};
