import { NavLink } from "react-router-dom";

export default function ButtonNaving({ content , subcontent , className }: {content:string , subcontent?:string , className?:string}) { 
    return (
              <NavLink
        to="/cta"
        className={ `uppercase bg-sfg hover:bg-sfg/80 
          px-5 py-2 rounded-xl font-bold 
          text-white text-sm lg:text-base 
          flex flex-col lg:flex-row lg:space-x-2 items-center 
          transition-all duration-300 shadow-md shadow-black/10 ${className} text-black`}
      >
            <p>{ content}</p>
            <p className="opacity-80 text-xs lg:text-sm">{ subcontent}</p>
      </NavLink>
    );
}