import React, { useState } from 'react';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '500px' }}>
        <label htmlFor="name" style={{ marginBottom: '5px' }}>Name</label>
        <input type="text" id="name" name="name" value={name} onChange={handleNameChange} style={{ marginBottom: '15px' }} />

        <label htmlFor="email" style={{ marginBottom: '5px' }}>Email</label>
        <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} style={{ marginBottom: '15px' }} />

        <label htmlFor="password" style={{ marginBottom: '5px' }}>Password</label>
        <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} style={{ marginBottom: '15px' }} />

        <label htmlFor="confirmPassword" style={{ marginBottom: '5px' }}>Confirm Password</label>
        <input type="password" id="confirmPassword" name="confirmPassword" value={confirmPassword} onChange={handleConfirmPasswordChange} style={{ marginBottom: '15px' }} />

        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}>Sign Up</button>
      </form>
    </div>
    </> );
}

export default Signup;
