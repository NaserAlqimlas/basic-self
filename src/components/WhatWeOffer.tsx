import { useState } from "react";

interface WhatWeOfferProps {
    id: string;
}

const WhatWeOffer = (props: WhatWeOfferProps) => {
    const { id } = props;

    const [hypnoClicked, setHypnoClicked] = useState(false);

    const toggleHypno = () => {
        setHypnoClicked(!hypnoClicked);
    };

    return (
        <div id={id}>
            <div className="md:h-screen grid md:grid-cols-2">
                <button
                    onClick={toggleHypno}
                    className="flex bg-gradient-to-r transition-colors duration-1000 ease-in-out  from-fuchsia-600 to-fuchsia-400 hover:transition hover:duration-500 hover:ease-in-out hover:from-fuchsia-100 hover:to-fuchsia-200 hover:text-fuchsia-700 items-center justify-center py-4 text-2xl lg:text-3xl text-white border border-white"
                >
                    {hypnoClicked ? (
                        <div>
                            Hypnotherapy
                            <br />
                            <br />
                            <p className="text-xl">
                                Hypnotherapy is a unique and little known form
                                of therapy that addresses your subconscious
                                mind. It puts the conscious mind to rest so you
                                can tap into your subconscious - the part of the
                                mind that holds your feelings, habits, and
                                memories. It is generally considered to be a
                                fairly short-term approach in which beneficial
                                change, if it is to occur should become apparent
                                within relatively few sessions. It has the
                                potential to help relieve the symptoms of a wide
                                variety of conditions and can be used
                                independently or alongside other treatments.
                            </p>
                        </div>
                    ) : (
                        <span>Hypnotherapy</span>
                    )}
                </button>
                <div className="flex bg-gradient-to-r transition-colors duration-1000 from-fuchsia-600 to-fuchsia-400 hover:transition hover:duration-500 hover:ease-in-out hover:from-fuchsia-100 hover:to-fuchsia-200 hover:text-fuchsia-700 items-center justify-center py-4 text-2xl lg:text-3xl text-white border border-white">
                    Transpersonal Counseling & Healing
                </div>
                <div className="flex bg-gradient-to-r transition-colors duration-1000 from-fuchsia-600 to-fuchsia-400 hover:transition hover:duration-500 hover:ease-in-out hover:from-fuchsia-100 hover:to-fuchsia-200 hover:text-fuchsia-700 items-center justify-center py-4 text-2xl lg:text-3xl text-white border border-white">
                    Personal Vision Coaching
                </div>
                <div className="flex bg-gradient-to-r transition-colors duration-1000 from-fuchsia-600 to-fuchsia-400 hover:transition hover:duration-500 hover:ease-in-out hover:from-fuchsia-100 hover:to-fuchsia-200 hover:text-fuchsia-700 items-center justify-center py-4 text-2xl lg:text-3xl text-white border border-white">
                    Cognitive Behavior Therapy
                </div>
                <div className="flex bg-gradient-to-r transition-colors duration-1000 from-fuchsia-600 to-fuchsia-400 hover:transition hover:duration-500 hover:ease-in-out hover:from-fuchsia-100 hover:to-fuchsia-200 hover:text-fuchsia-700 items-center justify-center py-4 text-2xl lg:text-3xl text-white border border-white">
                    The Hoffman Process Coaching
                </div>
                <div className="flex bg-gradient-to-r transition-colors duration-1000 from-fuchsia-600 to-fuchsia-400 hover:transition hover:duration-500 hover:ease-in-out hover:from-fuchsia-100 hover:to-fuchsia-200 hover:text-fuchsia-700 items-center justify-center py-4 text-2xl lg:text-3xl text-white border border-white">
                    More...
                </div>
            </div>
        </div>
    );
};

export default WhatWeOffer;
