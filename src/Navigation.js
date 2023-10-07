import {Link} from 'react-router-dom';
import './App.css';

const Navigation = () => {
  return (
    <div className="nav-bar">
      <ul>
        <li><Link to='/'>about</Link></li>
        <li><Link to='/resume'>resume</Link></li>
        <li><Link to='/work'>work</Link></li>
        <li><Link to='/education'>education</Link></li>
        <li><Link to='/projects'>projects</Link></li>
      </ul>
    </div>
  )
}

export default Navigation;