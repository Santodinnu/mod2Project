import { useState, useEffect } from "react";

export const useFetch = (url, dependency = "") => {
  const [reqData, setReqData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const getData = async (url) => {
    setLoading(true);

    try {
      const res = await fetch(url);
      const data = await res.json();
      setReqData(data);

      if (data.code === 402) {
        console.log(data.message);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData(url);
    console.log(dependency + " changed");
  }, [dependency]);

  return {
    reqData,
    isLoading,
  };
};
