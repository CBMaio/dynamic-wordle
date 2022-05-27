import axios from "axios";
import { useState } from "react";

export const useGet = () => {
  const [response, setResponse] = useState(null);

  const getData = async (endpoint) => {
    try {
      const data = await axios.get(endpoint);
      setResponse(data);

      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return [getData, response];
};
