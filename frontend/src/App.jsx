import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import ResetPasswordPageConfirm from "./pages/ResetPasswordPageConfirm";
import ActivatePage from "./pages/ActivatePage";
import ProfileEditPage from "./pages/ProfileEditPage";
import NotFoundPage from "./pages/NotFoundPage";
import LogoutButton from "./pages/LogoutButton"; // Assurez-vous d'importer LogoutButton

import './App.css';
// Remplacez './path/to/your/image.png' par le chemin réel vers votre image
import imageSideBackground from '/src/loo.png';

import 'react-toastify/dist/ReactToastify.css';
// ... autres imports

function App() {
  return (
    <>
      <Router>
        <div className="main-container">
          {/* Vous pouvez placer LogoutButton où vous préférez. Ici, pour l'exemple, il est mis directement dans App */}
          <div className="image-side" style={{ backgroundImage: `url(${imageSideBackground})` }}>
            {/* L'image est définie via le style inline pour utiliser l'image importée */}
          </div>
          <div className="form-side">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/logout" element={<LogoutButton />} />
              <Route path="/login" element={<LoginPage />} />

              <Route path="/activate/:uid/:token" element={<ActivatePage />} />
              <Route path="/reset-password" element={<ResetPasswordPage />} />
              <Route path="/password/reset/confirm/:uid/:token" element={<ResetPasswordPageConfirm />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/profile" element={<ProfileEditPage />} />
            </Routes>
          </div>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;

