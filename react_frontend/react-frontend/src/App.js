import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent'
import CraeteEmployeeComponent from './components/CreateEmployeeComponent'
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
function App() {
  return (

    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path="/" element={<ListEmployeeComponent />}></Route>
            <Route path="/add-employee" element={<CraeteEmployeeComponent />}></Route>
            <Route path="/update-employee/:id" element={<UpdateEmployeeComponent />}></Route>
            <Route path="/view-employee/:id" element={<ViewEmployeeComponent />}></Route>


          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
