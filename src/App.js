import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'; // import router for loading components
import Home from './pages/index'                            // import home page

// main app
function App() {
  return (
    <Router>
        <Home />
    </Router>
  );
}

export default App;
