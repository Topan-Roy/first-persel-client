import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { FcGoogle } from "react-icons/fc";
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router';

const SocialLogin = () => {
    const navigate = useNavigate();
    const location=useLocation();
    const from=location.state?.from || '/'
 
    const { signInWithGoogle } = useAuth();

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                 Swal.fire({
                                    icon: 'success',
                                    title: 'Register Successful',
                                    text: 'Welcome back!',
                                    timer: 2000,
                                    showConfirmButton: false,
                                });
                                navigate(from);
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className='text-center'>
            <p className="divider">OR</p>
            <button onClick={handleGoogleSignIn} className="btn bg-[#E9ECF1] text-black border-[#e5e5e5] w-full">
               
                <FcGoogle size={24}/>
                Login with Google
            </button>
        </div>
    );
};

export default SocialLogin;