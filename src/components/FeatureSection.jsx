import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const features = [
    {
        title: 'Expertise from Years of Experience',
        description: 'Our team brings over 4 years of expertise in web development, digital marketing, and web design to ensure your projects achieve outstanding results.',
    },
    {
        title: 'Innovative Digital Strategies',
        description: 'We lead the pack in digital innovation, crafting forward-thinking strategies that keep you ahead in the rapidly evolving online world.',
    },
    {
        title: 'Client-First Philosophy',
        description: 'Your success is our priority. Our solutions are customized to meet your unique needs and exceed your expectations.',
    },
];

const FeatureSection = () => {
    return (
        <section className="py-8 px-4">
            <h1 className="text-3xl font-bold mb-8 text-center">Our Digital Agency</h1>
            <div className="flex flex-col space-y-8">
                {features.map((feature, index) => (
                    <div key={index} className="relative flex items-start xs:mx-4">
                        <FaCheckCircle className="text-green-500 xs:mr-2 md:mr-4" size={24} />
                        <div className="ml-8">
                            <h2 className="md:text-xl xs:text-md font-semibold">{feature.title}</h2>
                            <p className="mt-2 text-gray-600 xs:text-sm md:text-xl">{feature.description}</p>
                        </div>
                        {index < features.length - 1 && (
                            <div className="absolute xs:left-1 md:left-1 top-7 h-full w-0.5 bg-gradient-to-b from-green-500 to-transparent" style={{ height: 'calc(100% + 2rem)', top: '1.5rem' }}></div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeatureSection;
