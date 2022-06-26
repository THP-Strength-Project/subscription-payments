export const imageLoader = ({ src, width }) => {
  const match = /^(https?:\/\/media.graphassets.com)(?:\/[^\/]+)?\/([^\/]+)$/.exec(src)

  if (!match) {
    throw new Error('Invalid GraphCMS asset URL')
  }

  const [prefix, handle] = match.slice(1)
  const resizedSrc = `${prefix}/resize=width:${width}/${handle}`

  return resizedSrc
}

async function fetchAPI(query, { variables, preview } = {}) {
  const API_KEY = preview ? process.env.GRAPHCMS_DEV_AUTH_TOKEN : process.env.GRAPHCMS_PROD_AUTH_TOKEN

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
    query MyQuery($stage: Stage!, $id: ID!) {
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
        footer {
          logo {
            logoImage {
              url
              width
              size
            }
          }
          linksApi {
            link
            linkLabel
          }
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
        footer {
          linksApi {
            link
            linkLabel
          }
          logo {
            logoText
            logoImage {
              height
              size
              url
              width
            }
          }
        }
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
    `
    query pricing($id: ID!) {
      values: pricing(where: {id: $id}, stage: DRAFT) {
        
        customFeatureSections(first: 500) {
          id
          stage
         
          title
          
        }
        id
        pricingSubtitle
        pricingTitle
       
        standardFeatures(first: 500) {
          id
          stage
          updatedAt
          title
          documentInStages(includeCurrent: true) {
            id
            stage
            updatedAt
            publishedAt
          }
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
