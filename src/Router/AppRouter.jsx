import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../screens/Login';
import ContextEntry from '../screens/ContextEntry';
import ChallengeAccept from '../screens/ChallengeAccept';
import Winner from '../screens/Winner';
import PreviousMatch from '../screens/PreviousMatch';

function AppRouter() {
  return (
    <Router basename='/one-vone'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/context-entry' element={<ContextEntry />} />
        <Route path='/previous-match' element={<PreviousMatch />} />
        <Route path='/challenge-accept' element={<ChallengeAccept />} />
        <Route path='/winner' element={<Winner />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
