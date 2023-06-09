import React from 'react'
import useAuth from '../../../hooks/useAuth'
import { Helmet } from 'react-helmet-async'

const UserHome = () => {
  const {user}=useAuth()
  return (
    <div>
      <Helmet>
        <title>Pranayama | Student Home</title>
      </Helmet>
      <h2 className='text-3xl'>Hi! Student <span className="text-purple-700">{user.displayName}</span></h2>
    </div>
  )
}

export default UserHome