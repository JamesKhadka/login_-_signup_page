import React from 'react'

const Form = ({ setAuthState, setUser }) => {
  return (
    <div className=' w-11/12 max-w-[700px] bg-white px-10 py-20 rounded-3xl border-2 border-gray-200'>

      <h1 className="text-5xl font-bold text-cyan-500">Welcome Back</h1>

      <p className='font-medium text-gl text-gray-500 mt-4'>Welcome back! please enter your details</p>

      <div className='mt-8 '>
        <div>
          <label className='text-lg font-medium'>Email</label>
          <input className='w-full border-2 border-cyan-300 rounded-xl p-4 mt-1 bg-transparent' placeholder='Enter your email' />
        </div>

        <div>
          <label className='text-lg font-medium'>Password</label>
          <input className='w-full border-2 border-cyan-400 rounded-xl p-4 mt-1 bg-transparent' placeholder='Enter your password' />
        </div>

        <div className='mt-8 flex justify-between items-center'>
          <div>
            <input type="checkbox" />
            <label className='ml-2 font-medium text-base' htmlFor="remember">Remember for 30 days!!</label>
          </div>
          <div className='font-medium text-base text-cyan-600'>Forgot Password</div>
        </div>

        <div className='mt-8 flex flex-col gap-y-4 '>

          <button className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 bg-cyan-500 text-white text-lg rounded-xl font-bold'>Sign In</button>

          <button className='flex py-3 border-2 border-cyan-200 rounded-xl items-center justify-center font-semibold gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out'>

            {/* google svg code */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="45" height="45">
              <path fill="#4285F4" d="M44.5 20H24v8.5h11.9C34.4 33.3 30 36.5 24 36.5c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.6 1.1 7.6 2.9l5.9-5.9C33.8 6 29.2 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c10.3 0 19.4-7.5 19.4-20 0-1.3-.1-2.7-.3-4z" />
              <path fill="#34A853" d="M6.3 14.7l6.6 4.8C14.4 16.3 18.9 13.5 24 13.5c3 0 5.6 1.1 7.6 2.9l5.9-5.9C33.8 6 29.2 4 24 4c-7.6 0-14.2 4.3-17.7 10.7z" />
              <path fill="#FBBC05" d="M24 44c5.3 0 9.9-1.7 13.5-4.6l-6.2-4.9c-2.1 1.4-4.7 2.2-7.4 2.2-5.9 0-10.9-3.8-12.7-9.1l-6.6 5.1C9.5 39.6 16.2 44 24 44z" />
              <path fill="#EA4335" d="M44.5 20H24v8.5h11.9c-.8 2.5-2.3 4.6-4.3 6.1l6.2 4.9C40.7 36.3 44 30.7 44 24c0-1.3-.1-2.7-.3-4z" />
            </svg>

            Sign in with Google
          </button>

        </div>
        <div className='mt-8 flex justify-center items-center'>
          <p className='font-medium text-base'>Don't have an account?</p>
          <button
            onClick={() => setAuthState('register')}
            className='text-cyan-500 text-base font-medium ml-2 '>Sign UP</button>
        </div>


      </div>
    </div>
  )
}

export default Form
