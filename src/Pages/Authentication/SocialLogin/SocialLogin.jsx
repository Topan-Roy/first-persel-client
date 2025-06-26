import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {

    const { signInWithGoogle } = useAuth();

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className='text-center'>
            <p className='mb-4'>OR</p>
            <button onClick={handleGoogleSignIn} className="btn bg-[#E9ECF1] text-black border-[#e5e5e5] w-full">
               
                <FcGoogle size={24}/>
                Login with Google
            </button>
        </div>
    );
};

export default SocialLogin;