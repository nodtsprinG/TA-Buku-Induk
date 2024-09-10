import { HashRouter as Router, Routes, Route} from 'react-router-dom'
import LoginAdmin from './Pages/LoginAdmin'
import DashboardAdmin from './Pages/DashboardAdmin'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginAdmin />} />
        <Route path='/admindashboard' element={<DashboardAdmin />} />
      </Routes>
    </Router>
  );
}

export default App;
