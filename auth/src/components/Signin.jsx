import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import firebaseConfig from '../firebaseConfig';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function Signin() {

  const auth = getAuth();
  const navigate = useNavigate();

  


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState({allError: '' , email: '', password: '', passwordLength: ''});




  const handleSubmit = (event) => {
    event.preventDefault();

    let errors = {};

    if (!email && !password) {
      errors.allError = 'All fields are required';
    }

    if (!email) {
      errors.email = 'Enter your email';
    }

    if (!password) {
      errors.password = 'Enter your password';
    } else if (password.length < 6) {
      errors.passwordLength = 'Password must be at least 6 characters long';
    }

    if (Object.keys(errors).length > 0) {
      setErr(errors);
    } else {
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        setErr({ allError: '', name: '', email: '', password: '', passwordLength: '' });
        navigate("/");
        
      })
      .catch((error) => {
        console.log(error.code);
        if (error.code == "auth/invalid-credential" ){
          setErr({ password: 'The password is wrong'});
        }
      });
    }
  };


  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign In</h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
              <div className="mt-2">
                <input onChange={(e)=> setEmail(e.target.value)} id="email" name="email" type="email" autoComplete="email"  className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
              {err.email && <p className="text-red-600 !mt-0">{err.email}</p>}
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
              </div>
                  <div className="mt-2">
                      <input onChange={(e)=> setPassword(e.target.value)} id="password" name="password" type="password" autoComplete="current-password"  className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
              </div>
              {err.password && <p className="text-red-600 !mt-0">{err.password}</p>}
              {err.passwordLength && <p className="text-red-600 !mt-0">{err.passwordLength}</p>}
              {err.allError && <p className="text-red-600 !mt-0">{err.allError}</p>}
            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 p-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign UP</button>
            </div>
            <div>
              <Link to="/SignUp">Already have don't account? Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signin