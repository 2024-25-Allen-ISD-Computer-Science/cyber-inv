// import { IoIosMenu } from "react-icons/io";

import Logo from "../assets/logos/ACI_Logo.svg";
import Timer from "./Timer";

export default function Navbar() {
  return (
    <>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="navbar bg-black w-full flex justify-between items-center p-2">
            <div className="flex justify-start items-center w-3/4 lg:w-1/3 text-white font-bold text-lg lg:text-xl gap-4">
              <img src={Logo} className="h-10" />
              Allen Cyber Invitational
            </div>
            <div className="w-1/3 hidden lg:flex justify-center">
              <Timer timerClassName="justify-center" />
            </div>
            <div className="w-1/3 hidden lg:flex justify-end gap-2">
              {/* **ADD REGISTER LINK */}
              <a className="btn bg-indigo-700 hover:bg-indigo-800 transition-all text-white">
                Register
              </a>
              {/* **ADD LOGIN LINK */}
              <a className="btn bg-purple-700 hover:bg-purple-800 transition-all text-white">
                Login
              </a>
              {/* <div className="flex">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
                  <div className="w-full h-full text-4xl flex items-center justify-center">
                    <IoIosMenu />
                  </div>
                </label>
              </div> */}
            </div>
            {/* <div className="flex lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
                  <div className="w-full h-full text-4xl flex items-center justify-center">
                    <IoIosMenu />
                  </div>
                </label>
              </div> */}
          </div>
        </div>
        <div className="drawer-side z-10">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu bg-base-200 min-h-full w-80 p-4 flex flex-col">
            <div className="flex flex-row items-center p-2">
              <img src={Logo} className="w-14" />
              <div className="mx-2 flex-1 px-2 text-xl font-bold">
                Allen Cyber Invitational
              </div>
            </div>
            <ul className="menu menu-lg p-2">
              <li>
                <a>Page 1</a>
              </li>
              <li>
                <a>Page 2</a>
              </li>
              <li>
                <a>Page 3</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
