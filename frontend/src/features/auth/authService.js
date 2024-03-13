import axios from "axios";

const BACKEND_DOMAIN = "http://localhost:8000";

const LOGIN_URL = `${BACKEND_DOMAIN}/api/v1/auth/jwt/create/`;
const ACTIVATE_URL = `${BACKEND_DOMAIN}/api/v1/auth/users/activation/`;
const RESET_PASSWORD_URL = `${BACKEND_DOMAIN}/api/v1/auth/users/reset_password/`;
const RESET_PASSWORD_CONFIRM_URL = `${BACKEND_DOMAIN}/api/v1/auth/users/reset_password_confirm/`;
const GET_USER_INFO = `${BACKEND_DOMAIN}/api/v1/auth/users/me/`;
const UPDATE_PROFILE_URL = `${BACKEND_DOMAIN}/api/v1/auth/users/me/`;  // URL pour la mise à jour du profil

// Fonctions pour les actions d'authentification (inscription, connexion, etc.)



const login = async (userData) => {
    const response = await axios.post(LOGIN_URL, userData, {
        headers: { "Content-type": "application/json" },
    });
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};

const logout = () => {
    localStorage.removeItem("user");
};

const activate = async (userData) => {
    const response = await axios.post(ACTIVATE_URL, userData, {
        headers: { "Content-type": "application/json" },
    });
    return response.data;
};

// Plus de fonctions...

// Fonction de mise à jour du profil
const updateProfile = async (userData, accessToken) => {
    const response = await axios.put(UPDATE_PROFILE_URL, userData, {
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${accessToken}`,
        },
    });
    return response.data;



    
};


const resetPassword = async (userData) => {
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    const response = await axios.post(RESET_PASSWORD_URL, userData, config)

    return response.data
}

// Reset Password

const resetPasswordConfirm = async (userData) => {
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    const response = await axios.post(RESET_PASSWORD_CONFIRM_URL, userData, config)

    return response.data
}

// Get User Info

const getUserInfo = async (accessToken) => {
    const config = {
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    }

    const response = await axios.get(GET_USER_INFO, config)

    return response.data
}




// Rassemblez toutes les fonctions dans un objet authService et exportez-le
const authService = {
    login,
    logout,
    activate,
    resetPassword,
    resetPasswordConfirm,
    getUserInfo,
    updateProfile,  // Incluez updateProfile ici
};

export default authService;
