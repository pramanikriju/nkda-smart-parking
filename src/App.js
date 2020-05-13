import React from "react";
import { useAuth } from "./auth/AuthProvider";
import FullPageLoder from "./auth/FullPageLoader";

const AuthenticatedApp = React.lazy(() => import("./auth/Authenticated"));
const UnauthenticatedApp = React.lazy(() => import("./auth/Unauthenticated"));

export default function App() {
  const { user } = useAuth();
  return (
    <React.Suspense fallback={<FullPageLoder />}>
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </React.Suspense>
  );
}
