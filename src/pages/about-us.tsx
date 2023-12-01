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
                                Creating an "About Us" page for a food search engine developed by computer science students focused on combating climate change involves highlighting the unique intersection of technology, food, and environmental activism. Here's a draft:

                                ---

                                ### About Us

                                **Welcome to [Your Food Search Engine Name], the Culinary Compass for a Greener Tomorrow!**

                                We are a team of passionate computer science students united by a love for food and a commitment to fighting climate change. Our journey began in the corridors of [University/College Name], where late-night coding sessions and environmental science discussions sparked an idea - what if we could make discovering sustainable food options easier and more fun?

                                **Our Mission:**

                                Our mission is simple but ambitious: to revolutionize the way people search for food, making it easier for everyone to make environmentally-friendly choices. We believe that small changes in our diet can have a big impact on our planet, and we're here to facilitate that shift.

                                **What We Do:**

                                - **Innovative Search Technology:** Harnessing the latest in computer science, our search engine smartly categorizes and suggests food options based on sustainability, nutritional value, and culinary preferences.
                                - **Educational Insights:** We don't just show you where to find sustainable food; we educate you on why it matters. Our platform is a treasure trove of information on how food choices impact climate change.
                                - **Community Engagement:** We're building a community of food lovers who care about the planet. Share your experiences, recipes, and tips with like-minded individuals.
                                - **Supporting Local & Sustainable:** We prioritize listings that promote local, organic, and sustainable food sources, helping reduce the carbon footprint associated with food production and transportation.

                                **Our Vision:**

                                We envision a world where every meal is an opportunity to positively impact our planet. [Your Food Search Engine Name] is more than just a search engine; it's a movement towards a sustainable future, one meal at a time.

                                **Join Us:**

                                Whether you're a student, a chef, an environmental activist, or just someone who loves food, your journey towards a sustainable future starts here. Explore, learn, and be part of the change with [Your Food Search Engine Name].

                                ---

                                This text can be customized further to reflect specific features of your search engine, its backstory, or any unique elements that set it apart from other platforms.
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default AboutUs;
