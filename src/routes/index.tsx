import { Routes as NativeRoutes, Route } from "react-router-dom";

import { Main } from "../pages/Main";
import { Post } from "../pages/Post";

export function Routes() {
  return (
    <NativeRoutes>
      <Route path="/">
        <Route index element={<Main />} />
        <Route path="post/:postId" element={<Post />} />
      </Route>
    </NativeRoutes>
  );
}
