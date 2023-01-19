import React from "react";

interface ContactUsProps {
    id: string;
}

const ContactUs = (props: ContactUsProps) => {
    const { id } = props;
    return (
        <div id={id} className="mb-12 text-gray-800">
            <div className="flex justify-center items-center">
                <div className="text-center lg:max-w-3xl md:max-w-xl">
                    <h2 className="text-3xl font-bold mb-12 px-6">
                        Contact us
                    </h2>
                </div>
            </div>

            <div className="flex justify-center items-center flex-wrap">
                <div className="grow-0 shrink-0 basis-auto mb-12 lg:mb-0 w-full lg:w-5/12 px-3 lg:px-6">
                    <form>
                        <div className="form-group mb-6">
                            <input
                                type="text"
                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-fuchsia-600 focus:outline-none"
                                placeholder="Name"
                            />
                        </div>
                        <div className="form-group mb-6">
                            <input
                                type="email"
                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-fuchsia-600 focus:outline-none"
                                placeholder="Email address"
                            />
                        </div>
                        <div className="form-group mb-6">
                            <textarea
                                className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-fuchsia-600 focus:outline-none"
                                rows={3}
                                placeholder="Message"
                            />
                        </div>
                        <button
                            type="submit"
                            className=" w-full px-6 py-2.5 bg-fuchsia-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-fuchsia-700 hover:shadow-lg focus:bg-fuchsia-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-fuchsia-800 active:shadow-lg transition duration-150 ease-in-out"
                        >
                            Send
                        </button>
                    </form>
                </div>
                <div className="grow-0 shrink-0 basis-auto">
                    <div className="flex flex-col flex-wrap">
                        <a
                            className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6"
                            href="mailto:info@basicself.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="flex align-start">
                                <div className="shrink-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 48 48"
                                        width="64px"
                                        height="64px"
                                    >
                                        <path
                                            fill="#1e88e5"
                                            d="M34,42H14c-4.411,0-8-3.589-8-8V14c0-4.411,3.589-8,8-8h20c4.411,0,8,3.589,8,8v20 C42,38.411,38.411,42,34,42z"
                                        />
                                        <path
                                            fill="#fff"
                                            d="M35.926,17.488L29.414,24l6.511,6.511C35.969,30.347,36,30.178,36,30V18 C36,17.822,35.969,17.653,35.926,17.488z M26.688,23.899l7.824-7.825C34.347,16.031,34.178,16,34,16H14 c-0.178,0-0.347,0.031-0.512,0.074l7.824,7.825C22.795,25.38,25.205,25.38,26.688,23.899z M24,27.009 c-1.44,0-2.873-0.542-3.99-1.605l-6.522,6.522C13.653,31.969,13.822,32,14,32h20c0.178,0,0.347-0.031,0.512-0.074l-6.522-6.522 C26.873,26.467,25.44,27.009,24,27.009z M12.074,17.488C12.031,17.653,12,17.822,12,18v12c0,0.178,0.031,0.347,0.074,0.512 L18.586,24L12.074,17.488z"
                                        />
                                    </svg>
                                </div>
                                <div className="grow ml-2">
                                    <p className="font-bold mb-1">
                                        Abeer A. AlMefleh
                                    </p>

                                    <p className="text-gray-500">
                                        Motivational Coach (DHP)
                                    </p>
                                    <p className="text-gray-500">
                                        info@basicself.com
                                    </p>
                                </div>
                            </div>
                        </a>
                        <a
                            className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6"
                            href="https://www.instagram.com/basicselfbh/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="flex items-center">
                                <div className="shrink-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 48 48"
                                        width="64px"
                                        height="64px"
                                    >
                                        <radialGradient
                                            id="yOrnnhliCrdS2gy~4tD8ma"
                                            cx="19.38"
                                            cy="42.035"
                                            r="44.899"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop offset="0" stopColor="#fd5" />
                                            <stop
                                                offset=".328"
                                                stopColor="#ff543f"
                                            />
                                            <stop
                                                offset=".348"
                                                stopColor="#fc5245"
                                            />
                                            <stop
                                                offset=".504"
                                                stopColor="#e64771"
                                            />
                                            <stop
                                                offset=".643"
                                                stopColor="#d53e91"
                                            />
                                            <stop
                                                offset=".761"
                                                stopColor="#cc39a4"
                                            />
                                            <stop
                                                offset=".841"
                                                stopColor="#c837ab"
                                            />
                                        </radialGradient>
                                        <path
                                            fill="url(#yOrnnhliCrdS2gy~4tD8ma)"
                                            d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                                        />
                                        <radialGradient
                                            id="yOrnnhliCrdS2gy~4tD8mb"
                                            cx="11.786"
                                            cy="5.54"
                                            r="29.813"
                                            gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop
                                                offset="0"
                                                stopColor="#4168c9"
                                            />
                                            <stop
                                                offset=".999"
                                                stopColor="#4168c9"
                                                stopOpacity="0"
                                            />
                                        </radialGradient>
                                        <path
                                            fill="url(#yOrnnhliCrdS2gy~4tD8mb)"
                                            d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                                        />
                                        <path
                                            fill="#fff"
                                            d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
                                        />
                                        <circle
                                            cx="31.5"
                                            cy="16.5"
                                            r="1.5"
                                            fill="#fff"
                                        />
                                        <path
                                            fill="#fff"
                                            d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
                                        />
                                    </svg>
                                </div>
                                <div className="grow ml-2">
                                    <p className="font-bold mb-1">
                                        basicselfbh
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
