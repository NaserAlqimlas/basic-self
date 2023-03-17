import { useState } from "react";

interface WhatWeOfferProps {
    id: string;
}

const WhatWeOffer = (props: WhatWeOfferProps) => {
    const { id } = props;

    const [hypnoClicked, setHypnoClicked] = useState(false);
    const [transpersonalClicked, setTranspersonalClicked] = useState(false);
    const [PVCClicked, setPVCClicked] = useState(false);
    const [CBTClicked, setCBTClicked] = useState(false);
    const [hoffmanClicked, setHoffmanClicked] = useState(false);
    const [moreClicked, setMoreClicked] = useState(false);

    const toggleHypno = () => {
        setHypnoClicked(!hypnoClicked);
    };

    const toggleTrans = () => {
        setTranspersonalClicked(!transpersonalClicked);
    };

    const togglePVC = () => {
        setPVCClicked(!PVCClicked);
    };

    const toggleCBT = () => {
        setCBTClicked(!CBTClicked);
    };

    const toggleHoffman = () => {
        setHoffmanClicked(!hoffmanClicked);
    };

    const toggleMore = () => {
        setMoreClicked(!moreClicked);
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
                <button
                    onClick={toggleTrans}
                    className="flex bg-gradient-to-r transition-colors duration-1000 from-fuchsia-600 to-fuchsia-400 hover:transition hover:duration-500 hover:ease-in-out hover:from-fuchsia-100 hover:to-fuchsia-200 hover:text-fuchsia-700 items-center justify-center py-4 text-2xl lg:text-3xl text-white border border-white"
                >
                    {transpersonalClicked ? (
                        <div>
                            Transpersonal Counseling & Healing
                            <br />
                            <br />
                            <p className="text-xl">
                                Transpersonal Counselling & Healing is a form of
                                counselling that studies the transpersonal,
                                self-transcendent or spiritual aspects of the
                                human experience. It helps connect individuals
                                to their essence, central core, and allows full
                                psychological and spiritual maturity
                            </p>
                        </div>
                    ) : (
                        <span>Transpersonal Counseling & Healing</span>
                    )}
                </button>
                <button
                    onClick={togglePVC}
                    className="flex bg-gradient-to-r transition-colors duration-1000 from-fuchsia-600 to-fuchsia-400 hover:transition hover:duration-500 hover:ease-in-out hover:from-fuchsia-100 hover:to-fuchsia-200 hover:text-fuchsia-700 items-center justify-center py-4 text-2xl lg:text-3xl text-white border border-white"
                >
                    {PVCClicked ? (
                        <div>
                            Personal Vision Coaching
                            <br />
                            <br />
                            <p className="text-xl">
                                Personal Vision Coaching is a method that
                                incorporates many modalities available in
                                meeting the needs of the client, from business
                                best practices to personal growth to even
                                spiritual matters. This process aims to bring
                                together and highlight all the possibilities
                                that will help mold and shape the visioning
                                process for individuals as they create a plan
                                and execute the daily, weekly, monthly and
                                yearly details.
                            </p>
                        </div>
                    ) : (
                        <span>Personal Vision Coaching</span>
                    )}
                </button>
                <button
                    onClick={toggleCBT}
                    className="flex bg-gradient-to-r transition-colors duration-1000 from-fuchsia-600 to-fuchsia-400 hover:transition hover:duration-500 hover:ease-in-out hover:from-fuchsia-100 hover:to-fuchsia-200 hover:text-fuchsia-700 items-center justify-center py-4 text-2xl lg:text-3xl text-white border border-white"
                >
                    {CBTClicked ? (
                        <div>
                            Cognitive Behavior Therapy
                            <br />
                            <br />
                            <p className="text-xl">
                                Cognitive Behaviour Therapy (CBT) is a flexible
                                approach to changing maladaptive or rigid
                                thought processes and feelings. It addresses
                                feelings of hopelessness, helplessness,
                                worthlessness that accompany a present state. It
                                aids in changing the pessimistic ideas,
                                unrealistic expectations, perfectionism, global
                                and overly critical self-evaluations that create
                                disorders and sustain them. CBT helps a person
                                recognize which life problems are critical and
                                which are minor serving in developing positive
                                life goals and more positive self-assessment.
                            </p>
                        </div>
                    ) : (
                        <span>Cognitive Behavior Therapy</span>
                    )}
                </button>
                <button
                    onClick={toggleHoffman}
                    className="flex bg-gradient-to-r transition-colors duration-1000 from-fuchsia-600 to-fuchsia-400 hover:transition hover:duration-500 hover:ease-in-out hover:from-fuchsia-100 hover:to-fuchsia-200 hover:text-fuchsia-700 items-center justify-center py-4 text-2xl lg:text-3xl text-white border border-white"
                >
                    {hoffmanClicked ? (
                        <div>
                            The Hoffman Process Coaching
                            <br />
                            <br />
                            <p className="text-xl">
                                The Hoffman Process Coaching (for Hoffman
                                process graduates only)* is a powerful and
                                creative method that supports you by further
                                integrating what you learned and experienced in
                                the process. The purpose of coaching is to
                                support you in applying what you learned in the
                                process on your daily life and achieving that
                                positive change you want for yourself. It is a
                                supportive and personally empowering way to
                                continue to catalyze change and transform
                                limiting behaviours, thoughts, feelings, and
                                attitudes.
                            </p>
                        </div>
                    ) : (
                        <span>The Hoffman Process Coaching</span>
                    )}
                </button>
                <button
                    onClick={toggleMore}
                    className="flex bg-gradient-to-r transition-colors duration-1000 from-fuchsia-600 to-fuchsia-400 hover:transition hover:duration-500 hover:ease-in-out hover:from-fuchsia-100 hover:to-fuchsia-200 hover:text-fuchsia-700 items-center justify-center py-4 text-2xl lg:text-3xl text-white border border-white"
                >
                    {moreClicked ? (
                        <div className="text-base">
                            <span className="text-2xl">
                                We also assist in dealing with
                            </span>
                            <br />
                            <br />
                            <ul>
                                <li>Anexity & Stress</li>
                                <li>Depression</li>
                                <li>Enhanced Concentration</li>
                                <li>Exam Stress</li>
                                <li>Fear of public speaking</li>
                                <li>Grief</li>
                                <li>Inner child issues</li>
                                <li>
                                    Insomnia and other sleep related
                                    difficulties
                                </li>
                                <li>Memory Loss</li>
                                <li>Negative Habits</li>
                                <li>Personal Development</li>
                                <li>Physical Aches & pains</li>
                                <li>Relationship issues</li>
                                <li>Self-confidence and self-esteem issues</li>
                                <li>Smoking cessations</li>
                                <li>Weight concerns</li>
                                <li>Work related stress</li>
                            </ul>
                        </div>
                    ) : (
                        <span>More...</span>
                    )}
                </button>
            </div>
        </div>
    );
};

export default WhatWeOffer;
