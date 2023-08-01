import React from "react";
import { useUserContext } from "../context/user_context";
import { useAuth0 } from "@auth0/auth0-react";
const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useUserContext();
  if (isLoading) {
    return (
      <div className="grid justify-center items-center w-full h-screen text-[2rem]">
        Loading...
      </div>
    );
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return <>{children}</>;
};

export default AuthWrapper;
