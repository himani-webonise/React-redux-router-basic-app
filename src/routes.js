import Home from './components/Home';
import Child from './components/Child';
import Child2 from './components/Child2';
import Register from './components/Register';
import NotFound from './components/NotFound';

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
export const history = ReactRouter.useRouterHistory(History.createHashHistory)({ queryKey: false });

var routes = (
    <Router history={history}>
        <Route path="/" component ={Home}>
            <IndexRoute component={Child}/>
            <Route path="child" component = {Child}/>
            <Route path="child2" component = {Child2}/>
            <Route path="login" component = {Register}/>
            <Route path="home" component = {Home}/>
            <Route path="*" component = {NotFound}/>
        </Route>
    </Router>
);

export default routes;
