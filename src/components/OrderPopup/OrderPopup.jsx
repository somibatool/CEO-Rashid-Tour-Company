import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import emailjs from "emailjs-com";

const OrderPopup = ({ orderPopup, setOrderPopup }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = "service_cln7sew";
    const templateID = "template_2o36os9";
    const userID = "8crWTabUCOmGyoo97";

    const emailData = {
      to_name: "Somi Batool", // Ensure this matches your EmailJS template fields
      from_name: formData.name,
      user_email: formData.email,
      address: formData.address,
    };

    try {
      // Sending email using EmailJS
      const response = await emailjs.send(serviceID, templateID, emailData, userID);
      console.log("Email sent successfully:", response.status, response.text);
      alert("Booking details sent successfully!");
      setFormData({ name: "", email: "", address: "" });
      setOrderPopup(false);
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send booking details. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold text-black/70">
                Book Your Trip
              </h1>
              <IoCloseOutline
                className="text-2xl cursor-pointer"
                onClick={() => setOrderPopup(false)}
              />
            </div>
            {/* Body */}
            <form onSubmit={handleSubmit} className="mt-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                required
              />
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full"
                >
                  {isSubmitting ? "Sending..." : "Book Now"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderPopup;
