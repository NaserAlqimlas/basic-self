import JumbotronView from "./components/JumbotronView";

function App() {
    return (
        <>
            <div className="flex items-center justify-center flex-shrink-0 text-fuchsia-700 mr-6 font-semibold text-xl ">
                Basic Self
            </div>
            <JumbotronView />
            <div className="flex justify-center items-center">
                <nav className="flex items-center justify-between flex-wrap bg-white p-6 sticky">
                    <div className="w-full block flex-shrink lg:flex lg:items-center lg:w-auto">
                        <div className="text-m invisible md:visible">
                            <a
                                href="#responsive-header"
                                className="block mt-4 lg:inline-block lg:mt-0 text-fuchsia-700 hover:text-gray-400 mr-4"
                            >
                                Who we are
                            </a>
                            <a
                                href="#responsive-header"
                                className="block mt-4 lg:inline-block lg:mt-0 text-fuchsia-700 hover:text-gray-400 mr-4"
                            >
                                What we do
                            </a>
                            <a
                                href="#responsive-header"
                                className="block mt-4 lg:inline-block lg:mt-0 text-fuchsia-700 hover:text-gray-400"
                            >
                                Testimonials
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default App;
