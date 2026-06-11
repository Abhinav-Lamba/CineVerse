import { createContext, useContext, useMemo, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState({
    name: 'Guest',
    role: 'guest',
    email: '',
  });

  const login = (userData) => setUser(userData);
  const logout = () =>
    setUser({
      name: 'Guest',
      role: 'guest',
      email: '',
    });

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
      isAuthenticated: user.role !== 'guest',
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
