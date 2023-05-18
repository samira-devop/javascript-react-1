import React from "react";

 export const Clicker = ({onClicked}) => {
    
    
  return (
    <div className="table">
      <th>Account Information</th>
      <tr>
        <td>Balance</td>
        <td>$100,000</td>
      </tr>
      <tr>
        <td>Interest</td>
        <td>%5.0</td>
      </tr>
      <tr>
        <td>Account Number 11-1234</td>
        <td>
            <button onClick={() =>
            onClicked("Show")}>Show</button>
        </td>
      </tr>
    </div>
  )
            
}

