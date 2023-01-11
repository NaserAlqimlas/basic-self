import React from "react";
import image from "../assests/placeholder.png";
import { Link, animateScroll as scroll } from "react-scroll";

const JumbotronView = () => {
    return (
        <div className="flex flex-row">
            <div className="flex flex-col justify-center p-10">
                <h1 className="text-7xl ">Coming Home</h1>
                <p className="text-lg pt-2">
                    Healing the inner child is the core of my work. I believe
                    that as children we positively complied with everything
                    around us, adopting patterns from our parents, school,
                    society or anyone who came across our path and left a trail.
                    With time, those patterns became distorted beliefs. We live
                    by them until they became second nature, we lost touch with
                    our essence, who we truly are.
                </p>
                <p className="text-lg pt-2">
                    We became conditioned into those beliefs. Until a day comes
                    when we can't live by them anymore, they become obstacles
                    that hinder our growth, our wellbeing, our whole existence.
                    This is when we start to seek professional help! The healing
                    journey is worth every minute. In this short form of therapy
                    you are being taken back to those early years, not to blame
                    anyone, not to condemn anyone nor to just reminisce, but
                    rather to start afresh, to bring you home to your real self.
                    To move that child from a place of woundedness to a place of
                    healing and forgiveness. To take that child from the victim
                    status to empowering the adult self today, to achieve full
                    potential, dreams and hopes.
                </p>
                <p className="text-xl pt-2">
                    In the Basic Self all that is possible.
                </p>
                <div className="flex justify-end">
                    <Link
                        to="contactus"
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="w-36 p-2 my-5 flex justify-center items-center border border-fuchsia-600 rounded-md bg-fuchsia-600 text-white hover:bg-fuchsia-700 hover:border-fuchsia-700 duration-150"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
            <div className="pt-10 invisible lg:visible">
                <img src={image} />
            </div>
        </div>
    );
};

export default JumbotronView;
