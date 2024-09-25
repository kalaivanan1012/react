import React from 'react'
import "../styles/Members.css"
import propTypes from "prop-types";

export const Members = (member) => {
  let customCss="style1";
  return (
    
    <div>
  <h3 className={customCss}>Members</h3>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>DOB</th>
        <th>Occupation</th>
        <th>Age</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{member.name}</td>
        <td>{member.dob?member.dob.toLocaleDateString():""}</td>
        <td>{member.occupation}</td>
        <td>{member.age}</td>
      </tr>
    </tbody>
  </table>
</div>

    
  );
}
Members.propTypes={
  
    name: propTypes.string,
    dob: propTypes.instanceOf(Date),
    occupation: propTypes.string,
    age: propTypes.number,
  
  
};
Members.defaultprops={
  name:"noname",
  occupation:"no occupation",
  age:0,

}