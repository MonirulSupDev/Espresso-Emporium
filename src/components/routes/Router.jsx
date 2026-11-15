import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Home/Home";
import ViewCoffee from "../ViewCoffee/ViewCoffee";
import AddCoffee from "../AddCoffee/AddCoffee";
import EditCoffee from "../EditCoffee/EditCoffee";
import Loading from "../Loading/Loading";
import ErrorPage from "../ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    HydrateFallback: Loading,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("http://localhost:5000/coffee"),
      },
      {
        path: "/view-coffee/:id",
        Component: ViewCoffee,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffee/${params.id}`),
      },
      { path: "/add-coffee", Component: AddCoffee },
      {
        path: "/edit-coffee/:id",
        Component: EditCoffee,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffee/${params.id}`),
      },
    ],
  },
]);
export default router;
