import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from "./components/login/Login";
import { UserStorage } from "./UserContext";
import User from "./components/user/User";
import ProtectedRoute from "./components/helper/ProtectedRoute";
import Photo from './components/photo/Photo';
import UserProfile from "./components/user/UserProfile";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
            <Header />
            <main className="AppBody">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login/*" element={<Login />} />
                <Route path="/foto/:id" element={<Photo />} />
                <Route path="/perfil/:user" element={<UserProfile />} />
                <Route path="/conta/*" element={
                  <ProtectedRoute>
                    <User />
                  </ProtectedRoute>} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  )
};

export default App;
