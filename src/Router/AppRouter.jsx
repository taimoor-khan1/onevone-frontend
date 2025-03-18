import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../screens/Auth/Login';
import ContextEntry from '../screens/ContextEntry';
import ChallengeAccept from '../screens/ChallengeAccept';
import Winner from '../screens/Winner';
import PreviousMatch from '../screens/PreviousMatch';
import Register from '../screens/Auth/Register';
import Verification from '../screens/Auth/Verification';
import ResetPassword from '../screens/Auth/Verification copy';

function AppRouter() {
  // const socket = io('http://localhost:5000');
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/Verification' element={<Verification />} />
        <Route path='/resetpassword' element={<ResetPassword />} />
        <Route path='/context-entry' element={<ContextEntry />} />
        <Route path='/previous-match' element={<PreviousMatch />} />
        <Route path='/challenge-accept' element={<ChallengeAccept />} />
        <Route path='/winner' element={<Winner />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
