import React from 'react'

const Loginsignup = () => {
  return (
<div class="max-w-sm w-full mx-auto mt-12 bg-[#add8e6] rounded-lg shadow-lg font-poppins">
  <h1 class="text-center m-0 py-5 text-2xl font-bold text-white">Login</h1>
  <form class="p-5 bg-white rounded-lg">
    <label for="username" class="block mb-2 text-sm text-gray-500">Username:</label>
    <input type="text" id="username" name="username" class="w-full p-3 border border-gray-300 rounded-md text-base mb-5" />
    <label for="password" class="block mb-2 text-sm text-gray-500">Password:</label>
    <input type="password" id="password" name="password" class="w-full p-3 border border-gray-300 rounded-md text-base mb-5" />
    <input type="submit" value="Login" class="w-full p-3 bg-blue-500 border-none text-white text-base font-bold rounded-md cursor-pointer shadow-md transition duration-300 ease-in-out hover:bg-blue-400 hover:shadow-lg" />
  </form>
</div>
  )
}

export default Loginsignup

