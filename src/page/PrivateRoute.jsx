import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { Navigate, Outlet } from 'react-router';


export default function PrivateRoute() {
    const [user, loading] = useAuthState(auth)
    console.log(user)

    if (loading) return <p className='text-center'>Loading....</p>
    return (
        <>
            {
                user ? <Outlet /> : <Navigate to='/login' replace />
            }
        </>
    );
}