async function fetchAPI(query, { variables, preview } = {}) {
  const API_KEY = preview
    ? process.env.GRAPHCMS_DEV_AUTH_TOKEN
    : process.env.GRAPHCMS_PROD_AUTH_TOKEN;

  const res = await fetch(process.env.GRAPHCMS_PROJECT_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
      // Authorization: `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      query,
      variables
    })
  });

  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

export async function getHomePage(preview = false) {
  const data = await fetchAPI(
    `
    query MyQuery($stage: Stage!, $id: ID!) {
      homePage(where: {id: $id}, stage: $stage) {
        title
        subTitle
        buttonLabel
        featuredImage {
          size
          url
          width
        }
      }
    }`,
    {
      preview,
      variables: {
        stage: preview ? 'DRAFT' : 'PUBLISHED',
        id: 'cl37ua45h8ial0bn6d2pp18nn'
      }
    }
  );
  return data.homePage;
}

export const getAccountPage = async (preview = false) => {
  const data = await fetchAPI(
    `
  query AccountPageQuery($stage: Stage!, $id: ID!) {
    accountPage(where: {id: $id}, stage: $stage) {
      logo {
        logoText
        logoImage {
          url
        }
      }
    }
  }
  
  `,
    {
      preview,
      variables: {
        stage: preview ? 'DRAFT' : 'PUBLISHED',
        id: 'cl3kv0yw87pfw0cn1t34crl6x'
      }
    }
  );

  return data.accountPage;
};
