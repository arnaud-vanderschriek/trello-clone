import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 h-20 bg-white shadow-md flex justify-between items-center w-full p-4 z-50">
      <div className="flex items-center">
        <h3 className="text-4xl font-bold">Trello-clone</h3>

        <Link
          to="/"
          className="relative text-black ml-6 mr-2 no-underline
            after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0
            after:bg-black after:transition-all after:duration-300
            hover:after:w-full"
        >
          Features
        </Link>

        <Link
          to="/"
          className="relative text-black mr-2 no-underline
            after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0
            after:bg-black after:transition-all after:duration-300
            hover:after:w-full"
        >
          Solutions
        </Link>
      </div>

      <div className="flex items-center">
        <Link 
          className="relative text-black mr-2 no-underline
            after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0
            after:bg-black after:transition-all after:duration-300
            hover:after:w-full"
          to="/"
        >
          Login
        </Link>
        <Link className="text-black text-xl ml-2 no-underline" to="/">
          Get Trello-clone for free
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;


