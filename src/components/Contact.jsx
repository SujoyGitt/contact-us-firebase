import React, { useState } from "react";
import "./Contact.scss";
const Contact = () => {
  const [user, setuser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const getUserdata = (e) => {
    let { name, value } = e.target;
    setuser({ ...user, [name]: value });
  };
  // store data on firebase
  const postData = async (e) => {
    e.preventDefault();
    const { name, email, phone, address, message } = user;
    const res = await fetch(
      "https://react-form-fca8c-default-rtdb.firebaseio.com/react-from.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          address,
          message,
        }),
      }
    );
    if (res) {
      setuser({ name: "", email: "", phone: "", address: "", message: "" });
    }
    alert("data stored successfully");
  };
  return (
    <div className="contactContainer">
      <form action="" className="contactForm" onSubmit={postData} method="POST">
        <span className="form-title">Contact Us</span>
        <div className="input-wrapper">
          <div className="wrap-input">
            <span className="label-input">Enter Your Name</span>
            <input
              type="text"
              className="input"
              name="name"
              value={user.name}
              placeholder="Enter Your Name"
              onChange={getUserdata}
              autoComplete="off"
              required
            />
            <span className="focusInput"></span>
          </div>
          <div className="wrap-input">
            <span className="label-input">Email</span>
            <input
              type="email"
              className="input"
              name="email"
              value={user.email}
              placeholder="Enter Your Email"
              onChange={getUserdata}
              autoComplete="off"
              required
            />
            <span className="focusInput"></span>
          </div>
          <div className="wrap-input">
            <span className="label-input">Mobile Number</span>
            <input
              type="number"
              className="input"
              name="phone"
              value={user.phone}
              placeholder="Enter Your Phone Number"
              onChange={getUserdata}
              autoComplete="off"
              required
            />
            <span className="focusInput"></span>
          </div>
          <div className="wrap-input">
            <span className="label-input">Adress</span>
            <input
              type="text"
              className="input"
              name="address"
              value={user.address}
              placeholder="Enter Your Adress"
              onChange={getUserdata}
              autoComplete="off"
              required
            />
            <span className="focusInput"></span>
          </div>
          <div className="wrap-input message">
            <span className="label-input">Message</span>
            <textarea
              type="text"
              className="input"
              name="message"
              value={user.message}
              placeholder="Your message here..."
              onChange={getUserdata}
              autoComplete="off"
              required
            ></textarea>
            <span className="focusInput"></span>
          </div>
        </div>
        <button type="submit" className="submitbtn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
