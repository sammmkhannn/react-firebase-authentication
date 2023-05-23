import './App.css';
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthProvider from "../Auth";
function App() {
  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path='/' component={Home} />
        <Router path='/login' component={Login} />
        <Router path='signup' component={Signup}/>
      </Routes>
      </Router>
      </AuthProvider>
  );
}

export default App;
