import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import SocialLogin from '../SocialLogin/SocialLogin';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signIn, resetPassword } = useAuth();
    const navigate = useNavigate();
    const location=useLocation();
    const from=location.state?.from || '/'
    const [emailForReset, setEmailForReset] = useState('');

    const onSubmit = data => {
        const { email, password } = data;
        setEmailForReset(email);
        signIn(email, password)
            .then(result => {
                console.log(result)
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful',
                    text: 'Welcome back!',
                    timer: 2000,
                    showConfirmButton: false,
                });
                navigate(from);
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: error.message,
                });
            });
    };

    const handleResetPassword = () => {
        if (!emailForReset) {
            Swal.fire('Warning', 'Please enter your email above first', 'warning');
            return;
        }
        resetPassword(emailForReset)
            .then(() => {
                Swal.fire('Success', 'Password reset email sent. Check your inbox.', 'success');
            })
            .catch(error => {
                Swal.fire('Error', error.message, 'error');
            });
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-base-200 p-4">
            <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
                <div className="card-body">
                    <h1 className="text-3xl font-bold text-center mb-4">Please Login</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input
                                type="email"
                                {...register('email', { required: true })}
                                onBlur={e => setEmailForReset(e.target.value)}
                                className="input input-bordered"
                                placeholder="Email"
                            />
                            {errors.email && <p className='text-red-500 text-sm'>Email is required</p>}

                            <label className="label mt-3">Password</label>
                            <input
                                type="password"
                                {...register('password', {
                                    required: true,
                                    minLength: 6
                                })}
                                className="input input-bordered"
                                placeholder="Password"
                            />
                            {errors.password?.type === 'required' &&
                                <p className='text-red-500 text-sm'>Password is required</p>}
                            {errors.password?.type === 'minLength' &&
                                <p className='text-red-500 text-sm'>Password must be 6 characters or longer</p>}

                            <div className="text-right mt-2">
                                <button
                                    type="button"
                                    onClick={handleResetPassword}
                                    className="link link-hover text-sm text-blue-600 underline"
                                >
                                    Forgot password?
                                </button>
                            </div>

                            <button className="btn bg-[#CAEB66] text-black mt-4 w-full">Login</button>
                        </fieldset>
                        <p className="mt-4 text-center text-sm">
                            New to this website?{" "}
                            <Link className="text-[#CAEB66] font-medium underline" to="/register">
                                Register
                            </Link>
                        </p>
                    </form>


                    <SocialLogin />
                </div>
            </div>
        </div>
    );
};

export default Login;
