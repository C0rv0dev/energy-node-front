import RouteList from "../routing/Routes";

const isInPublics = (incomingPath: string) => {
  let isInPublics = false;
  const pathNames = Object.values(RouteList.PublicRoutes);

  pathNames.forEach((path) => {
    if (path === incomingPath) {
      isInPublics = true;
    }
  });

  return isInPublics;
}

export default isInPublics;
