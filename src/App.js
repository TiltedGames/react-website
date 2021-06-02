import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; // import router for loading components
import Home from './pages/index.js';
import Recoup from './pages/recoup.js';
import Tools from './pages/tools.js';
import Contact from './pages/contact.js';

// main app
function App() {
  return (
    <Router>
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route path='/tools'>
                <Recoup />
            </Route>
            <Route path='/tools'>
                <Tools />
            </Route>
            <Route path='/contact'>
                <Contact />
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
