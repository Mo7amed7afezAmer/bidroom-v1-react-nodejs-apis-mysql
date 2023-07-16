// import { useState } from "react";
// import axios from "axios";

const Login = (props) => {

    // function isLogin(e) {
        
    //     // prevent reload page
    //     e.preventDefault();

    //     // data
    //     let uname = document.getElementById("uname").value;
    //     let pass = document.getElementById("pass").value;

    //     // requset http
    //     axios({
    //         method: "post",
    //         url: "http://localhost:3535/login",
    //         data: {
    //             "username": uname,
    //             "password": pass
    //         }
    //     })
    //     .then((res) => res.data[0])
    //     .then((res) => {
    //         // check if user exist in db
    //         if (res.length > 0) {
    //             document.getElementById("login").classList.remove("open");

    //             // store data in local storage
    //             localStorage.setItem("id", res[0].id);
    //             console.log("---------> ", localStorage.getItem("id"))
    //         } else {
    //             // close login box
    //             document.getElementById("login").classList.remove("open");
    //             console.log("user not found", res);
                
    //         }
    //     });

    // }

    return (
        <div className={`login-box shadow ${props.open ? "open" : null}`} id="login">
            <form onSubmit={ props.onForm }>
                <input type="text" uname="uname" placeholder="user name" id="uname" />
                <input type="password" pass="pass" placeholder="password" id="pass" />
                <input type="submit" value="login" />
            </form>
        </div>
    )
}

export default  Login;