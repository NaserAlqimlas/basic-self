import React from "react";
import image from "../assests/placeholder.png";

const JumbotronView = () => {
    return (
        <div className="flex flex-row h-full">
            <div className="flex flex-col justify-center p-10 pt-20">
                <h1 className="text-7xl ">Lorum Ipsum</h1>
                <h3 className="text-lg pt-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                </h3>
                <button className="my-5 justify-center items-center border border-fuchsia-600 rounded-md bg-fuchsia-600 text-white hover:bg-fuchsia-700 hover:border-fuchsia-700 duration-150">
                    Contact Us
                </button>
            </div>
            <div className="pt-10 invisible lg:visible">
                <img src={image} />
            </div>
        </div>
    );
};

export default JumbotronView;
