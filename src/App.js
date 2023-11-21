import { Switch, Route, Link } from 'wouter';
import Home from './pages/index.js';
import Video from './pages/video.js';
import Login from './pages/login.js';

export default function App() {
  return (<>
   
   <Switch>
		<Route path="/" component={Home} />
		<Route path="/video/:id" component={Video} />
		<Route path="/login" component={Login} />
		<Route>404, Page not been found</Route>
   </Switch>
   
   
  </>);
}


