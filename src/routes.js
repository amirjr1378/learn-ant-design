import Users from "./pages/users";
import User from "./pages/user";
import Posts from "./pages/posts";
import Post from "./pages/post";
import Login from "./pages/Login";
export const routes = [
  {
    path: "/users",
    component: Users,
    exact: true,
    breadcrumbName: "users"
  },
  {
    path: "/users/:id",
    component: User,
    exact: true,
    breadcrumbName: "edit user"
  },
  { path: "/posts", component: Posts, exact: true, breadcrumbName: "posts" },
  { path: "/posts/:id", component: Post, exact: true, breadcrumbName: "post" },
  { path: "/login", component: Login, exact: true, breadcrumbName: "login" }
];
