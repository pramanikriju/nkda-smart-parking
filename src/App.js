import React from "react";
import { useAuth } from "./auth/AuthProvider";
import FullPageLoder from "./auth/FullPageLoader";
import AuthenticatedApp from "./auth/Authenticated";

//const AuthenticatedApp = React.lazy(() => import("./auth/Authenticated"));
const UnauthenticatedApp = React.lazy(() => import("./auth/Unauthenticated"));

export default function App() {
  const { user } = useAuth();
  console.log("App JS User", user);
  return (
    <React.Suspense fallback={<FullPageLoder />}>
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </React.Suspense>
  );
}
