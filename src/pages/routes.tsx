import {
  Route,
  Routes,
} from "react-router-dom";
import { Layout } from "../components/Layout";
import { Home } from "./auth/Home";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import PostList from "./main/PostList";
import Post from "./main/Post";

export const routes = [
  {
    index: true,
    path: "/",
    name: "Home",
    element: <Home />,
  },
  {
    path: "/login",
    name: "Login",

    element: <Login />,
  },
  {
    path: "/register",
    name: "Register",
    element: <Register />,
  },
  {
    path: "/posts",
    name: "Post List",
    element: <PostList />,
  },
  {
    path: "/post/:id",
    name: "Post",
    element: <Post />,
  },
];

export const AppRoutes = () => {
  return (
    <Layout>
      <Routes>
        {routes.map((route, i) => (
          <Route key={i} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Layout>
  );
};
