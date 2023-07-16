import { useState } from "react";
import axios from "axios";

// style files
import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/main.scss";

// components
import NavbarTop from "./components/NavbarTop";
import MainContent from "./components/MainBody"
import Login from "./components/Login"
import MessageBox from "./components/MessageBox";

function App() {

  // variables - state
  const [isOpen, setIsOpen] = useState(false);
  const [msgData, setMsgData] = useState("");
  const [profileData, setProfileData] = useState(null);

  // function toggle
  function toggleOpen() {
    setIsOpen((isOpen) => !isOpen);
  }

  function isLogin(e) {
        
    // prevent reload page
    e.preventDefault();

    // data
    let uname = document.getElementById("uname").value;
    let pass = document.getElementById("pass").value;

    // client validation
    if (uname.length > 3 && pass.length >= 3) {

      // requset http
      axios({
          method: "post",
          url: "https://bidroom-v1.onrender.com/login",
          data: {
              "username": uname,
              "password": pass
          }
      })
      .then((res) => res.data[0])
      .then((res) => {
          // check if user exist in db
          if (res.length > 0) {
              document.getElementById("login").classList.remove("open");

              // store data in local storage [token]
              localStorage.setItem("id", res[0].id);
              console.log("---------> ", localStorage.getItem("id"));
              // store data in profile
              setProfileData(res[0]);
              console.log(profileData);
              // show message
              setMsgData((msgData) => msgData = "successfuly login");

          } else {
              // close login box
              document.getElementById("login").classList.remove("open");
              // show message
              setMsgData((msgData) => msgData = "user not found in DB");
              
          }
      });

    } else {

      setMsgData((msgData) => msgData = "username or password less than 3 char!");

    }


  }

  console.log(profileData);
  
  return (
    <div className="App">
      <NavbarTop p = { profileData }  addClick={ toggleOpen } />
      <MainContent />
      <Login open={ isOpen } onForm={ isLogin } />
      <MessageBox msg={ msgData } />
    </div>
  );
}

export default App;
