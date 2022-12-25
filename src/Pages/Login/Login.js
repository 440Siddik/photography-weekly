import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginlogo from "../../assests/Mobile login-amico.png";
import { AuthContext } from "../../AuthProvider/AuthProviderContext";
const Login = () => {
  const { login, googleSignin, resetPassword } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    //login
    login(email, password).then((result) => {
      const user = result.user;
       navigate(from, { replace: true });
      // console.log(user);
    });
  };
  const handleGoogleSignIn = () => {
    googleSignin(googleProvider)
      .then((result) => {
        const user = result.user;
         navigate("/home");
        // console.log(user);
      })
      .catch((err) => console.log(err));
  };
  const handleResetPass = (email) => {
    resetPassword(email)
      .then(() => {})
      .catch((err) => console.log(err));
  }
  return (
    <div className="lg:flex w-full px-4 py-4 items-center">
      <div className="lg:w-1/2">
        <img src={loginlogo} className="w-full" alt="" />
      </div>
      <div className="lg:w-1/2 lg:ml-[170px] my-4">
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-amber-300">
          <h1 className="text-3xl font-bold text-center">Login</h1>
          <form
            onSubmit={handleLogin}
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-1 text-sm">
              <label
                htmlFor="username"
                className="block text-black font-semibold"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 focus:dark:border-violet-400 text-amber-500 font-semibold"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label
                htmlFor="password"
                className="block text-black font-semibold"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 text-amber-500 font-semibold focus:dark:border-violet-400"
              />
              {/* <div className="flex justify-end text-xs text-black underline font-semibold">
                <button onClick={handleResetPass} rel="noopener noreferrer">
                  Forgot Password?
                </button>
              </div> */}
            </div>
            <button className="block w-full p-3 text-center rounded-sm text-amber-500 font-bold bg-white">
              Sign in
            </button>
          </form>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            <p className="px-3 text-sm text-black font-semibold">
              Login with social account
            </p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          </div>
          <div className="flex justify-center space-x-4">
            <button
              onClick={handleGoogleSignIn}
              aria-label="Log in with Google"
              className="p-3 rounded-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
            </button>
          </div>
          <p className="text-xs text-center sm:px-6 text-black font-semibold">
            Don't have an account?
            <Link to="/signup" className="underline text-violet-600 font-bold">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
