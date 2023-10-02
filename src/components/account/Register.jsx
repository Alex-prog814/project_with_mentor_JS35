import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerAccount } from "../../store/account/accountActions";
import { clearStatusState } from "../../store/account/accountSlice";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const { loading, status } = useSelector((state) => state.account);

  useEffect(() => {
    dispatch(clearStatusState());
  }, []);

  return (
    <div className="w-1/2 h-1/2  flex flex-col justify-center m-auto">
      {loading ? (
        <h3>Loading.....</h3>
      ) : (
        <>
          {status ? (
            <>
              <h3>An error occured!</h3>
              <button onClick={() => dispatch(clearStatusState())}>
                Try again!
              </button>
            </>
          ) : (
            <div>
              <h3 className="text-3xl text-center mb-2">Register Form</h3>
              <label
                htmlFor="UserEmail"
                className="mb-2 relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
              >
                <input
                  type="email"
                  id="UserEmail"
                  placeholder="Name"
                  className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  onChange={(e) =>
                    setUser({ ...user, username: e.target.value })
                  }
                />

                <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                  Name
                </span>
              </label>
              <label
                htmlFor="UserEmail"
                className="mb-2 relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
              >
                <input
                  type="password"
                  id="UserEmail"
                  placeholder="password"
                  className=" peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />

                <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                  Password
                </span>
              </label>
              <button
                onClick={() => dispatch(registerAccount({ user, navigate }))}
                class="group relative inline-block text-sm font-medium text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                href="/download"
              >
                <span class="absolute inset-0 translate-x-0 translate-y-0 bg-indigo-600 transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5"></span>

                <span class="relative block border border-current bg-white px-8 py-3">
                  Register
                </span>
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Register;
