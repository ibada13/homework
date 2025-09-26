import NavBar from "./components/NavBar";
import './main.css'
import Main from "./components/Main";
import WhoAreWe from "./components/WhoAreWe";
import OurServices from "./components/OurServices";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import { useEffect } from "react";



export default function Aurel() { 
    useEffect(() => { 
        document.title = "AUREL";
    },[])



    return (

        <div className="min-h-screen w-screen flex flex-col justify-center items-center bg-bg px-1">

            <NavBar />
            <main className="">

                <Main />
                <WhoAreWe />
                <OurServices />
                <Cta/>
            </main>
                <Footer/>
        </div>
    )
        ;
}