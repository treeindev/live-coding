import { FC } from "react";
import {ReactComponent as Search} from "./icons/search.svg";
import {ReactComponent as Bell} from "./icons/bell.svg";
import {ReactComponent as Cloud} from "./icons/cloud.svg";
import {ReactComponent as Dots} from "./icons/dots.svg";

const SearchBar:FC<any> = () => {
    return(
        <div>
            <div className="flex px-16 py-10">
                <div className="flex flex-grow bg-gray-100 rounded-full overflow-hidden mx-24">
                    <input placeholder="Search" className="flex-grow bg-gray-100 py-3 px-10 text-gray-600" type="text" />
                    <Search className="w-14 text-white bg-red-600 p-4 cursor-pointer" />
                </div>
                <Bell className="w-8 mx-4 text-gray-400" />
                <Cloud className="w-8 mx-4 text-gray-400" />
                <Dots className="w-8 mx-4 text-gray-400" />
            </div>
            <ul className="flex px-10">
                <li className="flex-none mx-5 w-26 border-2 rounded-full py-2 px-10 bg-red-600 border-red-600 shadow-lg font-semibold text-white cursor-pointer">All videos</li>
                <li className="flex-none mx-5 w-26 border-2 rounded-full py-2 px-10 border-gray-300 text-gray-400 cursor-pointer hover:bg-red-600 hover:text-white hover:border-red-600">Music</li>
                <li className="flex-none mx-5 w-26 border-2 rounded-full py-2 px-10 border-gray-300 text-gray-400 cursor-pointer hover:bg-red-600 hover:text-white hover:border-red-600">Sports</li>
                <li className="flex-none mx-5 w-26 border-2 rounded-full py-2 px-10 border-gray-300 text-gray-400 cursor-pointer hover:bg-red-600 hover:text-white hover:border-red-600">News</li>
                <li className="flex-none mx-5 w-26 border-2 rounded-full py-2 px-10 border-gray-300 text-gray-400 cursor-pointer hover:bg-red-600 hover:text-white hover:border-red-600">Gaming</li>
                <li className="flex-none mx-5 w-26 border-2 rounded-full py-2 px-10 border-gray-300 text-gray-400 cursor-pointer hover:bg-red-600 hover:text-white hover:border-red-600">Movies</li>
            </ul>
        </div>
    );
}

export default SearchBar;