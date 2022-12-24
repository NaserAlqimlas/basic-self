import React from "react";

interface WhoWeAreProps {
    id: string;
}

const WhoWeAre = (props: WhoWeAreProps) => {
    const { id } = props;
    return (
        <div className="p-48" id={id}>
            Hello and welcome! Here is a little bit about me.... Since as early
            as I can remember I was fascinated with the human psyche and its
            wonders. I lived my life questioning and trying to understand
            everyone and everything around me. As a child I drove my mother
            crazy with my questions and inquisitions in an attempt to understand
            all that I saw and felt. My journey too.k me on a long road to come
            face to face with my own inner child. Who to say the least has
            taught me a wealth of information about myself and allowed me to
            pursue my passion in guiding and supporting others. It all started
            in the year 2006 when I embarked on a soul searching journey. This
            process reintroduced me to all aspects of myself. As I was working
            on the "vision for my life”, I saw myself working with children. Day
            by day I could see myself moving forward towards my vision,
            furthering my studies in this field. Three years later I became a
            qualified therapist working not with children, but with adults on
            their inner child! When I see my clients leaving my office with a
            big smile, and a sense of clarity, I know that this is my calling
            and that I have fulfilled my vision. Today and everyday, I thank God
            for showing me the way and means to put my knowledge and help in
            supporting people to be the best version of themselves.  
        </div>
    );
};

export default WhoWeAre;
