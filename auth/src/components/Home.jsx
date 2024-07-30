import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import UserProfile from '../UserProfile';
import { useState } from 'react';

function Home() {

    const auth = getAuth();
    const navigate = useNavigate();
    
    console.log(auth.currentUser);

    const handleLogOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/signin");
          }).catch((error) => {
            // An error happened.
            console.log(error.code);
          });
    }

    const handleSignUp = () => {
        navigate("/signup");
    }

    const handleSignIn = () => {
        navigate("/signin");
    }

    
  return (
      <div>
        <div className="header flex justify-between">
            <div class="p-6 md:flex " id="menu">
                <nav>
                <ul class="md:flex items-center justify-between text-base text-blue-600 pt-4 md:pt-0">
                    <li><a class="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" href="#">Home</a></li>
                    <li><a class="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" href="#">Products</a></li>
                    <li><a class="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" href="#">About</a></li>
                </ul>
                </nav>
            </div>
            
            <div class="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4" id="nav-content">
                <div class="auth flex items-center w-full md:w-full">
                            {auth.currentUser ? (
                    <button onClick={handleLogOut} className="bg-transparent text-gray-800  p-2 rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700">Log Out</button>
                ) : (
                    <>
                <button onClick={handleSignIn} class="bg-transparent text-gray-800  p-2 rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700">Sign in</button>
                <button onClick={handleSignUp} class="bg-blue-600 text-gray-200  p-2 rounded  hover:bg-blue-500 hover:text-gray-100">Sign up</button>
                    </>
                    )}
                </div>
            </div>
        </div>
        <div class="relative bg-gray-200 py-20">
            <div class="max-w-3xl mx-auto text-center mb-8">
                <h1 class="text-4xl font-bold text-gray-900">Welcome to Our Platform</h1>
                <p class="mt-4 text-lg text-gray-600">Discover endless possibilities with us.</p>
            </div>
            <div class="absolute inset-x-0 bottom-0 transform translate-y-1/2">
                <img src="https://images.unsplash.com/photo-1716691731823-5f382e879e82?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Overlapping Image" class="mx-auto rounded-full w-48 h-48"/>
            </div>
        </div>
        <main>
      </main>
    </div>
  )
}

export default Home