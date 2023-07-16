import axios from "axios";
import { useState, useEffect } from "react";

import productImage from "../imgs/a51.jpg";

const MainContent = () => {

    // variables
    let token = true;
    const [isUpdate, setIsUpdate] = useState(false);
    // const [calculation, setCalculation] = useState(250);

    

    // useEffect hook for update bid value
    useEffect(() => {
        async function readData() {
            if (token) {
                await axios({
                    method: "get",
                    url: "https://bidroom-v1.onrender.com/users/r"
                })
                .then((res) => res.data[0])
                .then((res) => {
                    document.getElementById("updateValue").innerText = res.largeValue;
                    console.log(res.largeValue)
                })
                .catch(err =>  {
                    console.log(err);
                });
            }
        }
        readData();
    }, [ isUpdate, token ]);

    setInterval(() => {
        setIsUpdate((isUpdate) => !isUpdate );
        // readData();
    }, 5000);

    function addNewValue(e) {
        
        // prevent reload page
        e.preventDefault();
        console.log(localStorage.getItem("id"));

        // data
        let bidValue = document.getElementById("bidValue").value;

        // check the user is login
        if (localStorage.getItem("id") !== undefined && localStorage.length > 0 ) {
            // requset http
            axios({
                method: "put",
                url: "https://bidroom-v1.onrender.com/users/u",
                data: {
                    "value": bidValue,
                    "userId": localStorage.getItem("id")
                }
            })
            .then((res) => console.log(res));
        } else {
            document.getElementById("login").classList.add("open");
        }

    }

    return (
        <div className="main-content container">
            <div className="row">
                <div className="col-md-6 col-sm-6">
                    <div className="product-box">
                        <div className="box-header">
                            <p className="p-title">mobile a51</p>
                            <div className="p-img">
                                <img src={ productImage } alt="productImage" />
                            </div>
                            <div className="update-val" id="updateValue"> 43 </div>
                        </div>
                        <div className="box-body shadow">
                            <ul>
                                <li>start time: 5</li>
                                <li>start time: 10</li>
                                <li>start price: 20</li>
                            </ul>
                            <form onSubmit={ addNewValue }>
                                <input type="text" name="bidValue" placeholder="add new price" id="bidValue" />
                                <input type="submit" value="add" />
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-6">
                    <div className="terms-box">
                        <div className="terms-header">
                            <h3 className="header-title">terms&conditions</h3>
                        </div>
                        <ul className="terms-body">
                            <li>start time: 5</li>
                            <li>start time: 10</li>
                            <li>here write any terms</li>
                            <li>The Price Of Bid Is Greater Than Main Price</li>
                        </ul>
                        <div className="terms-footer">
                            <input type="checkbox" id="agree" />
                            <label htmlFor="agree">agree</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default  MainContent;