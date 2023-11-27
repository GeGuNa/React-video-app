import { Switch, Route, Link } from 'wouter';
import Home from './pages/index.js';
import Video from './pages/video.js';
import Login from './pages/login.js';
import Recovery from './pages/recovery.js';
import Likedv from './pages/liked_videos.js';
import Watched from './pages/watch.js';
import Page from './pages/page.js';


export default function App() {
  return (<>
   
   <Switch>
		<Route path="/" component={Home} />
		<Route path="/video/:id" component={Video} />
		<Route path="/login" component={Login} />
		<Route path="/recovery" component={Recovery} />
		<Route path="/liked" component={Likedv} />
		<Route path="/watched" component={Watched} />
		<Route path="/page/:uid" component={Page} />
		<Route>404, Page not been found</Route>
   </Switch>
   
   
  </>);
}


