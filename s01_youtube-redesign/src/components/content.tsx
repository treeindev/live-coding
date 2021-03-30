import React, { FC } from "react";
import Thumbnail, { iThumbnail } from "./thumbnail";

const Content: FC<any> = () => {
    const recommended: Array<iThumbnail> = [
        {
            title: "Look at her",
            image: "https://lightmv.com/wp-content/uploads/2019/12/video-thumbnail-20191213.jpg",
            profile_image: "https://forums2.cubiccastles.com/uploads/imageupload/162/1DP35AMQYX8F.jpg",
            profile_name: "Selena",
            duration: "03:22"
        },
        {
            title: "Kohinoor",
            image: "https://i.easil.com/wp-content/uploads/20190501195527/190427_-_how_to_create_irresistible_youtube_thumbnail_images_custom-1.jpg",
            profile_image: "https://forums2.cubiccastles.com/uploads/imageupload/162/1DP35AMQYX8F.jpg",
            profile_name: "Divine",
            duration: "02:55"
        }
    ];
    const recent: Array<iThumbnail> = [
        {
            title: "Look at her",
            image: "https://lightmv.com/wp-content/uploads/2019/12/video-thumbnail-20191213.jpg",
            profile_image: "https://forums2.cubiccastles.com/uploads/imageupload/162/1DP35AMQYX8F.jpg",
            profile_name: "Selena",
            duration: "03:22"
        },
        {
            title: "Kohinoor",
            image: "https://i.easil.com/wp-content/uploads/20190501195527/190427_-_how_to_create_irresistible_youtube_thumbnail_images_custom-1.jpg",
            profile_image: "https://forums2.cubiccastles.com/uploads/imageupload/162/1DP35AMQYX8F.jpg",
            profile_name: "Divine",
            duration: "02:55"
        },
        {
            title: "Look at her",
            image: "https://lightmv.com/wp-content/uploads/2019/12/video-thumbnail-20191213.jpg",
            profile_image: "https://forums2.cubiccastles.com/uploads/imageupload/162/1DP35AMQYX8F.jpg",
            profile_name: "Selena",
            duration: "03:22"
        },
        {
            title: "Kohinoor",
            image: "https://i.easil.com/wp-content/uploads/20190501195527/190427_-_how_to_create_irresistible_youtube_thumbnail_images_custom-1.jpg",
            profile_image: "https://forums2.cubiccastles.com/uploads/imageupload/162/1DP35AMQYX8F.jpg",
            profile_name: "Divine",
            duration: "02:55"
        }
    ];

    return (
        <div className="pl-16 mt-10">
            <h3 className="text-lg font-bold my-5">Recommended</h3>
            <ul className="flex">
                {recommended.map( (video, index) => 
                    <li key={index} className="w-6/12 mr-6 h-80 overflow-hidden rounded-lg"><Thumbnail thumbnail={video}></Thumbnail></li>
                )}
            </ul>
            <h3 className="text-lg font-bold my-5">Recently Uploaded</h3>
            <ul className="flex pb-10">
                {recent.map( (video, index) =>
                    <li key={index} className="w-1/4 mr-6 h-40 overflow-hidden rounded-lg"><Thumbnail thumbnail={video}></Thumbnail></li>
                )}
            </ul>
        </div>
    )
}

export default Content;