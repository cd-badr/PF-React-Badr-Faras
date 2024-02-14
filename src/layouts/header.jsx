import { Link } from "react-router-dom";
import { Button, Navbar } from 'flowbite-react';
import logo from "../assets/img/logo.png"
import user from "../assets/img/icon-header-01.png"
import carte from "../assets/img/icon-header-02.png"
import { RxDividerVertical } from "react-icons/rx";


export const Header = () => {
    return (
        <>

            <div className="p-4 px-10">

            <Navbar fluid rounded>
                <Navbar.Brand href="https://flowbite-react.com">
                    <img width={120}  src={logo} className="mr-3 h-6 sm:h-9 object-contain" alt="Flowbite React Logo" />
                </Navbar.Brand>
                <div className="flex md:order-2  gap-2">
                    <Link>
                    <img src={user} alt="" />
                    </Link>

                    <div className="text-3xl opacity-10">
                    <RxDividerVertical />
                    </div>

                    <Link>
                    <img src={carte} alt="" />
                    </Link>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse >
                    <Link className="text-lg font-normal opacity-80 cursor-pointer text-red-600" to={"/"} active>
                        Home
                    </Link>
                    <Link className="text-lg font-normal opacity-80 cursor-pointer hover:text-red-600" to={"/"}>Shop</Link>
                    <Link className="text-lg font-normal opacity-80 cursor-pointer hover:text-red-600" to={""}>About</Link>
                    <Link className="text-lg font-normal opacity-80 cursor-pointer hover:text-red-600" to={""}>Contact</Link>
                </Navbar.Collapse>
            </Navbar>

            </div>

        </>
    );
}