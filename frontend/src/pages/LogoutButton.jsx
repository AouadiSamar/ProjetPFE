// LogoutButton.js
import { useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';

const LogoutButton = () => {
    const dispatch = useDispatch();
    
    const handleLogout = () => {
        dispatch(logout());
        // Vous pouvez ajouter une redirection ici si nécessaire
    };

    return (
        <button onClick={handleLogout}>Déconnexion</button>
    );
};

export default LogoutButton;
