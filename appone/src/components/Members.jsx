import React from 'react'
import "../styles/Home.css"


export const Members = (member) => {
  let customCss="style1";
  return (
    
    <div className='header'>
        <h3 className={customCss}>Members</h3>
        <p className='pagecontent'>
          <table>
            <th>Name</th>
            <th>DOB</th>
            <th>Occupation</th>
            <tr>
               <td>{member.name}</td>
               <td>{member.dob}</td>
               <td>{member.occupation}</td>
            </tr>  
          </table>
        </p>
    </div>
  )
}
