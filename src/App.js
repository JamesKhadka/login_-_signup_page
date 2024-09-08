import * as React from 'react';
import Register from './auth/Register';
import Login from './auth/Login';
import ForgotPassword from './auth/ForgotPassword'; // Import the ForgotPassword component
import Home from './pages/Home';
import { auth } from './fire';
import { onAuthStateChanged } from 'firebase/auth';

const App = () => {
  const [user, setUser] = React.useState(null);
  const [authState, setAuthState] = React.useState(null);

  React.useEffect(() => {
    const unSuscribeAuth = onAuthStateChanged(auth, async (authenticatedUser) => {
      if (authenticatedUser) {
        // Authenticated user email
        setUser(authenticatedUser.email);
        // Redirect to home if email matches
        setAuthState('home');
      } else {
        // If user is not authenticated
        setUser(null);
        setAuthState('login');
      }
    });
    return unSuscribeAuth;
  }, [user]);

  if (authState === null) return <div className="font-bold text-center text-5xl">Loading....</div>;
  if (authState === 'login') return <Login setAuthState={setAuthState} setUser={setUser} />;
  if (authState === 'register') return <Register setAuthState={setAuthState} setUser={setUser} />;
  if (authState === 'forgotPassword') return <ForgotPassword setAuthState={setAuthState} />; // Render ForgotPassword

  if (user) return <Home user={user} setAuthState={setAuthState} setUser={setUser} />;
};

export default App;
