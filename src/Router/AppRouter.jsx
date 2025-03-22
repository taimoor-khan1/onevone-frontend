
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "../screens/Auth/Login";
import ContextEntry from "../screens/ContextEntry";
import ChallengeAccept from "../screens/ChallengeAccept";
import Winner from "../screens/Winner";
import PreviousMatch from "../screens/PreviousMatch";
import Register from "../screens/Auth/Register";
import Verification from "../screens/Auth/Verification";
import ResetPassword from "../screens/Auth/Verification copy";

// Protected Route Component
const ProtectedRoute = ({ element }) => {
  const token = localStorage.getItem("token"); // Get token from storage
  return token ? element : <Navigate to="/" replace />; // Redirect if no token
};

// Redirect to ContextEntry if logged in
const PublicRoute = ({ element }) => {
  const token = localStorage.getItem("token");
  return token ? <Navigate to="/context-entry" replace /> : element;
};

function AppRouter() {
  return (
    <Router>
      <Routes>
        {/* Public Routes (Redirect if token exists) */}
        <Route path="/" element={<PublicRoute element={<Login />} />} />
        <Route
          path="/register"
          element={<PublicRoute element={<Register />} />}
        />
        <Route
          path="/verification"
          element={<PublicRoute element={<Verification />} />}
        />
        <Route
          path="/resetpassword"
          element={<PublicRoute element={<ResetPassword />} />}
        />

        {/* Protected Routes (Accessible only if token exists) */}
        <Route
          path="/context-entry"
          element={<ProtectedRoute element={<ContextEntry />} />}
        />
        <Route
          path="/previous-match"
          element={<ProtectedRoute element={<PreviousMatch />} />}
        />
        <Route
          path="/challenge-accept"
          element={<ProtectedRoute element={<ChallengeAccept />} />}
        />
        <Route
          path="/winner"
          element={<ProtectedRoute element={<Winner />} />}
        />
      </Routes>
    </Router>
  );
}

export default AppRouter;
