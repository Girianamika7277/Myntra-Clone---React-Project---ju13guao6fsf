import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddQuestion from "./components/AddQuestion";
import NewRegistrationPage from "./components/NewRegistrationPage";
import AddAnswer from "./components/AddAnswer";
import LoginPage from "./components/LoginPage";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";



const App = () => {
  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/registration" element={<NewRegistrationPage />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/addQuestion" element={<AddQuestion />} />
          <Route path="/addAnswer" element={<AddAnswer/>} />
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;