import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Login from "./pages/Login";
export const routes = [
  {
    path: "/page1",
    component: Page1,
    exact: true,
    breadcrumbName: "page 1"
  },
  { path: "/page2", component: Page2, exact: true, breadcrumbName: "page 2" },
  { path: "/login", component: Login, exact: true, breadcrumbName: "login" }
];
