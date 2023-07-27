import { createContext, useContext } from "react";

const UserContext = createContext();

export const Userprovider = ({ children }) => {
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
  return useContext(UserContext);
};
