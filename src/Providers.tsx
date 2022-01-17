import React from "react";
import { AuthProvider } from "./structure/AuthProvider";
import { Routes } from "./structure/Routes";

interface ProvidersProps {}

export const Providers: React.FC<ProvidersProps> = ({}) => {
  return (
    // wrapping entire app in AuthProvider
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};
