import React from "react";

interface WhatWeOfferProps {
    id: string;
}

const WhatWeOffer = (props: WhatWeOfferProps) => {
    const { id } = props;

    return (
        <div id={id}>
            <p>hello</p>
        </div>
    );
};

export default WhatWeOffer;
