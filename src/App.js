import './App.css';
import NavigationBar from './components/Navigation';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router } from 'react-router-dom';

// main app
function App() {
  return (
    <Router>
        <Sidebar />
        <NavigationBar />
    </Router>
  );
}

export default App;
