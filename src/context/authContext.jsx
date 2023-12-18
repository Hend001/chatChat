import { createContext, useEffect, useState } from "react";
// import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    /* const res = await axios.post(
      "http://localhost:4000/Backend/authentication/login",
      inputs,
      { withCredentials: true }
    );*/

    // setCurrentUser(res.data);
    setCurrentUser({
      id: 1,
      name: "Emily Jakson",
      profilePic:
        "https://images.pexels.com/photos/1835016/pexels-photo-1835016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
