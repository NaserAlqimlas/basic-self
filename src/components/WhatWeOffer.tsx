import React from "react";

interface WhatWeOfferProps {
    id: string;
}

const WhatWeOffer = (props: WhatWeOfferProps) => {
    const { id } = props;

    return (
        <div id={id}>
            <div className="md:h-screen grid md:grid-cols-2">
                <div className="flex bg-gradient-to-r from-fuchsia-500 to-fuchsia-800 transition  ease-in-out hover:-translate-y-1 hover:scale-110 hover:from-fuchsia-800 hover:to-fuchsia-500 items-center justify-center py-4 text-2xl lg:text-3xl text-white border border-white">
                    Hypnotherapy
                </div>
                <div className="flex bg-fuchsia-500 items-center justify-center py-4 text-2xl lg:text-3xl text-white border border-white">
                    Transpersonal Counseling & Healing
                </div>
                <div className="flex bg-fuchsia-500 items-center justify-center py-4 text-2xl lg:text-3xl text-white border border-white">
                    Personal Vision Coaching
                </div>
                <div className="flex bg-fuchsia-500 items-center justify-center py-4 text-2xl lg:text-3xl text-white border border-white">
                    Cognitive Behavior Therapy
                </div>
                <div className="flex bg-fuchsia-500 items-center justify-center py-4 text-2xl lg:text-3xl text-white border border-white">
                    The Hoffman Process Coaching
                </div>
                <div className="flex bg-fuchsia-500 items-center justify-center py-4 text-2xl lg:text-3xl text-white border border-white">
                    More...
                </div>
            </div>
        </div>
    );
};

export default WhatWeOffer;
