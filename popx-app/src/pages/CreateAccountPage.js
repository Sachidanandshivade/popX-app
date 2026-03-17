import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateAccountPage() {
  const [isAgency, setIsAgency] = useState('yes');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: ''
  });
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const fields = [
    { label: 'Full Name*', key: 'fullName' },
    { label: 'Phone number*', key: 'phone' },
    { label: 'Email address*', key: 'email' },
    { label: 'Password *', key: 'password' },
    { label: 'Company name', key: 'company' },
  ];

  const handleChange = (e, key) => {
    let value = e.target.value;

    // Only numbers for phone
    if (key === 'phone') {
      value = value.replace(/\D/g, '');
    }

    setFormData({ ...formData, [key]: value });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }

    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone must be exactly 10 digits';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Minimum 6 characters required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCreate = () => {
    if (!validate()) return;

    localStorage.setItem('user', JSON.stringify({
      ...formData,
      isAgency
    }));

    navigate('/login');
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
          marginBottom: '28px'
        }}>
          Create your<br />PopX account
        </h1>

        {/* Form */}
        <div style={{ overflowY: 'auto' }}>
          {fields.map((f, i) => (
            <div key={i} style={{ marginBottom: '16px' }}>

              <div style={{
                position: 'relative',
                border: `1px solid ${errors[f.key] ? 'red' : '#ccc'}`,
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
                  {f.label}
                </label>

                <input
                  value={formData[f.key]}
                  onChange={(e) => handleChange(e, f.key)}
                  placeholder={`Enter ${f.label}`}
                  style={{
                    border: 'none',
                    outline: 'none',
                    width: '100%',
                    background: 'transparent',
                    fontSize: '15px'
                  }}
                />
              </div>

              {/* Error Message */}
              {errors[f.key] && (
                <p style={{
                  color: 'red',
                  fontSize: '12px',
                  marginTop: '4px'
                }}>
                  {errors[f.key]}
                </p>
              )}
            </div>
          ))}

          {/* Agency */}
          <div style={{ margin: '12px 0 32px' }}>
            <p style={{ fontSize: '14px', marginBottom: '8px' }}>
              Are you an Agency?*
            </p>

            <label style={{ marginRight: '24px', cursor: 'pointer' }}>
              <input
                type="radio"
                checked={isAgency === 'yes'}
                onChange={() => setIsAgency('yes')}
                style={{ marginRight: '6px' }}
              />
              Yes
            </label>

            <label style={{ cursor: 'pointer' }}>
              <input
                type="radio"
                checked={isAgency === 'no'}
                onChange={() => setIsAgency('no')}
                style={{ marginRight: '6px' }}
              />
              No
            </label>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={handleCreate}
          style={{
            background: '#6C3BF5',
            color: 'white',
            padding: '16px',
            borderRadius: '8px',
            border: 'none',
            width: '100%',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Create Account
        </button>

      </div>
    </div>
  );
}

export default CreateAccountPage;