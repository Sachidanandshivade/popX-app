import { useNavigate } from 'react-router-dom';

function WelcomePage() {
  const navigate = useNavigate();
  return (
  <div style={{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  background: '#eee' // optional outer background
}}>
  
  <div style={{
    width: '360px',              // 👈 mobile width
    height: '640px',             // 👈 mobile height
    border: '2px solid #ccc',    // 👈 border added
    borderRadius: '16px',        // 👈 rounded corners
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)', // 👈 nice shadow
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: '24px',
    boxSizing: 'border-box',
    background: '#fff'
  }}>
    
    <div style={{ marginBottom: '40px' }}>
      
      <h1 style={{ fontWeight: 'bold', fontSize: '28px' }}>
        Welcome to PopX
      </h1>

      <p style={{ color: '#888', margin: '12px 0 32px' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <button
        onClick={() => navigate('/create-account')}
        style={{
          background: '#6C3BF5',
          color: 'white',
          padding: '16px',
          borderRadius: '8px',
          border: 'none',
          width: '100%',
          fontSize: '16px',
          fontWeight: 'bold',
          marginBottom: '12px',
          cursor: 'pointer'
        }}
      >
        Create Account
      </button>

      <button
        onClick={() => navigate('/login')}
        style={{
          background: '#D9CAFF',
          color: '#333',
          padding: '16px',
          borderRadius: '8px',
          border: 'none',
          width: '100%',
          fontSize: '16px',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}
      >
        Already Registered? Login
      </button>

    </div>
  </div>
</div>
  );
}
export default WelcomePage;