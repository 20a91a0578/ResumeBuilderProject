import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle login logic here
  };

  return (
   <>
   <br/><br/>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h2 style={{ marginBottom: '1rem' }}>Welcome, Please give correct Details for Login</h2><br/><br/>
      <div style={{boxShadow:'5px 5px 4px',padding:'1%',border:'1px solid black',height:'50vh'}}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email" style={{ marginRight: '1rem' }}>Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)} placeholder='enter username'
            style={{ padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ccc' }}
          />
        </div>
        <br/>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="password" style={{ marginRight: '1rem' }}>Password:</label>
          <input
            type="password"
            id="password"
            placeholder='enter your password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            style={{ padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ccc' }}
          />
          <br/><br/>
        </div>
        <h5 style={{color:'red'}}>
          **  please ensure that all the details entered <br/>
          by you are the correct. Otherwise you  Login<br/>
            can not performed.So check once before  <br/>
            submit.
        </h5>
        <br/>
        <p><input type='checkbox' name='checkbox'/> &nbsp;Remember for Further Logins</p>
        <button type="submit" style={{ padding: '0.5rem 1rem', borderRadius: '0.25rem', border: 'none', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer' }}>Login</button>
      </form>
      </div>
    </div>
   </>
  );
}

export default Login;