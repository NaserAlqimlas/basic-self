import { Link, animateScroll as scroll } from "react-scroll";
import JumbotronView from "./components/JumbotronView";
import WhoWeAre from "./components/WhoWeAre";

function App() {
    return (
        <div>
            <div className="lg:h-screen">
                <div className="flex items-center justify-center flex-shrink-0 text-fuchsia-700 mr-6 font-semibold text-xl pt-10">
                    Basic Self
                </div>
                <div className="flex justify-center items-center">
                    <nav className="sticky flex items-center justify-between flex-wrap bg-white p-4 mt-4">
                        <div className="w-full block flex-shrink lg:flex lg:items-center lg:w-auto">
                            <div className="text-m invisible md:visible">
                                <Link
                                    to="whoweare"
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="block mt-4 lg:inline-block lg:mt-0 text-fuchsia-600 hover:text-fuchsia-800 mr-4"
                                >
                                    Who We Are
                                </Link>
                                <Link
                                    to="whatweoffer"
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="block mt-4 lg:inline-block lg:mt-0 text-fuchsia-600 hover:text-fuchsia-800 mr-4"
                                >
                                    What We Offer
                                </Link>
                                <Link
                                    to="testimonials"
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="block mt-4 lg:inline-block lg:mt-0 text-fuchsia-600 hover:text-fuchsia-800"
                                >
                                    Testimonials
                                </Link>
                            </div>
                        </div>
                    </nav>
                </div>
                <JumbotronView />
            </div>
            <WhoWeAre id="whoweare" />
        </div>
    );
}

export default App;
