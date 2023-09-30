import React, { createContext, useState } from "react";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [user, setUser] = useState({
    userName: "",
  });
  return (
    <StateContext.Provider value={{
        user: user,
        setUser: setUser
    }}>
      {children}
    </StateContext.Provider>
  );
};