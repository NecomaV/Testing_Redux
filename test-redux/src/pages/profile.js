import React from 'react'
import { useSelector } from 'react-redux'

function Profile() {

  const user = useSelector((state) => state.user.value)

  return (
    <div className='flex flex-col justify-center items-center w-1/2 p-10 rounded-xl text-white bg-sky-600 gap-3 font-semibold text-3xl'>
        <h1 className=' bg-sky-900 w-1/3 p-4 flex justify-center rounded-xl'>Profile Page </h1>
        <p className='w-78'>Name : {user.name} </p>
        <p className='w-78'>Age : {user.age} </p>
        <p className='w-78'>Email : {user.email}</p>
    </div>
  )
}

export default Profile