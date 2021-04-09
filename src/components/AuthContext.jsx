import { createContext } from 'react';

export const AuthContext = createContext({
    authUser: null,
    login: (authUser) => {},
    logout: () => {}
});