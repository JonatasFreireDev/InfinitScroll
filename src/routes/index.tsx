import { lazy } from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";

import { Layout } from "../components";
import { RequireAuth } from "./RequireAuth";

const Main = lazy(() => import("../pages/Main"));
const Post = lazy(() => import("../pages/Post"));
const Error = lazy(() => import("../pages/Error"));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <RequireAuth>
          <Layout />
        </RequireAuth>
      }
      errorElement={<Error />}
    >
      <Route index element={<Main />} />
      <Route
        path="post/:postId"
        element={
          <RequireAuth>
            <Post />
          </RequireAuth>
        }
      />
    </Route>
  )
);
