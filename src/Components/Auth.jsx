import React, { useState } from 'react';
import { auth, googleProvider } from '../Config/Firebase';
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';


function Auth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");
    const signin = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };
  console.log(auth?.currentUser?.email )

    const signInWithGoogle = async () => {
      try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };
  
  const Logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };
  
  return (
    <div>
      <input
        placeholder="Email..."
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Password..."
        type='password'
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type='submit' onClick={signin}>Sign In</button>
      
      <button onClick={signInWithGoogle}>Sign In with google</button>

      <button onClick={Logout}>Logout</button>
    </div>
  );
}

export default Auth;

