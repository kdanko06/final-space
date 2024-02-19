import Home from './Home';
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (<>

    <Router>
      <div>
        <div className='Top-navigation'>
          <div className='Nav-button'></div>
        </div>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </div>
    </Router>
  </>
  );
}

export default App;