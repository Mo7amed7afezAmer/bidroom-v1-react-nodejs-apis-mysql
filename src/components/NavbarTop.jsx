import { useState } from "react";
// import profileImage from "../imgs/users/p1.jpg";
const NavbarTop = (props) => {

    
    const [isOpen, setIsOpen] = useState(false);

    function showToggler(e) {
        let el = e.target.getAttribute("data-toggler");
        document.getElementById(el).classList.toggle("d-none");
    }

    function finshSession() {
        localStorage.clear();
        setIsOpen((l) => !l);
    }

    return (
        <div className="navbar-top container">
            <div className="nav-brand">
                <h6><span>bid</span>room</h6>
            </div>
            
            
            {
                // props.p !== null
                localStorage.length > 0
                ?
                    <div className="nav-profile">
                        <div className="profile-icon" data-toggler="dropdown" id="mo7amed" onClick={ showToggler }>
                            {/* <img src={ profileImage } alt={ profileImage } /> */}
                        </div>
                        <ul className="d-none" id="dropdown">
                            <li>profile</li>
                            <li onClick={ finshSession }>logout</li>
                            <li>{ props.p !== null ? props.p.uname : null }</li>
                        </ul>
                    </div>
                : 
                    <div className="nav-button">
                        <button className="log-in" onClick={ props.addClick }>login</button>
                        <button className="sign-up">sign up</button>
                        { isOpen }
                    </div>
                    
            }
        </div>
    )
}

export default  NavbarTop;