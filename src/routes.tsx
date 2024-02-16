import React, { useMemo } from "react";
import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { NextAuth } from "./components/next-auth/next-auth.tsx";
import { GitHubSignUpForm } from "./components/githubLogin/githubLogin.tsx";
import { Google } from "./components/googleLogin/googleLogin.tsx";

const routes: RouteObject[] = [
  {
    path: "/",
    children: [
      { index: true, element: <NextAuth /> },
      { path: "githubLogin", element: <GitHubSignUpForm /> },
      { path: "goolgleLogin", element: <Google /> },
    ],
  },
];

function RouteApp() {
  const router = useMemo(() => createBrowserRouter(routes), []);

  return <RouterProvider router={router} />;
}

export default RouteApp;
