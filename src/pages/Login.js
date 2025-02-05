import React, { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { Label, Input, Button } from "@windmill/react-ui";
import { login } from "../utils/function/auth";

function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    login(dispatch, user);
    setLoading(false);
  };

  return (
    <div className="flex items-center h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="object-cover w-full h-full dark:hidden "
              src="https://media.istockphoto.com/photos/paper-bag-with-different-food-on-white-background-picture-id1265063603?k=20&m=1265063603&s=612x612&w=0&h=Ah_BHqzVvqg7bsqAmvg1ADYrH0szCoTXy_sdooxghKM="
              alt="Office"
            />
            <img
              aria-hidden="true"
              className="hidden object-cover w-full h-full dark:block "
              src="https://images.unsplash.com/photo-1587384178911-b70b8df870a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHwzNzQyNDU4fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="Office"
            />
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <form className="w-full" onSubmit={handleLogin}>
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                Login
              </h1>
              <Label>
                <span>Email</span>
                <Input
                  className="mt-1"
                  type="email"
                  placeholder="ridho@gmail.com"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </Label>

              <Label className="mt-4">
                <span>Password</span>
                <Input
                  className="mt-1"
                  type="password"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
              </Label>
              <Button className="mt-4" type="submit">
                {loading ? (
                  <TailSpin
                    height="20"
                    width="20"
                    color="#ffffff"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                  />
                ) : (
                  "Login"
                )}
              </Button>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Login;
