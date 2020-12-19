import './App.css';
import {HashRouter as Router,Route,Link} from 'react-router-dom';
import Home from './pages/home';
import Me from "./pages/me";
import Other from './pages/other';

function App() {
  return (
    <Router>
    <div className="App">  
       <header>
          <Link  className="link" to="/">首页</Link>
          <Link  className="link"  to="/me">关于我们</Link>
          <Link  className="link"  to="/other">其他</Link>
       </header>
       <Route path="/" exact component={Home}></Route>
       <Route path="/me" component={Me}></Route>
       <Route path="/other" component={Other}></Route>
    </div>
    </Router>
  );
}

export default App;
