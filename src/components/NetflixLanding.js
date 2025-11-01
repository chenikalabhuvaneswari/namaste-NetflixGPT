import React, { useState } from 'react'
import { BACKGROUND_IMG, NETFLIX_URL } from '../utils/constants';

const NetflixLanding = () => {
    const [email , setEmail] = useState("")
    const handleSubmit = () =>{
        if(email)  {
            alert(`Email submitted: ${email}`)
        }
    }
  return (
    <div className='bg-black text-white'>
        <div className='relative z-0  min-h-screen overflow-hidden'>
            {/** backaground effect  */}
            <div className='absolute  inset-0 z-0'>
                <img
                    className='absolute z-0 w-full object-cover h-full opacity-80 '
                    src={BACKGROUND_IMG}
                    alt=' background image '
                />
                <div className='absolute inset-0 z-10 bg-gradient-to-b from-black/50 via-black/30 to-black'></div>
                <div className='absolute inset-0  z-10 bg-gradient-to-r from-black/50 via-transparent to-black'></div>
            </div>
            {/**header  */}
            <div className='relative z-0 flex w-full justify-between items-center'>
                <img
                    className='w-40 p-2'
                    alt='{NETFLIX_URL'
                    src={NETFLIX_URL}
                />
                <div className='flex gap-10 text-lg p-2 m-2 '>
                    <button className=' px-3 py-1 border border-gray-400 rounded backdrop-blur-sm  bg-black/20 transition hover:border-white-100'>
                      🌐 English
                    </button>
                    <button className='mr-6 px-2 bg-red-700 rounded'>
                        Sign In
                    </button>
                </div>
            </div>
            {/** content  */}
            <div className='relative z-20 flex flex-col items-center justify-center text-center min-h-[calc(100vh-80px)]'>
                <h1 className='font-bold text-5xl mb-6 leading-tight'>
                    Unlimited movies, shows, and more
                </h1>
                <p className='mb-4 text-xl'>
                    Starts at ₹149. Cancel at any time.
                </p>
                <p className='text-lg  mb-6'>
                    Ready to watch? Enter your email to create or restart your membership.
                </p>
                 {/** input  */}
                <div className="flex flex-row gap-3 w-full max-w-2xl">
                    <input
                        type="email"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 px-6 py-4 bg-black/70 border border-gray-500 rounded text-white placeholder-gray-400 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
                    />  
                    <button
                        onClick={handleSubmit}
                        className="px-8 py-4 bg-red-600 rounded text-xl font-semibold hover:bg-red-700 transition flex items-center justify-center gap-2 whitespace-nowrap"     
                    >
                        Get Started
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        
                    </button>
                </div>
            </div>
            

        </div>
    </div>
  )
};

export default NetflixLanding;