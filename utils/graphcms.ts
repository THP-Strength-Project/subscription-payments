export interface GrpahCMSImage {
  height?: number;
  width?: number;
  size?: number;
  url: string;
}

export interface MemberContent {
  id: string,
  name: string,
  bio: string,
  image: GrpahCMSImage[],
  instagramLink: string,
  facebookLink: string,
  twitterLink: string,
  linkedInLink: string,
  email: string,
}

export const imageLoader = ({ src, width, height }) => {
  const match =
    /^(https?:\/\/media.graphassets.com)(?:\/[^/]+)?\/([^/]+)$/.exec(src);

  if (!match) {
    throw new Error('Invalid GraphCMS asset URL');
  }

  const [prefix, handle] = match.slice(1);
  const resizedSrc = `${prefix}/resize=width:${width},height:${height}/${handle}`;

  return resizedSrc;
};

async function fetchAPI(
  query,
  { variables }: { variables?: object; preview?: boolean }
) {
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

export interface HomePageContent {
  featureSections: {
    id: string;
    body: string;
    coloredTitle: string;
    title: string;
    image: GrpahCMSImage;
  }[];
  logo: GrpahCMSImage;
  slug: string;
  title: string;
  testimonyTitle: string;
  testimonies: { id: string; name: string; quote: string }[];
  miniFeature: { body: string; id: string; buttonText: string };
}

export async function getHomePage(preview = false): Promise<HomePageContent> {
  const data = await fetchAPI(
    `
      query HomePageQuery($id: ID!, $stage: Stage!) {
        homePage(where: {id: $id}, stage: $stage) {
          miniFeature {
            body
            id
            buttonText
          }
          featureSections {
            ... on Feature {
              id
              body
              coloredTitle
              image {
                height
                url
                width
              }
              title
            }
          }
          logo {
            height
            size
            url
            width
          }
          slug
          title
          testimonyTitle
          testimonies {
            id
            name
            quote
          }
        }
      }
    `,
    {
      preview,
      variables: {
        stage: preview ? 'DRAFT' : 'PUBLISHED',
        id: 'cl5j103y3mi7h09mxza1a09v5'
      }
    }
  );
  return data.homePage as HomePageContent;
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

export const getSignPage = async (preview = false) => {
  const data = await fetchAPI(
    `
    query SignInQuery($stage: Stage!, $id: ID!) {
      signIn(where: {id: $id}, stage: $stage) {
        heroImage {
          width
          height
          size
          url
        }
        heroSubtitle
        logo {
          width
          height
          size
          url
        }
        signInSubtext
        signInText
        signUpSubtext
        signUpText
      }
    }
  
  `,
    {
      preview,
      variables: {
        stage: preview ? 'DRAFT' : 'PUBLISHED',
        id: 'cl4c0a2ulkoe90cmy6xyyck1o'
      }
    }
  );

  return data.signIn;
};

export const getPricingPage = async (preview = false) => {
  const data = await fetchAPI(
    `query PricingPageQuery($id: ID!, $stage: Stage!) {
      pricing(where: {id: $id}, stage: $stage) {
        id
        title: pricingSubtitle
        subtitle: pricingTitle
        faqs {
          id
          question
          answer
        }
        standardPlanFeatures {
          id
          featureName
        }
        customPlanFeatures {
          id
          featureName
        }
      }
    }
  
  `,
    {
      preview,
      variables: {
        stage: preview ? 'DRAFT' : 'PUBLISHED',
        id: 'cl4oj1twtcn5t09n1cdmq01dd'
      }
    }
  );

  return data.pricing;
};

export const getFaqPage = async (preview = false) => {
  const data = await fetchAPI(
    `query FaqPageQuery($id: ID!, $stage: Stage!) {
      faqPage(where: {id: $id}, stage: $stage) {
        id
        title
        subtitle
        faqs {
          id
          question
          answer
        }
      }
    }
  
  `,
    {
      preview,
      variables: {
        stage: preview ? 'DRAFT' : 'PUBLISHED',
        id: 'cl5o85oilrxy90cmuf07an1nj'
      }
    }
  );

  return data.faqPage;
};

export const getTeamPage = async (preview = false) => {
  const data = await fetchAPI(
    `query TeamPageQuery($id: ID!, $stage: Stage!) {
      teamPage(where: {id: $id}, stage: $stage) {
        callToAction {
          id
          title
          subtitle
          buttonText
        }
        subtitle
        teamMember {
          ... on TeamMember {
            id
            image {
              height
              url
              width
            }
            name
            instagramLink
            facebookLink
            linkedInLink
            twitterLink
            email
            bio
          }
        }
        title
      }
    }
  
  `,
    {
      preview,
      variables: {
        stage: preview ? 'DRAFT' : 'PUBLISHED',
        id: 'cl5onpumnzi790clpnrzcap1l'
      }
    }
  );

  return data.teamPage;
};