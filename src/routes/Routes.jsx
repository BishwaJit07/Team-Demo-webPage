import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../components/About";
import Home from "../components/Home";
import Contact from "../components/Contact";
import Blog from "../components/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },
      {
        path:"/blog",
        element:<Blog></Blog>
      }
    ],
  },
]);

export default router;
