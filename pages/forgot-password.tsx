import { useState } from 'react'
import { post } from '@/utils/api'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await post('/reset', { email })
    setDone(true)
  }

  return (
    <div>
      {done ? (
        <div>
          <h2>If this is a valid email, check your inbox for a reset link</h2>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input type="email" value={email} placeholder="email" onChange={handleEmail} />
          <button type="submit">submit</button>
        </form>
      )}
    </div>
  )
}

export default ForgotPassword
