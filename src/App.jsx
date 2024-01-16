import SideNav from './App/Components/SideNavBar/SideBar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './App/Pages/Login/Login.jsx';
import Dashboard from './App/Pages/Dashboard';
import Admin from './App/Pages/Approval/Admin/index.jsx';
import Dealer from './App/Pages/Approval/Dealer/index.jsx';
import Chat from './App/Pages/Chat/index.jsx';
import Notification from './App/Pages/Notification/index.jsx';
import DetailPage from './App/Pages/Notification/Components/DetailsPage/index.jsx';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/Dashboard' element={<Dashboard />} />
          <Route exact path='/Admin' element={<Admin />} />
          <Route exact path='/Dealer' element={<Dealer />} />
          <Route exact path='/Chat' element={<Chat />} />
          <Route exact path='/Notification' element={<Notification />} />
          <Route exact path='/DetailPage' element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
