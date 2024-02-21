import React, { createContext, useContext, useState } from 'react';

// Creating a new context for authentication
const AuthContext = createContext();

// Custom hook that uses the useContext Hook to allow easy access to the AuthContext
export function useAuth() {
  return useContext(AuthContext);
}

// Creating a provider that provides the AuthContext to its children
export function AuthProvider({ children }) {
  // State variables for the current user and their logged-in status
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  
  // The value that will be provided to children of AuthProvider
  const value = {
    user, // Current user
    isLoggedIn, // Boolean indicating if the user is logged in
    setUser, // Function to update the current user
    setIsLoggedIn // Function to update the logged-in status
  }

  // The AuthProvider component, which provides the 'value' to its children
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
