import React from "react";

export const SalSlip = ({ basicsal }) => {
  return (
    <div className="sub">
      <table>
        <tr>
          <td>Basic Salary</td>
          <td>{basicsal}</td>
        </tr>
        <tr>
          <td>D.A</td>
          <td>{basicsal * 0.05}</td>
        </tr>
        <tr>
          <td>House Rent Allowance</td>
          <td>{basicsal * 0.4}</td>
        </tr>
        <tr>
          <td>Conveyance Allowance</td>
          <td>{basicsal * 0.2}</td>
        </tr>
        <tr>
          <td>Medical Allowance</td>
          <td>1500</td>
        </tr>
        <tr>
          <td>Special Allowance</td>
          <td>{basicsal * 0.5}</td>
        </tr>
        <tr >
          <td>Total Salary</td>
          <td><b>
            {basicsal +
              basicsal * 0.5 +
              basicsal * 0.2 +
              basicsal * 0.4 +
              basicsal * 0.05 +
              1500}
              </b>
          </td>
        </tr>
      </table>
    </div>
  );
};
