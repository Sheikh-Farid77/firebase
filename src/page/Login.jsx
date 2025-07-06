import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { loginWithEmailAndPassword } from "../firebase";
import { IoMdEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";

export default function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [open, setOpen] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await loginWithEmailAndPassword(email, password);
            navigate('/')
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
            <div className="card-body">
                <h1 className="text-center font-bold text-3xl">Login Form</h1>
                <fieldset className="fieldset flex flex-col gap-2">
                    <label className="label">Email</label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        className="input input-bordered w-full"
                        placeholder="Email"
                        required
                    />

                    <label className="label">Password</label>
                    <div className="relative w-full">
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            type={open ? 'text' : 'password'}
                            className="input input-bordered w-full pr-12" // give enough right padding
                            placeholder="Password"
                            required
                        />
                        <span
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer z-10"
                            onClick={() => setOpen(!open)}
                        >
                            {open ? <IoIosEyeOff size={22} /> : <IoMdEye size={22} />}
                        </span>
                    </div>

                    <p>
                        No account?{' '}
                        <Link
                            className="text-red-900 underline font-bold"
                            to="/register"
                        >
                            Register
                        </Link>
                    </p>
                    <div>
                        <Link to="/reset" className="link link-hover">
                            Forgot password?
                        </Link>
                    </div>
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="btn btn-neutral mt-4"
                    >
                        Login
                    </button>
                </fieldset>
            </div>
        </div>
    );
}