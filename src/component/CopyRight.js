import React from "react";
import "./CopyRight.css"

const CopyRight=()=>{
    return(
        <div className="copy-right">
            <div className="container mt-3 d-flex justify-content-between">
                <div>
                    <p>
                    Copyright © 2020 Nexskill Be Productive.
                    </p>
                </div>
                <div className="d-flex ">
                    <p className="mx-2">
                    Privacy Policy
                    </p>
                    <p className="mx-2">
                    Terms of Service
                    </p>
                </div>

            </div>
        </div>
    );
};
export default CopyRight;