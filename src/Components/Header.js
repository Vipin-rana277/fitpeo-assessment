import React from "react";
import hello from "../assets/images/hello.png";
import Dollar from "../assets/images/Dollar.png";

export default function Header() {
    return (
        <div className="bothSection">
            <div className="upperSection">
                <h4>Hello FitPeo <span><img style={{
                    height: "15px",
                    width: "15px"
                }} src={hello} /></span>, </h4>
                <input type="text" placeholder="search" />
            </div>
            <div className="lowerSection">
                <box>
                    <img src={Dollar} />
                    <p>Earning <br></br>
                        $ 198k this month
                    </p>
                </box>
                <box>
                    <img src={Dollar} />
                    <p>Orders <br></br>
                        $ 2.4k this month
                    </p>
                </box>
                <box>
                    <img src={Dollar} />
                    <p>Balance <br></br>
                        $ 2.4k this month
                    </p>
                </box>
                <box>
                    <img src={Dollar} />
                    <p>Total Sales <br></br>
                        $ 89k this month
                    </p>
                </box>
            </div>
        </div>
    )
}