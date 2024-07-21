import { useState } from "react";
import emailjs from "emailjs-com";

const RegisterYourInterest = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_kghkv6i";
    const templateID = "template_1sncwpf";
    const userID = "HNkkU5UULgYlH6jc9";
    const replyTemplateID = "template_o71w0uo"; // Add your reply email template ID

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      reply_to: formData.email, // Adding reply_to field
    };

    // Send the registration email
    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log("Registration email sent!", response.status, response.text);

        emailjs
          .send(serviceID, replyTemplateID, templateParams, userID)
          .then((response) => {
            console.log("Reply email sent!", response.status, response.text);
            setFormData({
              name: "",
              email: "",
              phone: "",
            });
            alert("Thank you! Your email has been sent.");
          })
          .catch((error) => {
            console.log("Failed to send reply email...", error);
          });
      })
      .catch((error) => {
        console.log("Failed to send registration email...", error);
      });
  };

  return (
    <div className="bg-[#202020] font-sans">
      <div className="max-w-3xl mx-auto p-8 text-white rounded-lg">
        <h2 className="text-3xl mb-8 text-center font-sans">
          REGISTER YOUR INTEREST
        </h2>
        <form onSubmit={handleSubmit} className="space-y-9">
          <div>
            <input
              type="text"
              id="name"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="block w-full p-2 bg-[#202020] border-b-2 border-custom focus:outline-none focus:border-yellow-700"
              required
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              placeholder="E-mail"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full p-2 bg-[#202020] border-b-2 border-custom focus:outline-none focus:border-yellow-700"
              required
            />
          </div>
          <div>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone No."
              value={formData.phone}
              onChange={handleChange}
              className="block w-full p-2 bg-[#202020] border-b-2 border-custom focus:outline-none focus:border-yellow-700"
              required
            />
          </div>
          <div className="flex justify-center">
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterYourInterest;
