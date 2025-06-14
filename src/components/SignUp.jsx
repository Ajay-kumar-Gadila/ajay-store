import React, { useState } from "react";
import emailjs from '@emailjs/browser';


const SignUp = () => {
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    address: "",
    city: "",
    country: "",
    qualification: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 

  const handleSubmit = (e) => {
  e.preventDefault();

  const templateParams = {
    to_email: "support@gmail.com", // can be set in the template
    firstName: formData.firstName,
    lastName: formData.lastName,
    email: formData.email,
    mobile: `${formData.countryCode}${formData.mobile}`,
    address: formData.address,
    city: formData.city,
    country: formData.country,
    qualification: formData.qualification,
  };

  emailjs
    .send(
      'service_5mt81th',  
      'template_gpeg2rr',  
      templateParams,
      'C4MYOknSH_X3kvZfZ'    
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Form submitted and email sent to support!');
    })
    .catch((err) => {
      console.error('FAILED...', err);
      alert('Email sending failed.');
    });
};


  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      
      <div className="md:w-1/2 w-full">
        <img
          src="https://static.vecteezy.com/system/resources/previews/003/689/228/non_2x/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg"
          alt="Sign Up Visual"
          className="object-cover w-full h-full"
        />
      </div>

   
      <div className="md:w-1/2 w-full flex items-center justify-center bg-gray-100 p-8">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-md w-full max-w-lg space-y-4"
        >
          <h2 className="text-2xl font-bold text-center mb-4">Sign Up

          </h2>

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="border px-4 py-2 rounded-lg"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="border px-4 py-2 rounded-lg"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded-lg"
          />

          <div className="grid grid-cols-3 gap-2">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              required
              className="col-span-1 border px-4 py-2 rounded-lg"
            >
              <option value="+1">+1</option>
              <option value="+91">+91</option>
            </select>

            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              pattern="\d{10}"
              title="Enter 10 digit mobile number"
              required
              className="col-span-2 border px-4 py-2 rounded-lg"
            />
          </div>

          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded-lg"
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
              className="border px-4 py-2 rounded-lg"
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
              required
              className="border px-4 py-2 rounded-lg"
            />
          </div>

          <input
            type="text"
            name="qualification"
            placeholder="Qualification"
            value={formData.qualification}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
