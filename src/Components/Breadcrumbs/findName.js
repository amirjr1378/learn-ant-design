import { routes } from "../../routes";

export function findName(url) {
  const finded = routes.find(route => route.path == url);
  return finded.breadcrumbName;
}
