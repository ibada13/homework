import ButtonNaving from "./ui/ButtonNaving"
export default function Cta() { 


    return (
        <section className="min-h-[80vh] bg-gradient-to-bl  from-bg from-20% via-black to-bg w-full flex flex-col items-center  justify-around p-6 ">
            <p className="text-sfg uppercase font-semibold text-4xl text-center">Claim Your Free Session</p>
<p className="text-gray-400">
  We help you{' '}
  <span className="text-ssfg">launch</span>,{' '}
  <span className="text-ssfg">rise</span>, and{' '}
  <span className="text-ssfg">stand out</span>—with{' '}
  <span className="text-ssfg">clarity</span>,{' '}
  <span className="text-ssfg">confidence</span>, and{' '}
  <span className="text-ssfg">impact</span>.
</p>

            <ButtonNaving className="bg-sfg" content="Book Now" subcontent="for free"/>

            
        </section>
    )
}