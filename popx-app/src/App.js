import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';
import AccountSettingsPage from './pages/AccountSettingsPage';

function App() {
  return (
    <Router>
      <div style={{ maxWidth: '430px', margin: '0 auto', minHeight: '100vh', background: '#f7f7f7' }}>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/create-account" element={<CreateAccountPage />} />
          <Route path="/account-settings" element={<AccountSettingsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;