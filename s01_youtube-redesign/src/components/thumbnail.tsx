import { FC } from "react";

export interface iThumbnail {
    image: string;
    title: string;
    profile_name: string;
    profile_image: string;
    duration: string;
}

interface propsThumbnail {
    thumbnail: iThumbnail;
}

const Thumbnail: FC<propsThumbnail> = ({thumbnail}) => {
    return(
        <div className="relative h-full">
            <img className="w-full absolute z-10 top-0 left-0" src={thumbnail.image} />
            <div className="flex items-center absolute z-20 bottom-0 left-0 w-full">
                <div className="flex-none pr-4">
                    <img className="w-24 rounded-full p-2" src={thumbnail.profile_image} />
                </div>
                <div className="flex-grow w-full">
                    <h4 className="text-white font-bold text-2xl">{thumbnail.title}</h4>
                    <h5 className="text-white text-base">{thumbnail.profile_name}</h5>
                </div>
                <div className="flex-none bg-gray-400 bg-opacity-80 mr-5 text-white py-3 px-7 rounded-full">
                    <span>{thumbnail.duration}</span>
                </div>
            </div>
        </div>
    )
}

export default Thumbnail;