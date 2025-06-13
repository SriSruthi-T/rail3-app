'use client';

import { createContext, useContext, useState } from 'react';

// Create the context
const UserContext = createContext();

// Context provider component
export function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: '',
    isLoggedIn: false,
  });

  // Update user data
  const login = (name) => setUser({ name, isLoggedIn: true });
  const logout = () => setUser({ name: '', isLoggedIn: false });

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

// Custom hook to access user context
export function useUser() {
  return useContext(UserContext);
}
