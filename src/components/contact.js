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

  return (
<>
<br/><br/>
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{ marginBottom: '20px' }}>Contact Us</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '500px' }}>
        <label htmlFor="name" style={{ marginBottom: '5px' }}>Name</label>
        <input type="text" id="name" name="name" value={name} onChange={handleNameChange} style={{ marginBottom: '15px' }} />

        <label htmlFor="email" style={{ marginBottom: '5px' }}>Email</label>
        <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} style={{ marginBottom: '15px' }} />

        <label htmlFor="contactNumber" style={{ marginBottom: '5px' }}>Contact Number</label>
        <input type="tel" id="contactNumber" name="contactNumber" value={contactNumber} onChange={handleContactNumberChange} style={{ marginBottom: '15px' }} />

        <label htmlFor="query" style={{ marginBottom: '5px' }}>Query</label>
        <textarea id="query" name="query" value={query} onChange={handleQueryChange} style={{ marginBottom: '15px' }} />

        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}>Submit</button>
      </form>
    </div>
</>
  );
}

export default Contact;
