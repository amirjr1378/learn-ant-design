import { routes } from "../../routes";

export function findName(url) {
  const finded = routes.find(route => {
    if (route.path == url) return true;
    //check for /:id like path
    else {
      if (route.path.includes(":")) {
        let routeArr = route.path.split("/");
        const tempUrl = url.split("/");
        const id = tempUrl[tempUrl.length - 1];
        routeArr.pop(id);
        routeArr.push(id);
        routeArr = routeArr.join("/");
        if (routeArr == url) return true;

        return false;
      }
    }
  });

  return finded ? finded.breadcrumbName : "";
}
