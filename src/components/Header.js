import React from 'react';
import { auth } from '../utils/firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { LOGO, BACKGROUND_IMG } from '../utils/constant';
const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });

        return () => unSubscribe();

    }, []);
    const handleSignOut = () => {
        signOut(auth).then(() => {

        }).catch((error) => {
            // An error happened.
            navigate("/error");
        });
    }
    return (
        <div className='absolute flex justify-between bg-gradient-to-b from-black/70 w-full z-10'>
            <div className=' px-8 py-2 '>
                <img src={LOGO} alt='Netflix Logo' className='w-44' />
            </div>
            {
                user &&

                <div className='flex gap-4 p-2 align-center justify-center w-40'>
                    <img className="w-12 h-12" src={BACKGROUND_IMG} />
                    <button className='font-bold text-white' onClick={handleSignOut}>Sign Out</button>
                </div>
            }

        </div>
    )
}

export default Header
