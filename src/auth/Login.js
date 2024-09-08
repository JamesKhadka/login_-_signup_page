import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../fire';
import { signInWithPopup } from 'firebase/auth';
import { googleProvider } from '../fire';
//import { sendPasswordResetEmail } from '../fire';


const Login = ({ setAuthState, setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const [resetEmail, setResetEmail] = useState('');

  // Function to handle email and password sign-in
  const onClick = () => {
    if (email && password) {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          setUser(email);
          setAuthState('home');
        })
        .catch((err) => {
          alert('Please fill out with the correct credentials', err.message);
        });
    }
  };

  // Function to handle Google sign-in
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log('User signed in:', user);
      setUser(user.email); // You may want to set user details
      setAuthState('home');
    } catch (error) {
      console.error('Error signing in with Google:', error.message);
      alert('Error signing in with Google: ' + error.message);
    }
  };


  return (
    <div className="flex w-full h-screen bg-gradient-to-tr from-violet-500 to-pink-500">
      <div className="w-full flex items-center justify-center lg:w-1/2 ">
        <div className='w-11/12 max-w-[500px] bg-white px-10 py-10 rounded-3xl border-2 border-gray-200'>
          <h1 className="text-5xl font-bold text-cyan-500">Welcome Back</h1>
          <p className='font-medium text-gl text-gray-500 mt-4'>Welcome back! Please enter your details</p>

          <div className='mt-8'>
            <div>
              <label className='text-lg font-medium'>Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full border-2 border-cyan-300 rounded-xl p-4 mt-1 bg-transparent'
                placeholder='Enter your email'
              />
            </div>

            <div>
              <label className='text-lg font-medium'>Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='w-full border-2 border-cyan-400 rounded-xl p-4 mt-1 bg-transparent'
                placeholder='Enter your password'
                type="password"
              />
            </div>

            <div className='mt-8 flex justify-between items-center'>
              <div>
                <input className='cursor-pointer' type="checkbox" id='remember' />
                <label className='ml-2 font-medium cursor-pointer text-base' htmlFor="remember">Remember for 30 days!</label>
              </div>
              <div
                onClick={() => setAuthState('forgotPassword')}
                className='font-medium text-base cursor-pointer text-cyan-600'>Forgot Password</div>
            </div>

            <div className='mt-8 flex flex-col gap-y-4'>
              <button
                onClick={onClick}
                className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 bg-cyan-500 text-white text-lg rounded-xl font-bold'
              >
                Sign In
              </button>

              <button
                onClick={handleGoogleSignIn}
                className='flex py-3 border-2 border-cyan-200 rounded-xl items-center justify-center font-semibold gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out'
              >
                {/* Google SVG code */}
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
                className='text-cyan-500 text-base font-medium ml-2'
              >
                Sign UP
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-pink-200">
        <div className="w-80 h-80 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-bounce" />
        <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
      </div>
    </div>
  );
};

export default Login;
