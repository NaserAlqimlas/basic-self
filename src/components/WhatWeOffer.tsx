import React from "react";

interface WhatWeOfferProps {
    id: string;
}

const WhatWeOffer = (props: WhatWeOfferProps) => {
    const { id } = props;

    return (
        <div id={id}>
            <div className="md:h-screen grid md:grid-cols-2">
                <button className="flex bg-gradient-to-r transition-colors duration-1000 from-fuchsia-600 to-fuchsia-400 hover:transition hover:duration-500 hover:ease-in-out hover:from-fuchsia-100 hover:to-fuchsia-200 hover:text-fuchsia-700 items-center justify-center py-4 text-2xl lg:text-3xl text-white border border-white">
                    Hypnotherapy
                </button>
                <button className="flex bg-gradient-to-r transition-colors duration-1000 from-fuchsia-600 to-fuchsia-400 hover:transition hover:duration-500 hover:ease-in-out hover:from-fuchsia-100 hover:to-fuchsia-200 hover:text-fuchsia-700 items-center justify-center py-4 text-2xl lg:text-3xl text-white border border-white">
                    Transpersonal Counseling & Healing
                </button>
                <button className="flex bg-gradient-to-r transition-colors duration-1000 from-fuchsia-600 to-fuchsia-400 hover:transition hover:duration-500 hover:ease-in-out hover:from-fuchsia-100 hover:to-fuchsia-200 hover:text-fuchsia-700 items-center justify-center py-4 text-2xl lg:text-3xl text-white border border-white">
                    Personal Vision Coaching
                </button>
                <button className="flex bg-gradient-to-r transition-colors duration-1000 from-fuchsia-600 to-fuchsia-400 hover:transition hover:duration-500 hover:ease-in-out hover:from-fuchsia-100 hover:to-fuchsia-200 hover:text-fuchsia-700 items-center justify-center py-4 text-2xl lg:text-3xl text-white border border-white">
                    Cognitive Behavior Therapy
                </button>
                <button className="flex bg-gradient-to-r transition-colors duration-1000 from-fuchsia-600 to-fuchsia-400 hover:transition hover:duration-500 hover:ease-in-out hover:from-fuchsia-100 hover:to-fuchsia-200 hover:text-fuchsia-700 items-center justify-center py-4 text-2xl lg:text-3xl text-white border border-white">
                    The Hoffman Process Coaching
                </button>
                <button className="flex bg-gradient-to-r transition-colors duration-1000 from-fuchsia-600 to-fuchsia-400 hover:transition hover:duration-500 hover:ease-in-out hover:from-fuchsia-100 hover:to-fuchsia-200 hover:text-fuchsia-700 items-center justify-center py-4 text-2xl lg:text-3xl text-white border border-white">
                    More...
                </button>
            </div>
        </div>
    );
};

export default WhatWeOffer;
