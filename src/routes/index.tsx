import { Routes as NativeRoutes, Route } from "react-router-dom";

import Main from "../pages/Main";

export function Routes() {
  return (
    <NativeRoutes>
      <Route path="/">
        <Route index element={<Main />} />
        <Route path="post" element={<div>Posts</div>} />
      </Route>
    </NativeRoutes>
  );
}
