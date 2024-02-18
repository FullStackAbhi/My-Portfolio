import "bootstrap/dist/css/bootstrap.min.css";
import { GetAllUsers, GetSingleUser } from "./Component/Api";
import "./App.css";
import { useState, useEffect } from "react";
import Userdetails from "./Component/Userdetails";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Nav from "./Component/nav";
import Users from "./Component/Users";
function App() {
  const [userdata, setUserData] = useState(null);

  useEffect(() => {
    GetAllUsers().then((response) => {
      setUserData(response);
    });
  }, []);

  // console.log(username);

  // console.log(singleuserdata);
  return (
    <div className="flex flex-col justify-between h-screen">
      <Nav />
      <Router>
        <Routes>
          <Route
            path="/"
            element={userdata && <Users data={userdata} userdata={userdata} />}
          ></Route>
          <Route path="/:name" element={<Userdetails />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
