import React from 'react'
import { BACKGROUND_IMG } from '../utils/constants'

const Login = () => {
  return (
    <div>
        <div className='absolute  inset-0 z-0'>
            <img
                className='absolute z-0 w-full object-cover h-full opacity-80 '
                src={BACKGROUND_IMG}
                alt=' background image '
            />
            <div className='absolute inset-0 z-10 bg-gradient-to-b from-black/50 via-black/30 to-black'></div>
            <div className='absolute inset-0  z-10 bg-gradient-to-r from-black/50 via-transparent to-black'></div>
        </div>
    </div>
  )
}

export default Login