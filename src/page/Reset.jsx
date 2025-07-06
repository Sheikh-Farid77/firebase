import { useState } from "react";
import { sendPasswordReset } from "../firebase";

export default function Reset() {
    const [email, setEmail] = useState('')
    return (
        <div className="flex flex-col justify-center items-center gap-5">
            <h1 className="text-center font-bold text-3xl">Reset Your Email</h1>
            <div>
                <input
                    className="border px-2"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Your Email" />
            </div>
            <button onClick={() => sendPasswordReset(email)} className="px-4 py-1 bg-gray-300 text-xl font-semibold rounded-sm cursor-pointer">send password reset email</button>
        </div>
    );
}