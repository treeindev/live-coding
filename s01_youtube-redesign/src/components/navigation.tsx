import React, { FC } from "react";

const Navigation: FC<any> = () => {
    return(
        <div className="bg-gray-100 w-64">
            <div className="p-10">
                <img 
                    className="w-2/4 m-auto"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png"
                />
                <img
                    className="w-16 m-auto mt-10 rounded-full shadow-lg"
                    src="https://forums2.cubiccastles.com/uploads/imageupload/162/1DP35AMQYX8F.jpg"
                />
                <span className="block mt-5 text-center">Username here</span>
            </div>
            <ul>
                <li className="py-3 px-10 bg-red-200 text-red-700 cursor-pointer">Home</li>
                <li className="py-3 px-10 hover:bg-red-200 hover:text-red-700 cursor-pointer">Trending</li>
                <li className="py-3 px-10 hover:bg-red-200 hover:text-red-700 cursor-pointer">Subscriptions</li>
            </ul>
            <ul className="py-6">
                <li className="py-3 px-10 hover:bg-red-200 hover:text-red-700 cursor-pointer">History</li>
                <li className="py-3 px-10 hover:bg-red-200 hover:text-red-700 cursor-pointer">Library</li>
                <li className="py-3 px-10 hover:bg-red-200 hover:text-red-700 cursor-pointer">My likes</li>
                <li className="py-3 px-10 hover:bg-red-200 hover:text-red-700 cursor-pointer">Watch later</li>
            </ul>
            <ul className="py-10">
                <li className="py-3 px-10 hover:bg-red-200 hover:text-red-700 cursor-pointer">Settings</li>
            </ul>
        </div>
    )
}

export default Navigation;