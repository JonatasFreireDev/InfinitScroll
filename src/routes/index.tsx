import { Routes as NativeRoutes, Route } from "react-router-dom";

export function Routes() {
  return (
    <NativeRoutes>
      <Route path="/">
        <Route index element={<div>Index</div>} />
        <Route path="post" element={<div>Posts</div>} />
      </Route>
    </NativeRoutes>
  );
}
