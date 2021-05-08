import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={({target}) => {setName(target.value)}}
        placeholder="Name"
        required
       />
      <input
        type="tel"
        value={phone}
        pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
        onChange={({target}) => {setPhone(target.value)}}
        placeholder="Phone Number (###-###-#### format)"
        required
       />
      <input
        type="email"
        value={email}
        onChange={({target}) => {setEmail(target.value)}}
        placeholder="Email Address"
        required
       />
      <input
        type="submit"
       />
    </form>
  );
};
