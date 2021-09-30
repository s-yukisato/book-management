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
                .then(response => {
                    const data = response.data
                    if (data.status === 200 || data.status === 201) {
                        setUser(data.user);
                    }
                })
                .catch(err => setError(err))

            setLoading(false);
        };
        authenticate();
    }, []);

    return <AuthContext.Provider value={value}>{loading ? <Backdrop open={loading} /> : error ? <>現在メンテナンス中です</> : children}</AuthContext.Provider>;
}