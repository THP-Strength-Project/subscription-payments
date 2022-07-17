import { getURL } from './helpers'

const API_URL = getURL() + '/api'

export const post = async (url, body) => {
  const res = await fetch(`${API_URL}${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })

  if (!res.ok) {
    const data = await res.json()
    return {
      error: true,
      message: data.error
    }
  }

  const data = await res.json()
  return data
}

export const get = async (url) => {
  const res = await fetch(`${API_URL}${url}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if (!res.ok) {
    const data = await res.json()
    return {
      error: true,
      message: data.error
    }
  }

  const data = await res.json()
  return data
}
