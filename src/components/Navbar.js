import React from "react";
import { Bell } from "lucide-react";

 export function Navbar(){
    return(
        <div className='Navbar flex flex-row items-center justify-between p-10 p-5 bg-orange-100 sticky'>
            <div className="nav-left">
                <img/>
                <h1 className=" text-2xl font-semibold text-orange-500">Thirtha<span className="text-gray-500">Yatri</span></h1>
            </div>
            <div className="nav-middle ">
                 <ul className='flex flex-row gap-10 '>
                   <li className='px-3 py-2 rounded hover:bg-orange-200 '><a href=''>Home</a></li>
                   <li className='px-3 py-2 rounded hover:bg-orange-200'><a href=''>Temples</a></li>
                   <li className='px-3 py-2 rounded hover:bg-orange-200'><a href=''>services</a></li>
                   <li className='px-3 py-2 rounded hover:bg-orange-200'><a href=''>Contact</a></li>
                   <li className='px-3 py-2 rounded hover:bg-orange-200'><a href=''>About</a></li>
                </ul>
            </div>
                <div className='nav-right flex flex-row gap-10'>
                <button>
                    <Bell/>
                </button>
                <button className="px-4 py-2 bg-orange-500 rounded-lg font-semibold hover:bg-orange-700 text-lg ">Login</button>
                <div className="pofile-logo">
                    <img/>
                </div>
            </div>
        </div>
    );
}