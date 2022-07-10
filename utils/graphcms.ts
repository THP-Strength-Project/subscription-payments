export const imageLoader = ({ src, width }) => {
  const match = /^(https?:\/\/media.graphassets.com)(?:\/[^/]+)?\/([^/]+)$/.exec(src)

  if (!match) {
    throw new Error('Invalid GraphCMS asset URL')
  }

  const [prefix, handle] = match.slice(1)
  const resizedSrc = `${prefix}/resize=width:${width}/${handle}`

  return resizedSrc
}

async function fetchAPI(query, { variables }: { variables?: object; preview?: boolean }) {
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
  })

  const json = await res.json()

  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }

  return json.data
}

export async function getHomePage(preview = false) {
  const data = await fetchAPI(
    `
    query HomePageQuery($stage: Stage!, $id: ID!) {
      homePage(where: {id: $id}, stage: $stage) {
        title
        subTitle
        buttonLabel
        featuredImage {
          size
          url
          width
          height
        }
        featuredInTitle
        featuredInAssets {
          id
          size
          url
          width
          height
        }
        video {
          url
        }
        videoTitle
        testimonyTitle
        testimonySubtitle
        testimonials {
          id
          clientName
          clientTestimony
          url
          clientImage {
            size
            url
            width
            height
          }
        }
        featureSections {
          id
          badgeText
          buttonText
          image {
            url
            width
            height
          }
          title
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
  )
  return data.homePage
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
  )

  return data.accountPage
}

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
  )

  return data.signIn
}

export const getPricingPage = async (preview = false) => {
  const data = await fetchAPI(
    `query PricingPageQuery($id: ID!, $stage: Stage!) {
      pricing(where: {id: $id}, stage: $stage) {
        id
        pricingSubtitle
        pricingTitle
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
  )

  return data.pricing
}
