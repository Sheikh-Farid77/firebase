import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from "react-router";
import { auth } from "../firebase";
import { signOut } from 'firebase/auth';

export default function Home(){
const navigate = useNavigate();
const [user, loading, error] = useAuthState(auth);

const handleLogout = () => {
    signOut(auth).then(() => {
navigate('/login')
console.log('logout complete')

    }).catch((error) => {
        console.log(error)
    })
}

if(loading) return <p>user details loading.....</p>
    return (
        <div>
        
            <h1 className='font-bold text-3xl text-center'>Welcome, {user?.email}</h1>
            <button onClick={handleLogout} className='mt-6 bg-gray-400 px-4 py-1 rounded-sm text-xl font-semibold cursor-pointer'>Logout</button>
        </div>
    );
}