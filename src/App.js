import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import IndexPage from './components/IndexPage';
import ResumePage from './components/ResumePage';
import WorkPage from './components/WorkPage';
import EducationPage from './components/EducationPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="heading">Krishna Kenny</div>
        <div className="content-container">
          <Navigation />
          <div className="content">
            <Routes>
              <Route path="/" element={<IndexPage />} /> 
              <Route path="/resume" element={<ResumePage />} /> 
              <Route path="/work" element={<WorkPage />} />
              <Route path="/education" element={<EducationPage />} />     
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
