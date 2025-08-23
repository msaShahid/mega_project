import { useState } from "react";
import { AuthContext } from "./auth-context";

const AuthProvider = ({ children }) => {

 const [user, setUser] = useState(null);

  const login = (userData) => {
    console.log('Logging in user:', userData);
    setUser(userData);
  };

  const logout = () => {
    console.log('Logging out...');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


export default AuthProvider;
