import React from "react";
import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidata } from "../utils/validate";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { auth } from "./../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "./../utils/userSlice";

const Login = () => {
    const [isSigninForm, setIsSigninForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const toggleSigninForm = () => {
        setIsSigninForm(!isSigninForm);
    };
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const handleButtonClick = () => {
        // Handle form submission logic here
        const message = checkValidata(email.current.value, password.current.value);
        setErrorMessage(message);
        if (message) return;

        if (!isSigninForm) {
            // Sign up logic
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    // Signed up
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: "https://example.com/jane-q-user/profile.jpg",
                    })
                        .then(() => {
                            const { uid, email, displayName } = auth.currentUser;
                            dispatch(
                                addUser({ uid: uid, email: email, displayName: displayName })
                            );
                            navigate("/browse");
                        })
                        .catch((error) => {
                            setErrorMessage(error);
                        });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + " - " + errorMessage);
                });
        } else {
            // sign in logic
            signInWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    navigate("/browse");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "- " + errorMessage);
                });
        }
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

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                }}
                className="absolute p-12 bg-black w-4/12 my-36 mx-auto rounded right-0 left-0 text-white bg-opacity-80"
            >
                <h1 className="font-bold text-3xl py-4">
                    {isSigninForm ? "Sign In" : "Sign Up"}
                </h1>
                {!isSigninForm && (
                    <input
                        type="text"
                        ref={name}
                        placeholder="Full Name"
                        className="p-4 my-4 rounded-md w-full bg-gray-600 opacity-80"
                    />
                )}
                <input
                    type="text"
                    ref={email}
                    placeholder="Email address"
                    className="p-4 my-4 rounded-md w-full bg-gray-600 opacity-80"
                />

                <input
                    type="password"
                    ref={password}
                    placeholder="Password"
                    className="p-4 my-4 rounded-md w-full bg-gray-600 opacity-80"
                />
                <p className="text-red-500">{errorMessage}</p>
                <button
                    type="button"
                    className="p-4 my-4 bg-red-700 w-full rounded-md"
                    onClick={handleButtonClick}
                >
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
