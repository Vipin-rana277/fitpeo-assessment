import React from "react";
import Hexagonal from "../assets/images/Hexagonal.png";
import key from "../assets/images/key.png";
import Contact from "../assets/images/Contact.png";
import Income from "../assets/images/Income.png";
import promotions from "../assets/images/promotions.png";
import Help from "../assets/images/Help.png";
import profile from "../assets/images/profile.png";

export default function Sidebar() {
    return (
        <div className="sideBar">
            <h3><span><img alt="hex" style={{
                height: "19px",
                width: "18px"
            }} src={Hexagonal} />
            </span>
                Dashboard
            </h3>
            <div className="container">
                <ul className="dashboard">
                    <li><span><img style={{
                        height: "15px",
                        width: "15px"
                    }} src={key} /></span>Dashboard</li>
                    <li><span><img style={{
                        height: "15px",
                        width: "15px"
                    }} src={Hexagonal} /></span>Product</li>
                    <li><span><img style={{ height: "15px", width: "15px" }} src={Contact} /></span>Customers</li>
                    <li><span><img style={{
                        height: "15px",
                        width: "15px"
                    }} src={Income} /> </span>Income</li>
                    <li><span><img style={{
                        height: "15px",
                        width: "15px"
                    }} src={promotions} /></span>Promote</li>
                    <li><span><img style={{
                        height: "15px",
                        width: "15px"
                    }} src={Help} /></span>Help</li>
                </ul>
                <ul>
                    <li className="footerOfDashboard"><span><img style={{
                        height: "15px",
                        width: "15px"
                    }} src={profile} /></span>Evano</li>
                </ul>
            </div>
        </div>
    )
}