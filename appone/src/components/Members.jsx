import React from 'react'
import "../styles/Home.css"
import {Proptypes} from "prop-types";

export const Members = (member) => {
  let customCss="style1";
  return (
    
    <div className='header'>
        <h3 className={customCss}>Members</h3>
          <table>
            <thead>
            <th>Name</th>
            <th>DOB</th>
            <th>Occupation</th>
            <th>Age</th>
            </thead>
            <tbody>
            <tr>
               <td>{member.name}</td>
               <td>{member.dob.toLocaleDateString()}</td>
               <td>{member.occupation}</td>
               <td>{member.age}</td>
            </tr> 
            </tbody>
          </table>
        </div>
    
  );
}
Member.Proptypes={
  name:Proptypes.string,
  dob:Proptypes.toLocaleDateString,
  occupation:Proptypes.string,
  age:Proptypes.number,
}