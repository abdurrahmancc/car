import React, { useEffect, useState } from "react";

const useServiceHooks = (id) => {
  const [service, setService] = useState({});
  useEffect(() => {
    const url = `https://still-woodland-48475.herokuapp.com/service/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [id]);
  return [service];
};
export default useServiceHooks;
