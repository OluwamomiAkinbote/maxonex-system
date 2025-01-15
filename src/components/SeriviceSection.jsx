import React, { useState } from 'react';
import { FaCode, FaGlobe, FaBullhorn, FaPenNib } from 'react-icons/fa';

const servicesData = [
  {
    id: 'web-development',
    icon: <FaCode size={30} />,
    title: 'Web Development',
    content: 'We build scalable web applications customized to your business needs using modern technologies. Our expertise includes custom coding for both frontend and backend development, ensuring a seamless and efficient user experience.',
  },
  {
    id: 'web-design',
    icon: <FaGlobe size={30} />,
    title: 'Web Design',
    content: 'Our web design team uses CRM tools like WordPress, WooCommerce, Webflow, and other technologies to create visually stunning and user-friendly interfaces for an exceptional user experience.',
  },
  {
    id: 'graphic-design',
    icon: <FaPenNib size={30} />,
    title: 'Graphic Design',
    content: 'From logos to complete branding, we craft designs that resonate with your audience and reflect your brand identity. Our team uses Adobe Creative Suite and other advanced tools to ensure top-notch quality and creativity in all our designs.',
  },
  {
    id: 'digital-marketing',
    icon: <FaBullhorn size={30} />,
    title: 'Digital Marketing',
    content: 'We help you grow your online presence and reach your target audience through effective digital marketing strategies. Our team utilizes advanced tools like Google Analytics, SEMrush, HubSpot, Hootsuite, and Mailchimp to ensure top-notch quality and creativity in all our marketing efforts.',
  },
];

const ServicesSection = () => {
  const [activeService, setActiveService] = useState('web-development');
  const activeContent = servicesData.find((service) => service.id === activeService);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="services-section p-6 flex justify-center bg-[#0d010f]">
      <div className="max-w-md w-full">
        {/* Heading */}
        <h2 className="text-center text-2xl font-bold text-white mb-8">What We Do</h2>

        {/* Service Icons */}
        <div className="flex justify-center space-x-4 mb-6 border-b-2 border-purple-300 pb-4">
          {servicesData.map((service) => (
            <button
              key={service.id}
              className={`flex flex-col items-center space-y-1 ${
                activeService === service.id ? 'text-purple-200 border-b-4 border-purple-300' : 'text-purple-100'
              } hover:text-purple-200 transition`}
              onClick={() => setActiveService(service.id)}
            >
              {service.icon}
              <span className="text-sm">{service.title}</span>
            </button>
          ))}
        </div>

        {/* Service Content */}
        <div className="bg-purple-950 p-6 rounded shadow-md text-gray-300">
          <h3 className="text-lg font-bold mb-4 text-center">{activeContent.title}</h3>
          <p className="text-sm">{activeContent.content}</p>
        </div>

        {/* Call to Action */}
        <div className="mt-6 text-center">
          <button
            className="bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-700 transition"
            onClick={scrollToContact}
          >
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
