import { useState } from "react";
import { useNavigate } from "react-router-dom";

const server_url=process.env.REACT_APP_SERVER_URL

export const useSignup = () => {
  const navigate = useNavigate()
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const signup = async (
    name,
    dob,
    gender,
    email,
    subject,
    experience,
    location
  ) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(`${server_url}/api/prospect`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        dob,
        gender,
        email,
        subject,
        experience,
        location,
      }),
    });
    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }

    if (response.ok) {
      console.log("success")
      navigate('/')
    }
  };

  return { signup, isLoading, error };
};
