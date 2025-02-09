import React, { useState } from "react";

export default function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("email", email);
    formData.append("whatsapp", whatsapp);
    formData.append("country", country);
    formData.append("message", message);
    if (file) {
      formData.append("attachment", file);
    }

    fetch("https://www.formbackend.com/f/f354f528ed7a94d5", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        return response.json();
      })
      .then(() => {
        setSuccessMessage("Form submitted successfully!");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="bg-[#0d010f] border border-purple-950 rounded-lg shadow-lg p-8 max-w-7xl w-full my-8" id="contact">
      <h1 className="text-2xl font-bold text-center text-white mb-6 xs:text-lg">
        Get in <span className="text-purple-400">Touch</span>
      </h1>
      {successMessage ? (
        <p className="text-green-500 text-center">{successMessage}</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label className="text-white font-semibold mb-2 xs:text-sm">Full Name</label>
            <input
              type="text"
              className="bg-purple-800 border border-purple-950 rounded-lg px-4 py-2 text-white"
              placeholder="Your full name"
              required
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-white font-semibold mb-2 xs:text-sm">WhatsApp Number</label>
            <input
              type="tel"
              className="bg-purple-800 border border-purple-950 rounded-lg px-4 py-2 text-white"
              placeholder="+1 1234567890"
              required
              onChange={(e) => setWhatsapp(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-white font-semibold mb-2 xs:text-sm">Email Address</label>
            <input
              type="email"
              className="bg-purple-800 border border-purple-950 rounded-lg px-4 py-2 text-white"
              placeholder="Your email address"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-white font-semibold mb-2 xs:text-sm">Country</label>
            <select
              className="bg-purple-800 border border-purple-950 rounded-lg px-4 py-2 text-white"
              required
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="" disabled selected>Select your country</option>
              <option value="NG">Nigeria</option>
              <option value="GH">Ghana</option>
              <option value="US">United States</option>
              <option value="GB">United Kingdom</option>
              <option value="IN">India</option>
              <option value="CA">Canada</option>
              <option value="AU">Australia</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-white font-semibold mb-2 xs:text-sm">Message</label>
            <textarea
              className="bg-purple-800 border border-purple-950 rounded-lg px-4 py-2 text-white"
              rows="5"
              placeholder="Write your message here..."
              required
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <div className="flex flex-col">
            <label className="text-white font-semibold mb-2 xs:text-sm">Attachment (optional)</label>
            <input
              type="file"
              className="bg-purple-800 border border-purple-950 rounded-lg px-4 py-2 text-white"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-purple-950 text-gray-300 font-semibold px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition-all duration-300 xs:px-4 xs:py-2 xs:text-sm w-full"
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
