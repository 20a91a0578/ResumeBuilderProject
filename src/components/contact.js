import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [query, setQuery] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handleContactNumberChange = (event) => {
    setContactNumber(event.target.value);
  }

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Contact Number: ${contactNumber}, Query: ${query}`);
    // submit form data here
  }
  const labelStyle = {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
  };

  const inputStyle = {
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    marginBottom: "15px",
    width: "100%",
  };

  const formStyle = {
    width: "80%",
    margin: "0 auto",
  };

  const formContainer = {
    backgroundColor: "#f2f2f2",
    padding: "50px",
  };

  return (
<>
<br/><br/>
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{textAlign:'center'}}>Contact Us</h2>
  <div style={formContainer}>
  <form onSubmit={handleSubmit} style={formStyle}>
        <label htmlFor="name" style={labelStyle}>Name</label>
        <input type="text" id="name" name="name" value={name} onChange={handleNameChange} style={inputStyle} />

        <label htmlFor="email" style={labelStyle}>Email</label>
        <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} style={inputStyle} />

        <label htmlFor="contactNumber" style={labelStyle}>Contact Number</label>
        <input type="tel" id="contactNumber" name="contactNumber" value={contactNumber} onChange={handleContactNumberChange} style={inputStyle} />

        <label htmlFor="query" style={labelStyle}>Query</label>
        <textarea id="query" name="query" value={query} onChange={handleQueryChange} style={inputStyle} />

        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}>Submit</button>
      </form>
  </div>
    </div>
</>
  );
}

export default Contact;
