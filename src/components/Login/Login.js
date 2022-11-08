import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
// import { Link } from 'react-router-dom';

const Login = () => {
    const {signIn,signInWithGoogle} = useContext(AuthContext);
    const [error, setError] = useState('');
    // const navigate = useNavigate()
    // const location = useLocation()
    // const from = location.state?.from?.pathname || '/'
    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
       

        signIn(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user)
            form.reset('')
            toast.success('Your Login is Successful')
            setError('')
            // navigate(from, { replace: true })
        })
        .catch(error=>{
            console.log(error);
            setError(error.message)
        })
        
    }

    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result=>{
            const user=result.user;
            console.log(user)
            // navigate(from, { replace: true })
        })
        .catch(error=>{
            console.error(error);
        })
    }


    return (
   

    <div className='flex-column lg:flex my-20'>
        <div>
            <img className='w-3/4  mx-auto' src="https://img.freepik.com/premium-vector/enter-account-registration-verification-number_18660-2989.jpg?w=996"alt="" />
        </div>
        <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 bg-pink-100">
	<h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
	<p className="text-sm text-center">Dont have account?
		<Link to="/signup" rel="noopener noreferrer" className="focus:underline hover:underline text-pink-500">Sign up here</Link>
	</p>
	<div className="my-6 space-y-4">
		<button onClick={handleGoogleSignIn} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-400 focus:ring-violet-400">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
				<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
			</svg>
			<p>Login with Google</p>
		</button>
	
		
	</div>
	<div className="flex items-center w-full my-4">
		<hr className="w-full bg-black"/>
		<p className="px-3">OR</p>
		<hr className="w-full bg-black"/>
	</div>
	<form onSubmit={handleSubmit} novalidate="" action="" className="space-y-8 ng-untouched ng-pristine ng-valid">
		<div className="space-y-4">
			<div className="space-y-2">
				<label for="email" className="block text-sm">Email address</label>
				<input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
			</div>
			<div className="space-y-2">
				<div className="flex justify-between">
					<label for="password" className="text-sm">Password</label>
					<a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-gray-400">Forgot password?</a>
				</div>
				<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
			</div>
		</div>
        <p className='text-red-700'>{error}</p>
		<button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900">Log in</button>
	</form>
</div>
    </div>
    );
};

export default Login;