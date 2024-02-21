import axios from 'axios';
import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext.js';
import { useNavigate } from 'react-router-dom';
import logo from '../../images/logo/digi-dairy.png';
const Login = () => {
  const [inputs, setInputs] = useState({});
  const [loginStatus, setLoginStatus] = useState('');
  const { user, isLoggedIn, setUser, setIsLoggedIn } = useAuth();
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const navigate = useNavigate();
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoginStatus('Logging in...');

    try {
      const response = await axios.post(
        'http://localhost/digi-dairy-apis/v1/login',
        inputs
      );
      console.log(response.data.token);
      localStorage.setItem('token', response.data.token);
      console.log(response.data.user.user_type);
      setIsLoggedIn(true);
      setLoginStatus('Welcome to Fahari Agritech');
      setUser({
        Email: response.data.user.email,
        UserType: response.data.user.user_type,
      });
      navigate('/dashboards');
      setInputs({});
    } catch (error) {
      console.log(error);
      setLoginStatus('Authentication failed');
    }
  };

  return (
    <>
      <div className=" h-screen bg-white p-4 dark:bg-app2">
        {/* <!-- Sign In Form --> */}
        <div className=" rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark md:m-20">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className=" flex justify-center font-bold italic text-success dark:text-white">
              Welcome to Fahari Agritech
            </h3>
          </div>
          <form
            action="#"
            onSubmit={(event) => {
              handleFormSubmit(event);
            }}
          >
            <div className="p-6.5">
              {loginStatus && loginStatus !== 'Authentication failed' && (
                <p className=" rounded-md bg-success p-3 text-white">
                  {loginStatus}
                </p>
              )}{' '}
              {/* Display login status message */}
              {loginStatus && loginStatus === 'Authentication failed' && (
                <p className=" rounded-md bg-danger p-3 text-white">
                  {loginStatus}
                </p>
              )}{' '}
              {/* Display login status message */}
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Email
                </label>
                <input
                  onChange={handleChange}
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email address"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
              <div>
                <label className="mb-2.5 block text-black dark:text-white">
                  Password
                </label>
                <input
                  onChange={handleChange}
                  type="password"
                  required
                  name="user_password"
                  placeholder="Enter password"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
              <div className="mt-5 mb-5.5 flex items-center justify-between">
                <label htmlFor="formCheckbox" className="flex cursor-pointer">
                  <div className="relative pt-0.5">
                    <input
                      type="checkbox"
                      id="formCheckbox"
                      className="taskCheckbox sr-only"
                    />
                    <div className="box mr-3 flex h-5 w-5 items-center justify-center rounded border border-stroke dark:border-strokedark">
                      <span className="text-white opacity-0">
                        <svg
                          className="fill-current"
                          width="10"
                          height="7"
                          viewBox="0 0 10 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.70685 0.292804C9.89455 0.480344 10 0.734667 10 0.999847C10 1.26503 9.89455 1.51935 9.70685 1.70689L4.70059 6.7072C4.51283 6.89468 4.2582 7 3.9927 7C3.72721 7 3.47258 6.89468 3.28482 6.7072L0.281063 3.70701C0.0986771 3.5184 -0.00224342 3.26578 3.785e-05 3.00357C0.00231912 2.74136 0.10762 2.49053 0.29326 2.30511C0.4789 2.11969 0.730026 2.01451 0.992551 2.01224C1.25508 2.00996 1.50799 2.11076 1.69683 2.29293L3.9927 4.58607L8.29108 0.292804C8.47884 0.105322 8.73347 0 8.99896 0C9.26446 0 9.51908 0.105322 9.70685 0.292804Z"
                            fill=""
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <p>Remember me</p>
                </label>

                <a href="#" className="text-sm text-primary">
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="flex w-full justify-center rounded bg-success p-3 font-medium text-gray"
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
