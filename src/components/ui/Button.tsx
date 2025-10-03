

export default function Button({ content  , className   ,type="submit" }: {content:string , className?:string , type?:"submit" | "reset" | "button" | undefined }) { 
    return (
              <button
            type={ type}
        className={ `uppercase bg-sfg  
          px-5 py-2 rounded-xl font-bold 
          text-white text-sm lg:text-base 
          flex flex-col lg:flex-row lg:space-x-2 items-center 
          transition-all duration-400 shadow-md shadow-black/10 ${className} hover:bg-black border border-transparent hover:border hover:border-bg hover:text-secondary`}
      >
            <p>{ content}</p>

      </button>
    );
}