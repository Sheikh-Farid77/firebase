import { Link } from "react-router";

export default function Navbar() {
    return (
        <div className="container mx-auto">
            <ul className="flex justify-center items-center gap-5 text-xl font-semibold">
                <Link to='/'>Home</Link>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
                <Link to='/reset'>Reset</Link>
            </ul>
        </div>
    );
}