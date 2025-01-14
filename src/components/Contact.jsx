import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("mrbbovpb");

  if (state.succeeded) {
    return (
      <div className=" my-8 flex flex-col items-center justify-center h-screen bg-[#0d010f] text-white">
        <h1 className="text-3xl font-bold mb-4 xs:text-xl p-4" >Thank You!</h1>
        <p className="text-lg xs:text-sm p-4">
          We’ve received your message and will get back to you soon.
        </p>
      </div>
    );
  }

  return (
  
      <div className="bg-[#0d010f] border border-purple-950 rounded-lg shadow-lg p-8 max-w-7xl w-full my-8" id="contact">
        <h1 className="text-2xl font-bold text-center text-white mb-6 xs:text-lg">
          Get in <span className="text-purple-400">Touch</span>
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First Name */}
          <div className="flex flex-col">
            <label htmlFor="firstName" className="text-white font-semibold mb-2 xs:text-sm">
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              name="fullName"
              className="bg-purple-800 border border-purple-950 rounded-lg px-4 py-2 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 xs:text-sm"
              placeholder="Your first name"
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
              className="bg-purple-800 border border-purple-950 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 xs:text-sm"
              placeholder="+1 1234567890"
              required
            />
          </div>


          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-white font-semibold mb-2 xs:text-sm">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="bg-purple-800 border border-purple-950 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 xs:text-sm"
              placeholder="Your email address"
              required
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          {/* Country */}
          <div className="flex flex-col">
            <label htmlFor="country" className="text-white font-semibold mb-2 xs:text-sm">
              Country
            </label>
            <select
              id="country"
              name="country"
              className="bg-purple-800 border border-purple-950 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 xs:text-sm"
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
          <div className="flex flex-col">
            <label htmlFor="message" className="text-white font-semibold mb-2 xs:text-sm">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="bg-purple-800 border border-purple-950 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 xs:text-sm"
              rows="5"
              placeholder="Write your message here..."
              required
            ></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={state.submitting}
              className="bg-purple-950 text-gray-300 font-semibold px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition-all duration-300 xs:px-4 xs:py-2 xs:text-sm w-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    
  );
}

function App() {
  return <ContactForm />;
}

export default App;
