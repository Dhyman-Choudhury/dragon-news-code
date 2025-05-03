import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const { logIn } = use(AuthContext);
    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        logIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorCode,errorMessage)
            })
    }
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-semibold text-2xl text-center'>Login your account</h2>
                <div className="card-body">
                    <form onSubmit={handleLogin} className="fieldset">

                        {/* email */}
                        <label className="label">Email</label>
                        <input type="email" className="input" name='email' placeholder="Email" />

                        {/* password */}
                        <label className="label">Password</label>
                        <input type="password" className="input" name='password' placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                        <p className='mt-2 font-semibold text-center'>Don’t Have An Account ? <Link className='text-secondary' to='/auth/register'>Register</Link> </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;