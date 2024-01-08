import { useState, useEffect } from "react";

export const useFetch = (url, dependency = "") => {
  const [reqData, setReqData] = useState(null);
  
  const getData = async (url) => {


    const res = await fetch(url);
    const data = await res.json();
   
    setReqData(data);
  };

  useEffect(() => {
    getData(url);
    console.log(dependency + " changed");
  }, [dependency]);

  return {
    reqData,
  };
};
