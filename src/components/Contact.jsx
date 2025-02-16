import React, { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("+");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("message", message);
    if (file) {
      formData.append("file", file);
    }

    formData.append("website", ""); // Hidden field for spam protection

    try {
      const response = await fetch("https://www.formbackend.com/f/f354f528ed7a94d5", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      setSuccessMessage("Form submitted successfully!");

      // ✅ Fire Facebook Pixel "CompleteRegistration" event
      if (window.fbq) {
        window.fbq("track", "CompleteRegistration");
      }

      // ✅ Fire Twitter Event Pixel
      if (window.twq) {
        window.twq("event", "tw-p531h-p531i", {
          email_address: email || null,
          phone_number: phone || null,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setSuccessMessage("Failed to submit. Try again.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="flex justify-center items-center py-10 bg-[#0d010f] font-openSans">
      <div className="w-full max-w-2xl p-6 bg-[#0d010f] rounded-lg shadow-md border border-[#320234] text-[#cfc0d8]">
        <h2 className="text-xl font-bold mb-4 text-center">INTERESTED IN DISCUSSING A PROJECT WITH US?</h2>
        <p className="mb-6 text-center text-[#cfc0d8] text-sm">
          Do you have a project in mind that you feel our approach would work well for? We’re always happy to discuss
          your project with you and put together a free proposal. Just fill out the form below or give us a call to get
          started!
        </p>

        {successMessage.length === 0 ? (
          <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#cfc0d8]">
                  What's your name? *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full mt-1 p-2 bg-transparent border-b border-[#320234] focus:outline-none focus:border-[#6d216d] transition"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#cfc0d8]">
                  Your email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full mt-1 p-2 bg-transparent border-b border-[#320234] focus:outline-none focus:border-[#6d216d] transition"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#cfc0d8]">
                  Enter your phone number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full mt-1 p-2 bg-transparent border-b border-[#320234] focus:outline-none focus:border-[#6d216d] transition"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-[#cfc0d8]">
                  Your company (if applicable)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full mt-1 p-2 bg-transparent border-b border-[#320234] focus:outline-none focus:border-[#6d216d] transition"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#cfc0d8]">
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full mt-1 p-2 bg-transparent border-b border-[#320234] focus:outline-none focus:border-[#6d216d] transition"
                placeholder="Enter your message here..."
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <div>
              <label htmlFor="file" className="block text-sm font-medium text-[#cfc0d8]">
                Send us your brief (if applicable)
              </label>
              <input
                type="file"
                id="file"
                name="file"
                className="w-full mt-2 p-2 bg-transparent border border-[#320234] rounded focus:outline-none focus:border-[#6d216d] transition"
                onChange={(e) => setFile(e.target.files[0])}
              />
              <p className="mt-1 text-sm text-[#7a617a]">Accepted file types: jpg, png, pdf, doc, ppt, docx.</p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 bg-[#6d216d] text-white font-semibold rounded-md hover:bg-[#87228c] transition"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        ) : (
          <p className="text-center text-green-500 font-medium">{successMessage}</p>
        )}
      </div>
    </section>
  );
}
