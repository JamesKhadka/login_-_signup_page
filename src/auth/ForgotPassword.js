import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth'; // Import sendPasswordResetEmail
import { auth } from '../fire'; // Import auth instance
//import babyImage from '../assects/baby.png';

const ForgotPassword = ({ setAuthState }) => {
  const [email, setEmail] = useState(''); // State to handle the email input
  const [message, setMessage] = useState(''); // State to handle success/error messages

  // Function to handle sending the password reset email
  const handlePasswordReset = async () => {
    if (email) {
      try {
        await sendPasswordResetEmail(auth, email);
        setMessage('Password reset email sent successfully check your mail!!');
      } catch (error) {
        setMessage('Error: ' + error.message);
      }
    } else {
      setMessage('Please enter your email address');
    }
  };

  return (
    <div

      className="flex w-full h-screen bg-gradient-to-tr from-violet-500 to-pink-500">
      <div className="w-full flex items-center justify-center lg:w-1/2 ">
        <div className='w-11/12 max-w-[500px] bg-white px-10 py-10 rounded-3xl border-2 border-gray-200 '>
          <h1 className="text-4xl font-bold text-cyan-500">Reset Password</h1>
          <p className='font-medium text-lg text-gray-500 mt-4'>Enter your email to receive password reset instructions</p>

          <div className='mt-8'>
            <div>
              <label className='text-lg font-medium'>Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full border-2 border-cyan-300 rounded-xl p-4 mt-1 bg-transparent'
                placeholder='Enter your email'
                type="email" />
            </div>

            <div className='mt-8'>
              <button
                onClick={handlePasswordReset}
                className='w-full py-3 bg-cyan-500 text-white text-lg rounded-xl font-bold transition-all hover:scale-[1.01]'> Reset Password
              </button>
            </div>

            {message && (
              <p className='mt-4 text-center font-medium text-green-700'>{message}</p>
            )}

            <div className='mt-8 flex justify-center items-center'>
              <button
                onClick={() => setAuthState('login')} // Back to login
                className='text-cyan-500 text-base font-medium' > Back to Login
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gradient-to-tr from-violet-500 to-pink-500">

        <div className="w-80 h-80 bg-gradient-to-tr from-cyan-800 to-pink-500, to-black rounded-full animate-bounce" />
        {/* <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" /> */}
      </div>
    </div>
  );
};

export default ForgotPassword;
