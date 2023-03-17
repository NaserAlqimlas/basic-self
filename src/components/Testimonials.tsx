interface testimonialsProps {
    id: string;
}

const Testimonials = (props: testimonialsProps) => {
    const { id } = props;
    return (
        <div id={id}>
            <h3 className="flex items-center justify-center flex-shrink-0 font-semibold text-3xl pt-10">
                Testimonials
            </h3>
            <div className="grid md:grid-cols-3 m-10">
                <div className="m-10">
                    <p>
                        Abeer offers a helping hand to take you into yourself to
                        discover your own abilities and strengths. I started
                        seeing things from a different perspective that enabled
                        me to find peace within my self.
                    </p>
                    <br />
                    <p className="text-fuchsia-700">A.M. - Engineer, Bahrain</p>
                </div>
                <div className="m-10">
                    <p>
                        You were in my thoughts yesterday, and I felt how much
                        grateful that you thought of others enough to work on
                        making The Hoffman Process a reality in this part of the
                        planet! Thank you for the light you brought into my life
                    </p>
                    <br />
                    <p className="text-fuchsia-700">
                        A.M. - Communication & Autism Therapist, Saudi Arabia
                    </p>
                </div>
                <div className="m-10">
                    <p>
                        My whole life was tumbling down; I had lost my
                        orientation and misplaced the reason for my existence!
                        It too.k only ONE session with Abeer and life could
                        never have been better afterwards.
                    </p>
                    <br />
                    <p className="text-fuchsia-700">N.A. - Banker, Kuwait</p>
                </div>
                <div className="m-10">
                    <p>
                        When I first met Abeer I went in weak and I came out
                        stronger and empowered. It is great when someone can
                        help you use your full potential as a person. Going
                        through my life later on, I felt more aware of things
                        and people around me
                    </p>
                    <br />
                    <p className="text-fuchsia-700">
                        M.J. - Businesswoman, Bahrain
                    </p>
                </div>
                <div className="m-10">
                    <p>
                        Abeer helped me with overcoming a few problems which
                        were becoming obstacles to both my health and
                        professional growth. The most notable thing about her
                        therapy is that it manages to be both gentle and self
                        empowering: it was after a few weeks that I noticed,
                        ‘Oh, that problem has gone!” She facilitates an
                        atmosphere of self-healing and self growth, which I
                        respect greatly.
                    </p>
                    <br />
                    <p className="text-fuchsia-700">
                        N.T. - Consultant, Bahrain
                    </p>
                </div>
                <div className="m-10">
                    <p>
                        I want to thank you for helping me to be a better and a
                        happier person. 2016 was an amazing year and not because
                        certain events that happened but because i was stronger
                        i learnt how to love me and i was more aware of my
                        surroundings. I opened my heart and since the beginning
                        of the year, i knew how to let my self feel and i lived
                        every moment. Even the sad or difficult ones, i lived
                        them only to recover so fast and come out of it feeling
                        even more powerful than before. You changed my life and
                        i'm the real me now because of you. I don't know what
                        happened exactly or how did it happen but im just
                        thankful for it alhamdillah. And although I only visited
                        you twice and we never managed to finish or end it but i
                        thought of sharing with you that now im ok, free,
                        cheerful and I don't think i've ever ended a year with
                        so much pride and I can say it was an amazing year
                        Alhamdillah and thanks to you. I really appreciate you.
                    </p>
                    <br />
                    <p className="text-fuchsia-700"> Lama - artist</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
