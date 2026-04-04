import React from 'react';
import { auth } from '../utils/firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/");
        }).catch((error) => {
            // An error happened.
            navigate("/error");
        });
    }
    return (
        <div className='absolute flex justify-between bg-gradient-to-b from-black/70 w-full z-10'>
            <div className=' px-8 py-2 '>
                <img src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-03-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='Netflix Logo' className='w-44' />
            </div>
            {
                user &&

                <div className='flex gap-4 p-2 align-center justify-center w-40'>
                    <img className="w-12 h-12" src='https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg' />
                    <button className='font-bold text-white' onClick={handleSignOut}>Sign Out</button>
                </div>
            }

        </div>
    )
}

export default Header
