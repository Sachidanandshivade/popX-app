import { useNavigate } from 'react-router-dom';

function AccountSettingsPage() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user'));

  // 🔒 Protect route (optional but important)
  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f7f7f7'
    }}>

      {/* Header */}
      <div style={{
        padding: '20px 24px',
        background: '#fff',
        borderBottom: '1px solid #ddd'
      }}>
        <h2 style={{ fontSize: '18px', margin: 0 }}>
          Account Settings
        </h2>
      </div>

      {/* Profile Section */}
      <div style={{
        padding: '24px',
        background: '#fff',
        borderBottom: '1px dashed #ccc'
      }}>

        {/* Profile + Basic Info */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '20px'
        }}>

          {/* Profile Image */}
          <div style={{ position: 'relative', marginRight: '16px' }}>
            <img
              src="https://randomuser.me/api/portraits/men/44.jpg"
              alt="profile"
              style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                objectFit: 'cover'
              }}
            />

            <div style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              background: '#6C3BF5',
              borderRadius: '50%',
              width: '22px',
              height: '22px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <span style={{ color: 'white', fontSize: '11px' }}>📷</span>
            </div>
          </div>

          {/* Name + Email */}
          <div>
            <p style={{ fontWeight: 'bold', margin: 0 }}>
              {user.fullName}
            </p>
            <p style={{ color: '#666', fontSize: '13px', margin: '4px 0 0' }}>
              {user.email}
            </p>
          </div>
        </div>

        {/* Extra Info */}
        <div style={{ fontSize: '14px', lineHeight: '1.8' }}>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Company:</strong> {user.company || 'N/A'}</p>
          <p><strong>Agency:</strong> {user.isAgency === 'yes' ? 'Yes' : 'No'}</p>
        </div>

      </div>

      {/* Logout Button */}
      <div style={{ padding: '24px' }}>
        <button
          onClick={() => {
            localStorage.removeItem('user');
            navigate('/login');
          }}
          style={{
            background: '#ff4d4d',
            color: 'white',
            padding: '14px',
            border: 'none',
            borderRadius: '8px',
            width: '100%',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Logout
        </button>
      </div>

    </div>
  );
}

export default AccountSettingsPage;