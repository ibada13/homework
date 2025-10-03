import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-bl from-bg via-black to-bg text-white py-16 px-6 lg:px-20 gap-y-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        
        <div>

          <ul className="space-y-3 flex flex-col  items-center md:items-start">
            {["Home", "What Sets Us Apart", "Our Services", "Our Team", "Blog", "Contact Us"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-sfg transition-colors duration-300">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>

          <p className="mb-2">Phone: <span className="text-sfg font-medium">+44 7575 893565</span></p>
          <p className="mb-4">Address: <span className="text-sfg font-medium">167-169 Great Portland Street, 5th Floor, London, W1W 5PF</span></p>
          <div className="flex justify-center space-x-4 mt-2 ">
            <a href="#" className="bg-bg p-3 rounded-full hover:bg-cyan-500 duration-300 transition-colors">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="bg-bg p-3 rounded-full hover:bg-purple-400 duration-300 transition-colors">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="bg-bg p-3 rounded-full hover:bg-blue-400 duration-300 transition-colors">
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>

        

      </div>
        <div className="flex flex-col mt-12  text-center text-gray-400 text-sm  lg:mt-0">
          <p className="mb-2">© AUREL – All rights reserved.</p>
          <p>Development: Aurel Agency | Parent Company: Development Research LTD.</p>
        </div>
    </footer>
  );
}
