import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../components/About";
import Home from "../components/Home";
import Contact from "../components/Contact";
import Blog from "../components/Blog";
import Footer from "../components/Footer/Footer";

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
      },
      {
        path:"/footer",
        element:<Footer></Footer>
      }
    ],
  },
]);

export default router;
