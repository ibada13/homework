
import Main from "./components/Main";
import OurExperts from "./components/OurExperts";
import OurServices from "./components/OurServices";
import WhoAreWe from "./components/WhoAreWe";
import OurSultions from "./components/OurSultions";

export default function LandningPage(){ 

    return (
                    <main className="">
                        <Main/>
                        <WhoAreWe/>
                        <OurServices />
                        <OurSultions/>
                        <OurExperts/>
       
            </main>
    );
}