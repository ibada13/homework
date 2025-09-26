import { Link } from "react-router-dom";

export default function Home() { 




    return (
        <nav className="w-screen h-screen bg-gray-900 flex flex-col justify-around items-center ">
            <Link className="w-40 h-40 border border-white text-white flex justify-center items-center"  to="/aurel">aurel</Link>    
            <Link className="w-40 h-40 border border-white text-white flex justify-center items-center" to="/the other one">same </Link>    
        </nav>
    );
}