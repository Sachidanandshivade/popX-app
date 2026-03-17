import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (
      storedUser &&
      email === storedUser.email &&
      password === storedUser.password
    ) {
      navigate('/account-settings');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: '#eee'
    }}>

      {/* 📱 Mobile Frame */}
      <div style={{
        width: '360px',
        height: '640px',
        border: '2px solid #ccc',
        borderRadius: '16px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        overflow: 'hidden',
        background: '#fff',
        display: 'flex',
        flexDirection: 'column',
        padding: '24px',
        boxSizing: 'border-box'
      }}>

        <h1 style={{
          fontWeight: 'bold',
          fontSize: '26px',
          lineHeight: '1.3'
        }}>
          Signin to your<br />PopX account
        </h1>

        <p style={{ color: '#888', margin: '12px 0 32px' }}>
          Enter your credentials to continue
        </p>

        {/* Form */}
        <div style={{ flex: 1 }}>

          {/* Email */}
          <div style={{
            marginBottom: '20px',
            position: 'relative',
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '10px 14px'
          }}>
            <label style={{
              color: '#6C3BF5',
              fontSize: '12px',
              position: 'absolute',
              top: '-10px',
              background: '#fff',
              padding: '0 4px'
            }}>
              Email Address
            </label>

            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter email address"
              style={{
                border: 'none',
                outline: 'none',
                width: '100%',
                background: 'transparent',
                fontSize: '15px'
              }}
            />
          </div>

          {/* Password */}
          <div style={{
            marginBottom: '28px',
            position: 'relative',
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '10px 14px'
          }}>
            <label style={{
              color: '#6C3BF5',
              fontSize: '12px',
              position: 'absolute',
              top: '-10px',
              background: '#fff',
              padding: '0 4px'
            }}>
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter password"
              style={{
                border: 'none',
                outline: 'none',
                width: '100%',
                background: 'transparent',
                fontSize: '15px'
              }}
            />
          </div>

        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          style={{
            background: email && password ? '#6C3BF5' : '#ccc',
            color: 'white',
            padding: '16px',
            borderRadius: '8px',
            border: 'none',
            width: '100%',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Login
        </button>

      </div>
    </div>
  );
}

export default LoginPage;