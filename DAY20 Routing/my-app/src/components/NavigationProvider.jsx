import React, { createContext, useState, useEffect, useCallback } from "react";

export const NavigationContext = createContext();

const NavigationProvider = ({ children }) => {
    const [pathname, setPathname] = useState(window.location.pathname);

    //  Navigate function updates state + URL
    const navigate = useCallback((newPath) => {
        window.history.pushState(null, "", newPath);
        setPathname(newPath);
    }, []);

    //  Listen for browser back/forward
    useEffect(() => {
        const handlePopState = () => setPathname(window.location.pathname);
        window.addEventListener("popstate", handlePopState);
        return () => window.removeEventListener("popstate", handlePopState);
    }, []);

    const value = { pathname, navigate };

    return (
        <NavigationContext.Provider value={value}>
            {children}
        </NavigationContext.Provider>
    );
};

export default NavigationProvider;
