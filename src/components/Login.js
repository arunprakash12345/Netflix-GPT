import React from "react";
import Header from "./Header";
import { useState } from "react";
const Login = () => {
    const [isSigninForm, setIsSigninForm] = useState(true);
    const toggleSigninForm = () => {
        setIsSigninForm(!isSigninForm);
    };
    return (
        <div>
            <div>
                <Header />
                <div className="absolute">
                    <img
                        src="https://assets.nflxext.com/ffe/siteui/vlv3/fc9ebadf-d77a-4f9b-a0dd-499af5178dc5/web/IN-en-20260330-TRIFECTA-perspective_81d2307f-4ee1-416d-8721-ac2be7b2da1d_large.jpg"
                        alt="Netflix Login"
                        className="w-full h-screen object-cover"
                    />
                </div>
            </div>

            <form className="absolute p-12 bg-black w-4/12 my-36 mx-auto rounded right-0 left-0 text-white bg-opacity-80">
                <h1 className="font-bold text-3xl py-4">
                    {isSigninForm ? "Sign In" : "Sign Up"}
                </h1>
                {
                    !isSigninForm && (<input
                        type="text"
                        placeholder="Full Name"
                        className="p-4 my-4 rounded-md w-full bg-gray-600"
                    />)
                }
                <input
                    type="text"
                    placeholder="Email address"
                    className="p-4 my-4 rounded-md w-full bg-gray-600"
                />


                <input
                    type="password"
                    placeholder="Password"
                    className="p-4 my-4 rounded-md w-full bg-gray-600"
                />
                <button className="p-4 my-4 bg-red-700 w-full rounded-md">
                    {isSigninForm ? "Sign In" : "Sign Up"}
                </button>
                {isSigninForm ? (
                    <p className="">
                        New to Netflix?{" "}
                        <span
                            onClick={toggleSigninForm}
                            className="text-white-600 cursor-pointer"
                        >
                            Sign Up now.
                        </span>
                    </p>
                ) : (
                    <p className="">
                        Already a user?{" "}
                        <span
                            onClick={toggleSigninForm}
                            className="text-white-600 cursor-pointer"
                        >
                            Sign In now.
                        </span>
                    </p>
                )}
            </form>
        </div>
    );
};

export default Login;
