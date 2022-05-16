import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link } from 'react-router-dom';
const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
  
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    let signInError;
    if (loading || gLoading) {
      return <Loading></Loading>
    }
    if (error || gError) {
      signInError = <p className='text-red-500'>{error?.message || gError?.message}</p>
    }
    if (gUser || user) {
      console.log(gUser || user)
    }
  
    const onSubmit = data => {
      console.log(data);
      createUserWithEmailAndPassword(data.email, data.password)
    }
    return (
        <div className='flex h-screen justify-center items-center'>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-center text-2xl font-bold">Sign up</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Name</span>

              </label>
              <input
                type="text"
                placeholder="Your Name"
                class="input input-bordered w-full max-w-xs"
                {...register("Name", {
                  required: {
                    value: true,
                    message: 'Name is Required'
                  },
                 
                })}
              />

              <label class="label">
                {errors.Name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.Name.message}</span>}
                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}


              </label>
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Email</span>

              </label>
              <input
                type="email"
                placeholder="Your Email"
                class="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: 'Email is Required'
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: 'Provide a valid Email'
                  }
                })}
              />

              <label class="label">
                {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}


              </label>
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Password</span>

              </label>
              <input
                type="password"
                placeholder="Password"
                class="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: 'password is Required'
                  },
                  minLength: {
                    value: 6,
                    message: 'must be 6 character or longer'
                  }
                })}
              />

              <label class="label">
                {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}


              </label>
            </div>
            {signInError}
            <input className='btn w-full max-w-xs' type="submit" value='Sign Up' />
          </form>
          <small>
          <p>Already have an account? <Link className='text-primary' to='/login'>Please Login</Link></p>
          </small>
          <div class="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            class="btn btn-outline">
            Continue With Google</button>
        </div>
      </div>
    </div>
    );
};

export default SignUp;