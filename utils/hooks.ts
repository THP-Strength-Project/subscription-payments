import { useEffect, useRef, useState } from 'react'
import Cookies from 'js-cookie'

// Naive implementation - in reality would want to attach
// a window or resize listener. Also use state/layoutEffect instead of ref/effect
// if this is important to know on initial client render.
// It would be safer to  return null for unmeasured states.
export const useDimensions = (ref) => {
  const dimensions = useRef({ width: 0, height: 0 })

  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth
    dimensions.current.height = ref.current.offsetHeight
  }, [])

  return dimensions.current
}

export const useAuth = () => {
  const cookieName: string = process.env.NEXT_PUBLIC_COOKIE_NAME

  console.log(cookieName, Cookies.get(cookieName))
  const setAuth = (jwt: string) => {
    Cookies.set(cookieName, jwt)
  }

  const signout = () => {
    Cookies.remove(cookieName)
  }

  const isSignedIn = () => {
    const cookie = Cookies.get(cookieName)

    console.log('cookie', cookie, cookieName)

    if (cookie) {
      return true
    }

    return false
  }

  return { isSignedIn, setAuth, signout }
}
