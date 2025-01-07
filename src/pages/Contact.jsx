import React, { useState } from "react";

const TravelInquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "",
    travelDate: "",
    travelers: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank you, ${formData.name}! We have received your travel inquiry for ${formData.destination} with ${formData.travelers} traveler(s) on ${formData.travelDate}.`
    );
    setFormData({
      name: "",
      email: "",
      destination: "",
      travelDate: "",
      travelers: "",
      message: "",
    });
  };

  return (
   <div>

<div className="container pt-14">
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About us
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            ducimus cupiditate quo harum officia perspiciatis hic ut sunt
            repudiandae, laboriosam expedita nostrum tempora, consectetur
            ita
          </p>
        
        </div>
      </div>
       <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800 p-4">
      <div className="w-full max-w-4xl bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-6">
          Plan Your Dream Trip
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 text-gray-800 dark:text-gray-100 dark:bg-gray-700 dark:border-gray-600"
              placeholder="Enter your full name"
              required
            />
          </div>
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 text-gray-800 dark:text-gray-100 dark:bg-gray-700 dark:border-gray-600"
              placeholder="Enter your email"
              required
            />
          </div>
          {/* Destination Field */}
          <div>
            <label
              htmlFor="destination"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Travel Destination
            </label>
            <input
              type="text"
              id="destination"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 text-gray-800 dark:text-gray-100 dark:bg-gray-700 dark:border-gray-600"
              placeholder="Where do you want to go?"
              required
            />
          </div>
          {/* Travel Date Field */}
          <div>
            <label
              htmlFor="travelDate"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Preferred Travel Date
            </label>
            <input
              type="date"
              id="travelDate"
              name="travelDate"
              value={formData.travelDate}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 text-gray-800 dark:text-gray-100 dark:bg-gray-700 dark:border-gray-600"
              required
            />
          </div>
          {/* Number of Travelers Field */}
          <div>
            <label
              htmlFor="travelers"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Number of Travelers
            </label>
            <input
              type="number"
              id="travelers"
              name="travelers"
              value={formData.travelers}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 text-gray-800 dark:text-gray-100 dark:bg-gray-700 dark:border-gray-600"
              placeholder="How many travelers?"
              required
            />
          </div>
          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Additional Details
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 text-gray-800 dark:text-gray-100 dark:bg-gray-700 dark:border-gray-600"
              placeholder="Tell us more about your trip..."
              rows="4"
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 px-4 rounded-md hover:scale-105 transition-transform duration-300"
          >
            Submit Inquiry
          </button>
        </form>
      </div>
    </div>
   </div>
  );
};

export default TravelInquiryForm;
