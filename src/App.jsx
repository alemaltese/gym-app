import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home Page</Link></li>
          <li><Link to="/members">Gym App</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;