import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUserInfo } from "./lib/api/auth";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import  Login  from "./pages/Login"
import { Signup } from "./pages/Signup";
import Header from "./components/Header";
import "./App.css";
import Profile from "./pages/Profile";

function App() {
  const [expenses, setExpenses] = useState([  ]);
  const [user, setUser] = useState(null);


  console.log("로그인된 유저 정보", user);

  return (
    <>
  <BrowserRouter>
        <Routes>
        < Route path="/" element={<Header user={user} setUser={setUser}/>}>
          <Route index element={<Home user={user} expenses={expenses} setExpenses={setExpenses} />} 
          />
          <Route path="/detail/:id" element={<Detail expenses={expenses} setExpenses={setExpenses} />} 
          />
          <Route path="/profile" element={<Profile setUser={setUser}/>}
          />
          </Route>
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
