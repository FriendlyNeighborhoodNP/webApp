import { useState } from "react";
import bcrypt from "bcryptjs";
import urlBase from "../urlBase";

const useAuth = () => {
  const [token, setToken] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const fetchToken = async (username, password) => {
    setLoading(true);
    try {
      password = await bcrypt.hash(password, 10);

      const authFetch = await fetch(`${urlBase}/api/auth`, {
        method: "POST",
        body: JSON.stringify({ username, password }),
      });
      const authData = await authFetch.json();
      if (authData.ok) {
        setToken(authData.token);
      } else {
        setError("Invalid Password");
      }
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  };

  return {
    token,
    loading,
    error,
    fetchToken,
  };
};

export default useAuth;
