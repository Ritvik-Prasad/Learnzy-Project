import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDataContext } from "./useDataContext";


const server_url = process.env.REACT_APP_SERVER_URL;

export const useApproveTutor = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const navigate = useNavigate()
  const {dispatch} = useDataContext()

  const approveTutor = async (_id, approve) => {
    setIsLoading(true);
    setError(null);

    dispatch({type: 'UPDATE_DATA', payload: {_id, approve}})
    const response = await fetch(`${server_url}/api/prospect/${_id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        _id,
        approve,
      }),
    });
    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
      dispatch({type: 'UPDATE_DATA', payload: {_id, approve:'null'}})
    }

    if (response.ok) {
      console.log(json)
      console.log("success");
      //dispatch({type: 'SET_DATA', payload: json})
      //navigate('/approve')
    }
  };

  return { approveTutor, isLoading, error };
};
