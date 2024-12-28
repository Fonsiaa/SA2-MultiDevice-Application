import React from 'react';
import '../style/login.scss' 

export const Login = () => {
  return (
    <div className="login">
      <h2>Login</h2>
      <form>
        <label>Username:</label>
        <input type="text" />
        <br />
        <label>Password:</label>
        <input type="password" />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};