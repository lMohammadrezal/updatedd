import React, { createContext, useState } from "react";

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const[globalLoading,setGlobalLoading]=useState(true)
  const [loading, setLoading] = useState(false);
 
  return (
    <LoadingContext.Provider value={{loading,setLoading,globalLoading,setGlobalLoading}}>
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingContext;
