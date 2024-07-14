export interface GlobalContextType {
    isLoggedIn: boolean;
    setIsLoggedIn: (loggedIn: boolean) => void;
    user: any | null;
    setUser: (user: any | null) => void;
    isLoading: boolean;
}
