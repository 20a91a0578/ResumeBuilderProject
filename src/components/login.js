// import React, { useState } from 'react';

// const Login= () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   }

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(`Email: ${email}, Password: ${password}`);
//     // submit form data here
//   }

//   return (
//     <>
//     <br/><br/>
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
//       <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
//         <h2 style={{ marginBottom: '20px' }}>Log In</h2>

//         <label htmlFor="email" style={{ marginBottom: '5px' }}>Email</label>
//         <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} style={{ marginBottom: '15px' }} />

//         <label htmlFor="password" style={{ marginBottom: '5px' }}>Password</label>
//         <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} style={{ marginBottom: '15px' }} />

//         <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}>Log In</button>
//       </form>
//     </div>
//     </>
//   );
// }

// export default Login;
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
      <h2 style={{ marginBottom: '1rem' }}>Login</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email" style={{ marginRight: '1rem' }}>Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            style={{ padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ccc' }}
          />
        </div>
        <br/>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="password" style={{ marginRight: '1rem' }}>Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            style={{ padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ccc' }}
          />
          <br/><br/>
        </div>
        <button type="submit" style={{ padding: '0.5rem 1rem', borderRadius: '0.25rem', border: 'none', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer' }}>Login</button>
      </form>
    </div>
   </>
  );
}

export default Login;