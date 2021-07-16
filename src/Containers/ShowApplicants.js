import React from "react";

const ShowApplicants = () => {
  return (
    <div className="pushDown">
      <table>
        <thead className="highlight">
          <tr>
            <th>Name</th>
            <th>Item Name</th>
            <th>Item Price</th>
            <th>Contact Info</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Alvin</td>
            <td>Eclair</td>
            <td>$0.87</td>
            <td>
              <button>Contact</button>
            </td>
          </tr>
          <tr>
            <td>Alan</td>
            <td>Jellybean</td>
            <td>$3.76</td>
            <td>
              <button>Contact</button>
            </td>
          </tr>
          <tr>
            <td>Jonathan</td>
            <td>Lollipop</td>
            <td>$7.00</td>
            <td>
              <button>Contact</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default ShowApplicants;
