import { createBrowserRouter } from "react-router-dom";
import Login from "../page/Login";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
]);

export default route;
