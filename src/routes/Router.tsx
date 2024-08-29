import {
    createBrowserRouter,
    RouteObject,
    RouterProvider,
  } from "react-router-dom";

import App from "../App";

const router: RouteObject[] = [
    {
        path: "/",
        element: <App />,
        children: [],
    }
]
const Router = () => (
    <RouterProvider
      router={createBrowserRouter(router, {
        basename: "/",
      })}
    />
  );
  
  export default Router;