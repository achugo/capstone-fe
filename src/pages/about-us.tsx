import Header from '@/components/Header';
import React from 'react';

const AboutUs: React.FC = () => {
    return (
        <div className="bg-[url('/landing-background.jpg')] bg-fixed bg-cover  bg-no-repeat	bg-center h-full min-h-full ">
            <div className='bg-black bg-opacity-50 h-full'>

                <Header />
                <div className="py-10 h-full ">
                    <div className="container mx-auto px-6 text-white">
                        <h1 className="text-3xl font-semibold text-gray-800 mb-8">About Us</h1>
                        <div className="flex flex-wrap -mx-4">
                            <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
                                <img
                                    src="./logo.jpg"
                                    alt="About Us"
                                    className="w-full h-auto rounded shadow"
                                />
                            </div>
                            <div className="w-full md:w-1/2 px-4">
                                <p className="text-gray-700 mb-4">
                                    [Your Company's Story]
                                </p>
                                <p className="text-gray-700 mb-4">
                                    [More Details]
                                </p>
                                <p className="text-gray-700">
                                    [Mission, Vision, etc.]
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default AboutUs;
