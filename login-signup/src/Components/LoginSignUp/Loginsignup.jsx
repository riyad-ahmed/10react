import React from 'react'

const Loginsignup = () => {
  return (
    <div id="login-form">
    <h1>Login</h1>
    <form>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" />
      <input type="submit" value="Submit" />
    </form>
  </div>
  )
}

export default Loginsignup

