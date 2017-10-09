import Home from './components/Home';
import Child from './components/Child';
import NotFound from './components/NotFound';

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var history = ReactRouter.useRouterHistory(History.createHashHistory)({ queryKey: false });

var routes = (
    <Router history={history}>
        <Route path="/" component ={Home}>
            <IndexRoute component={Child}/>
            <Route path="child" component = {Child}/>
            <Route path="*" component = {NotFound}/>
        </Route>
    </Router>
);

export default routes;
