import { Suspense, lazy } from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";

import { Layout, ScrollToTop } from "../components";

const Main = lazy(() => import("../pages/Main"));
const Post = lazy(() => import("../pages/Post"));
const Error = lazy(() => import("../pages/Error"));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <Suspense fallback={<div>Carregando...</div>}>
          <ScrollToTop />
          <Layout />
        </Suspense>
      }
      errorElement={<Error />}
    >
      <Route index element={<Main />} />
      <Route path="post/:postId" element={<Post />} />
    </Route>
  )
);
