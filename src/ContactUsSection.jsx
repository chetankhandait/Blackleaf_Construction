import { useState } from "react";

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
      // Handle form submission logic
      console.log("Form data submitted:", formData);
    };
  
    return (
        <div className="bg-[#202020] font-sans">

      <div className="max-w-3xl mx-auto p-8   text-white rounded-lg">
        <h2 className="text-3xl  mb-8 text-center font-sans ">
          REGISTER YOUR INTEREST
        </h2>
        <form onSubmit={handleSubmit} className="space-y-9">
          <div>
            {/* <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label> */}
            <input
              type="text"
              id="name"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="block w-full p-2 bg-[#202020]  border-b-2 border-custom focus:outline-none focus:border-yellow-700"
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
            <button
              type="submit"
              className="btn  "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
        </div>
    );
  };
  
  export default RegisterYourInterest;