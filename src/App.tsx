import { Link, animateScroll as scroll } from "react-scroll";
import JumbotronView from "./components/JumbotronView";
import WhatWeOffer from "./components/WhatWeOffer";
import WhoWeAre from "./components/WhoWeAre";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import Testimonials from "./components/Testimonials";

function App() {
    return (
        <div>
            <div className="flex items-center justify-center flex-shrink-0 text-fuchsia-700 font-semibold text-xl pt-10">
                Basic Self
            </div>
            <div className="sticky top-0 z-50 flex justify-center items-center">
                <nav className="flex items-center justify-between flex-wrap bg-white p-4 mt-4 border-2 rounded-md border-fuchsia-600 invisible md:visible mb-5">
                    <div className="w-full block flex-shrink lg:flex lg:items-center lg:w-auto">
                        <div className="text-m">
                            <Link
                                to="whoweare"
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="block mt-4 lg:inline-block lg:mt-0 text-fuchsia-600 hover:font-bold duration-150 mr-4"
                            >
                                Who We Are
                            </Link>
                            <Link
                                to="whatweoffer"
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="block mt-4 lg:inline-block lg:mt-0 text-fuchsia-600 hover:font-bold duration-150 mr-4"
                            >
                                What We Offer
                            </Link>
                            <Link
                                to="testimonials"
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="block mt-4 lg:inline-block lg:mt-0 text-fuchsia-600 hover:font-bold duration-150 mr-4"
                            >
                                Testimonials
                            </Link>
                            <Link
                                to="contactus"
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="block mt-4 lg:inline-block lg:mt-0 text-fuchsia-600 hover:font-bold duration-150"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="relative">
                <JumbotronView />
                <div>
                    <WhoWeAre id="whoweare" />
                </div>
                <WhatWeOffer id="whatweoffer" />
                <Testimonials id="testimonials" />
                <div className="mx-12 my-12">
                    <ContactUs id="contactus" />
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default App;
