import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  About,
  Error,
  Landing,
  HomeLayout,
  Newsletter,
  Cocktail,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/about",
    element: <About />
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
