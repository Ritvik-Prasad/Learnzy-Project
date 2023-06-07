import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

const server_url=process.env.REACT_APP_SERVER_URL

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
  console.log(server_url)

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(`${server_url}/api/user/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }

    if (response.ok) {
      //saving user tp local storage
      localStorage.setItem("user", JSON.stringify(json));
      //updating auth context
      dispatch({ type: "LOGIN", payload: json });
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
