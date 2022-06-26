import { post, get } from './api'

export const getPortalUrl = async () => {
  const data = await get('/create-portal-link')
  return data
}

export const getCheckoutUrl = async (priceId) => {
  const data = await post('/create-checkout-session', { price: priceId })
  return data
}

export const goToCheckout = async (priceId) => {
  const data = await getCheckoutUrl(priceId)
  location.href = data.url
}
