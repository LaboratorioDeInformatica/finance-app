import React from "react";
import { Route, Navigate } from "react-router-dom";

function RotasAutenticadas({ element: Component, ...rest }) {
    // Add your authentication logic here
    const isAuthenticated = true; // Replace with your actual authentication check

    return (
        <Route {...rest} element={isAuthenticated ? <Component /> : <Navigate to="/login" />} />
    );
}

export default RotasAutenticadas;
