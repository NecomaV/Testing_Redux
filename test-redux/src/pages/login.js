import React from 'react';
import { useDispatch } from 'react-redux';
import { userLogin } from '../features/user'


function Login() {
  
  const dispatch = useDispatch({})

  return (
    <div className='w-1/2 flex justify-center'>
      <button className='bg-sky-600 w-40 h-20 mt-8 rounded-xl text-white text-3xl' 
      onClick={() => {
        dispatch(userLogin( 
          {
            name: 'Tim', 
            age: 21, 
            email: 'beken20025@gmail.com'
          }
          ))
      }}>
        Login
      </button>
    </div>
  );
}

export default Login;