import React from "react";

interface WhatWeOfferProps {
    id: string;
}

const WhatWeOffer = (props: WhatWeOfferProps) => {
    const { id } = props;

    return (
        <div id={id}>
            <div className="md:h-screen grid md:grid-cols-2">
                <button className="flex bg-gradient-to-r from-fuchsia-600 to-fuchsia-400 hover:transition hover:ease-in-out hover:-translate-y-1 hover:scale-110 hover:from-fuchsia-700 hover:to-fuchsia-500 hover:font-bold items-center justify-center py-4 text-2xl lg:text-3xl text-white border border-white">
                    Hypnotherapy
                </button>
                <button className="flex bg-gradient-to-r from-fuchsia-600 to-fuchsia-400 hover:transition hover:ease-in-out hover:-translate-y-1 hover:scale-110 hover:from-fuchsia-700 hover:to-fuchsia-500 hover:font-bold items-center justify-center py-4 text-2xl lg:text-3xl text-white border border-white">
                    Transpersonal Counseling & Healing
                </button>
                <button className="flex bg-gradient-to-r from-fuchsia-600 to-fuchsia-400 hover:transition hover:ease-in-out hover:-translate-y-1 hover:scale-110 hover:from-fuchsia-700 hover:to-fuchsia-500 hover:font-bold items-center justify-center py-4 text-2xl lg:text-3xl text-white border border-white">
                    Personal Vision Coaching
                </button>
                <button className="flex bg-gradient-to-r from-fuchsia-600 to-fuchsia-400 hover:transition hover:ease-in-out hover:-translate-y-1 hover:scale-110 hover:from-fuchsia-700 hover:to-fuchsia-500 hover:font-bold items-center justify-center py-4 text-2xl lg:text-3xl text-white border border-white">
                    Cognitive Behavior Therapy
                </button>
                <button className="flex bg-gradient-to-r from-fuchsia-600 to-fuchsia-400 hover:transition hover:ease-in-out hover:-translate-y-1 hover:scale-110 hover:from-fuchsia-700 hover:to-fuchsia-500 hover:font-bold items-center justify-center py-4 text-2xl lg:text-3xl text-white border border-white">
                    The Hoffman Process Coaching
                </button>
                <button className="flex bg-gradient-to-r from-fuchsia-600 to-fuchsia-400 hover:transition hover:ease-in-out hover:-translate-y-1 hover:scale-110 hover:from-fuchsia-700 hover:to-fuchsia-500 hover:font-bold items-center justify-center py-4 text-2xl lg:text-3xl text-white border border-white">
                    More...
                </button>
            </div>
        </div>
    );
};

export default WhatWeOffer;
