import './App.css';
import NavigationBar from './components/Navigation';        // import navigation menus
import Sidebar from './components/Sidebar';                 // import sidebar
import { BrowserRouter as Router } from 'react-router-dom'; // import router for loading components

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
