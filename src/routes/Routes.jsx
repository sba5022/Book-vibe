import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Books from "../Pages/Books/Books";
import Homepage from "../Pages/Homepage";
import Errorpage from "../Pages/Errorpage";
import BookDetails from "../Pages/bookdetails/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <Homepage />
      },
      {
        path: "books",
        element: <Books />
      },
      {
        path:"/bookDetails/:id",
        Component: BookDetails,
      }
    ],
    errorElement: <Errorpage />

  }

]); 