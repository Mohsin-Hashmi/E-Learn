import navbarLogo from "../assets/images/e-learn-logo.webp";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <header className="container">
        <div className="headerWrapper pt-[28px] pb-[8px] ">
          <nav className="flex items-center">
            <Link to="/">
              <img src={navbarLogo} alt="navbar logo" />
            </Link>

            <input
              className="ml-[55px] border border-[#98A2B3] outline-none max-w-[367px] w-[100%] rounded-[5px] py-[10px] px-[14px]"
              type="text"
              placeholder="Want to learn?"
            />
            <ul className="flex gap-x-[16px] ml-[30px]">
              <li className="text-[#101828] text-[16px] hover:text-[#1A906B]">
                <Link to="/">Home</Link>
              </li>
              <li className="text-[#101828] text-[16px] hover:text-[#1A906B]">
                <Link to="/">About us</Link>
              </li>
              <li className="text-[#101828] text-[16px] hover:text-[#1A906B]">
                <Link to="/">Courses</Link>
              </li>
              <li className="text-[#101828] text-[16px] hover:text-[#1A906B]">
                <Link to="/">Contact us</Link>
              </li>
              <li className="text-[#101828] text-[16px] hover:text-[#1A906B]">
                <Link to="/">FAQ’s</Link>
              </li>
            </ul>
            <div className="navbarBtns flex ml-[50px] gap-x-[10px] items-center">
              <Link className="text-[#101828] text-[16px] hover:text-[#1A906B]">
                {" "}
                Sign in
              </Link>
              <Link className="bg-[#20B486] py-[10px] px-[16px] text-[14px] text-[#FFFFFF] rounded-[8px] border border-transparent hover:border-[#20B486] hover:bg-[#FFFFFF] hover:text-[#20B486]">
                Create free account
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
