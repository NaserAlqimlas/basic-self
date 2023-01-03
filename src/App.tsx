import { Link, animateScroll as scroll } from "react-scroll";
import JumbotronView from "./components/JumbotronView";
import WhoWeAre from "./components/WhoWeAre";

function App() {
    return (
        <div>
            <div className="h-screen">
                <div className="flex items-center justify-center flex-shrink-0 text-fuchsia-700 mr-6 font-semibold text-xl pt-10">
                    Basic Self
                </div>
                <div className="flex justify-center items-center">
                    <nav className="flex items-center justify-between flex-wrap bg-white p-6 sticky">
                        <div className="w-full block flex-shrink lg:flex lg:items-center lg:w-auto">
                            <div className="text-m invisible md:visible">
                                <Link
                                    to="sec1"
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="block mt-4 lg:inline-block lg:mt-0 text-fuchsia-600 hover:text-fuchsia-800 mr-4"
                                >
                                    Who We Are
                                </Link>

                                <a className="block mt-4 lg:inline-block lg:mt-0 text-fuchsia-600 hover:text-fuchsia-800 mr-4">
                                    What We Offer
                                </a>
                                <a className="block mt-4 lg:inline-block lg:mt-0 text-fuchsia-600 hover:text-fuchsia-800">
                                    Testimonials
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
                <JumbotronView />
            </div>
            <WhoWeAre id="sec1" />
        </div>
    );
}

export default App;
