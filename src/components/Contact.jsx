import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("mrbbovpb");

  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-[#0d010f] to-gray-900 text-white">
        <h1 className="text-3xl font-bold mb-4 xs:text-xl">Thank You!</h1>
        <p className="text-lg xs:text-sm">
          We’ve received your message and will get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0d010f] to-gray-900 my-6">
      <div className="relative max-w-3xl w-full">
        {/* Animated Gradient Border */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-800 to-gray-900 animate-gradient-x rounded-lg blur-xl"></div>

        {/* Form with Glassmorphism */}
        <div className="relative bg-white/20 backdrop-blur-md rounded-lg shadow-lg border border-white/30 p-8">
          <h1 className="text-2xl font-bold text-center text-white mb-6 xs:text-lg">
            Get in <span className="text-purple-400">Touch</span>
          </h1>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div className="flex flex-col">
              <label htmlFor="firstName" className="text-white font-semibold mb-2 xs:text-sm">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                className="bg-white/20 border border-white/30 rounded-lg px-4 py-2 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 xs:text-sm"
                placeholder="Your first name"
                required
              />
            </div>

            {/* Last Name */}
            <div className="flex flex-col">
              <label htmlFor="lastName" className="text-white font-semibold mb-2 xs:text-sm">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                className="bg-white/20 border border-white/30 rounded-lg px-4 py-2 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 xs:text-sm"
                placeholder="Your last name"
                required
              />
            </div>

            {/* WhatsApp Number */}
            <div className="flex flex-col">
              <label htmlFor="whatsapp" className="text-white font-semibold mb-2 xs:text-sm">
                WhatsApp Number
              </label>
              <input
                id="whatsapp"
                type="tel"
                name="whatsapp"
                className="bg-white/20 border border-white/30 rounded-lg px-4 py-2 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 xs:text-sm"
                placeholder="+1 1234567890"
                required
              />
            </div>

            {/* Phone Number */}
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-white font-semibold mb-2 xs:text-sm">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                className="bg-white/20 border border-white/30 rounded-lg px-4 py-2 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 xs:text-sm"
                placeholder="+1 1234567890"
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col md:col-span-2">
              <label htmlFor="email" className="text-white font-semibold mb-2 xs:text-sm">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="bg-white/20 border border-white/30 rounded-lg px-4 py-2 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 xs:text-sm"
                placeholder="Your email address"
                required
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            {/* Country */}
            <div className="flex flex-col md:col-span-2">
              <label htmlFor="country" className="text-white font-semibold mb-2 xs:text-sm">
                Country
              </label>
              <select
                id="country"
                name="country"
                className="bg-white/20 border border-white/30 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 xs:text-sm"
                required
              >
                <option value="" disabled selected>
                  Select your country
                </option>
                <option value="NG">Nigeria</option>
                <option value="GH">Ghana</option>
                <option value="US">United States</option>
                <option value="GB">United Kingdom</option>
                <option value="IN">India</option>
                <option value="CA">Canada</option>
                <option value="AU">Australia</option>
              </select>
            </div>

            {/* Message */}
            <div className="flex flex-col md:col-span-2">
              <label htmlFor="message" className="text-white font-semibold mb-2 xs:text-sm">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="bg-white/20 border border-white/30 rounded-lg px-4 py-2 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 xs:text-sm"
                rows="5"
                placeholder="Write your message here..."
                required
              ></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                disabled={state.submitting}
                className="bg-gradient-to-r from-black to-gray-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition-all duration-300 xs:px-4 xs:py-2 xs:text-sm"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function App() {
  return <ContactForm />;
}

export default App;
