import React, { useState } from "react";
import { FullName } from "./components/FullName";
import "./components/commom.css";
import { SalSlip } from "./components/SalSlip";

function App() {
  const [basicsal, setBasicsal] = useState(0);
  const [fname, setFname] = useState(" ");
  const [lname, setLname] = useState(" ");
  return (
    <div className="main">
<input
        type="text"
        placeholder="Enter Your EmpID"
        // onChange={(e) => s(Number(e.target.value))}
      />

      <input
        type="text"
        onChange={(e) => setFname(e.target.value)}
        placeholder="Enter Your First Name"
      />
      <input
        type="text"
        onChange={(e) => setLname(e.target.value)}
        placeholder="Enter Your Last Name"
      />

<input
        type="text"
        placeholder="Enter Your Department"
        // onChange={(e) => s(Number(e.target.value))}
      />

      <input
        type="number"
        placeholder="Enter Your Basic Salary"
        onChange={(e) => setBasicsal(Number(e.target.value))}
      />

      <FullName fname={fname} lname={lname} dept={dept}  />
      <SalSlip basicsal={basicsal} />
     
    </div>
  );
}

export default App;
