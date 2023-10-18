import React from "react";

export const FullName=({fname,lname,dept})=>{
    return(
        <div className="sub">
            <h3>
                {`${fname} ${lname}`}
            </h3>
            <h4>
                {dept}
            </h4>
        </div>
    );
}