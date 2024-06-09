import React, { useState } from "react";

const SubscribeNewsletter = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Form data submitted:", formData);
  };

  return (
    <div className=" font-sans  mx-auto py-12 text-center bg-[#eeeeee]">
      <h2 className="text-3xl   mb-8">SUBSCRIBE TO OUR NEWSLETTER</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center md:flex-row md:justify-center md:items-end"
      >
        <div className="md:mr-4 mb-4 md:mb-0">
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="block bg-[#eeeeee]  w-full md:w-auto px-4 py-2 border-b-2 border-custom focus:outline-none focus:border-gray-600"
            required
          />
        </div>
        <div className="md:mr-4 mb-4 md:mb-0">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="block bg-[#eeeeee] w-full md:w-auto px-4 py-2 border-b-2 border-custom focus:outline-none focus:border-yellow-600"
            required
          />
        </div>
        <button
          type="submit"
          className="btn "
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default SubscribeNewsletter;