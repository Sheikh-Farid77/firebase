import { NavLink } from "react-router";

export default function Navbar() {

    return (
        <div className="container mx-auto mb-10">
            <ul className="flex justify-center items-center gap-5 text-xl font-semibold">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/register'>Register</NavLink>
                <NavLink to='/reset'>Reset</NavLink>
            </ul>
        </div>
    );
}