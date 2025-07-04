import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { loginWithEmailAndPassword } from "../firebase";

export default function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e)=> {
        e.preventDefault();

        try{
            await loginWithEmailAndPassword(email, password);
            navigate('/')
        }catch(err){
            console.log(err)
        }
    }
    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
            <div className="card-body">
                <h1 className="text-center font-bold text-3xl">Login Form</h1>
                <fieldset className="fieldset">
                    <label className="label">Email</label>
                       <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="input" placeholder="Email" required />
                    <label className="label">Password</label>
                       <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className="input" placeholder="Password" required />
                       <p>No account? <Link className="text-red-900 underline font-bold" to='/register'>Register</Link></p>
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button type="submit" onClick={handleSubmit} className="btn btn-neutral mt-4">Login</button>
                </fieldset>
            </div>
        </div>
    );
}