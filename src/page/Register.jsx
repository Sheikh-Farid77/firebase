import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { registerWithEmailAndPassword } from "../firebase";

export default function Register() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await registerWithEmailAndPassword(email, password)
            navigate('/login')
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
            <div className="card-body">
                <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="input" placeholder="Email" required />
                    <label className="label">Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className="input" placeholder="Password" required />
                    <button type="submit" onClick={handleSubmit} className="btn btn-neutral mt-4">Register</button>
                </fieldset>
                <p>Already have an account? {" "}

                    <Link className="text-red-900 border-b" to='/login'>Login</Link>
                </p>
            </div>

        </div>
    );
}