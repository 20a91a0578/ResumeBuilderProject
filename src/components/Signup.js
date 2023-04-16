import React, { useState } from 'react';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
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



  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Password: ${password}, Confirm Password: ${confirmPassword}`);
    // submit form data here
  }

  return (
    <>
    <br/><br/>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h2 style={{ marginBottom: '20px' }}>Sign Up</h2>
      <div style={formContainer}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={{marginBottom:'15px'}}>
        <label htmlFor="name" style={labelStyle}>Name</label>
        <input type="text" id="name" name="name" style={inputStyle} value={name} onChange={handleNameChange}  />

        </div>
       <div style={{marginBottom:'15px'}}>
       <label htmlFor="email" style={labelStyle}>Email</label>
        <input type="email" id="email" name="email" value={email}  style={inputStyle}onChange={handleEmailChange}  />

       </div>
       <div style={{marginBottom:'15px'}}>
       <label htmlFor="password" style={labelStyle}>Password</label>
        <input type="password" id="password" style={inputStyle} name="password" value={password} onChange={handlePasswordChange}  />

       </div>
       <div style={{marginBottom:'15px'}}>
       <label htmlFor="confirmPassword" style={labelStyle}>Confirm Password</label>
        <input type="password" id="confirmPassword" style={inputStyle} name="confirmPassword" value={confirmPassword} onChange={handleConfirmPasswordChange}  />

       </div>
       <br/>
       <p><input type='checkbox' />&nbsp;Accept all Terms & Conditions</p>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}>Sign Up</button>
      </form>
      </div>
    </div>
    </> );
}

export default Signup;
