import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {

    const {createUser, setUser}=use(AuthContext)
    
    const handleRegister = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password)

      createUser(email, password)
       .then(result =>{
        const user = result.user;
         setUser(user)
       })
       .catch(error => {
       const errorCode = error.code;
       const errorMessage = error.message
       alert(errorMessage)
       })

    }

    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-semibold text-2xl text-center'>Register your account</h2>
                <div className="card-body">
                    <form onSubmit={handleRegister} className="fieldset">

                         {/* name */}
                        <label className="label">Name</label>
                        <input type="text" className="input" name='name' placeholder="Name" required />
                         
                         {/* photo url */}
                        <label className="label">Photo URL</label>
                        <input type="text" className="input" name='photo' placeholder="Photo URL" required/>

                         {/* email */}
                        <label className="label">Email</label>
                        <input type="email" className="input" name='email' placeholder="Email" required/>

                          {/* password */}
                        <label className="label">Password</label>
                        <input type="password" className="input" name='password' placeholder="Password" required/>
                        <button type="submit" className="btn btn-neutral mt-4">Register</button>
                        <p className='mt-2 font-semibold text-center'>Already have an account. Please <Link className='text-secondary' to='/auth/login'>Login</Link> </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;