import RouteList from "../routing/Routes";

class RoutingContext {
    getCurrentPath() {
        const currentPath = window.location.pathname;

        switch (currentPath) {
            case RouteList.Home:
                return 'Home';
            default:
                return '';
        }
    }
}

export default new RoutingContext();
