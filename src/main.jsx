import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Routes/App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CreatePost,{CreatepostAction} from "./Components/CreatePost.jsx";
import PostList,{Postloader} from "./Components/PostList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostList /> ,loader:Postloader},
      { path: "/create-post", element: <CreatePost />,action:CreatepostAction },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
