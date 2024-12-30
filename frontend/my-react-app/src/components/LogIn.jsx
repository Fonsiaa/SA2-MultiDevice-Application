import React from 'react';
import '../style/login.scss' 

export const Login = () => {
  return (
    <div className="row login_page"> 
    {/* the left side of the login page, includes questions and short tagline */}
        <div className="question column">
          <h1>Did You Enjoyed the Story?</h1>
          <p>Subscribe for more in the future!</p>
          <img src="" alt="" />
        </div>

        {/* the login form which is the right side of the login page has a input fields and sign button */}
        <div className="form">
          <div className="profile_pic">
            <img src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png" alt="profile icon" />
          </div>
          <div className="sign_up">
            Don't have an account? <a href="#">Sign Up</a>
          </div>
          <form action="" method="post">
            {/*The input fields for the username*/}
            <label for="login" className='login'>
              <input type="text" id="login" name="login" placeholder="Username" />
            </label>

            {/*The input fields for the password*/}
            <label for="pass" className='pass'>
              <input type="text" id="pass" placeholder="Password" />
            </label>

            <button className='btn' type="submit">Sign In</button>
          </form>

          {/*If the user has forgotten their password*/}
          <div className="forgot_pass">
            <a href="#">Forgot Password?</a>
          </div>
        </div>
    </div>
  );
};