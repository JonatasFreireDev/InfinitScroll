import { Suspense, lazy } from "react";
import { Routes as NativeRoutes, Route } from "react-router-dom";

import { Layout } from "../components";

const Main = lazy(() => import("../pages/Main"));
const Post = lazy(() => import("../pages/Post"));
const Error = lazy(() => import("../pages/Error"));

export function Routes() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <NativeRoutes>
        <Route path="/" element={<Layout />} errorElement={<Error />}>
          <Route index element={<Main />} />
          <Route path="post/:postId" element={<Post />} />
        </Route>
      </NativeRoutes>
    </Suspense>
  );
}
