import {Link} from 'react-router-dom';
import './App.css';

const Navigation = () => {
  return (
    <div className="nav-bar">
      <ul>
        <li><Link to='/'><button>about</button></Link></li>
        <li><Link to='/resume'><button>resume</button></Link></li>
        <li><Link to='/work'><button>work</button></Link></li>
        <li><Link to='/education'><button>education</button></Link></li>
        <li><Link to='/projects'><button>projects</button></Link></li>
      </ul>
    </div>
  )
}

export default Navigation;