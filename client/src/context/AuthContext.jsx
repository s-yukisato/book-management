import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

import Backdrop from "../components/Backdrop";

const AuthContext = createContext();

export function useAuthContext() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const value = {
        user,
        loading,
        error
    };

    useEffect(() => {
        const authenticate = async () => {

            await axios.get("http://localhost:3001/api/v1/user/auth")
                .then(response => setUser(response.data))
                .catch(error => setError(error))

            setLoading(false);
        };
        authenticate();
        console.log('auth')

    }, []);

    return <AuthContext.Provider value={value}>{loading ? <Backdrop open={loading} /> : children}</AuthContext.Provider>;
}