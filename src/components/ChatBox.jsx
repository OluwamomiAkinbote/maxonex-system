import { useState } from "react";
import { FaWhatsapp, FaCommentDots } from "react-icons/fa";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";

export default function ChatBox() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed right-4 bottom-10 flex flex-col items-start gap-2">
      {open && (
        <div className="bg-white p-3 shadow-lg rounded-lg flex flex-col gap-2">
          <button
            onClick={() => window.open("https://wa.me/+2349158459513?text=Hello%2C%20Maxonex%20System%2C%20I%20need%20your%20Web%20Design%20Services", "_blank")}
            className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          >
            <FaWhatsapp size={20} /> WhatsApp
          </button>
          <button
            onClick={() => window.location.href = "/contact"}
            className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            <FaCommentDots size={20} /> Message
          </button>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700"
      >
        <IoChatbubbleEllipsesSharp size={24} />
      </button>
    </div>
  );
}
