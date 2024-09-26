import React from 'react';
import PropTypes from 'prop-types'; // Corrected the import of PropTypes
import "../styles/Members.css";

export const MembersArray = ({ members }) => {
  const customCss = "style1";

  // Helper function to format the date
  const formatDate = (dob) => {
    if (!dob) return '';
    const date = new Date(dob);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based in JS
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <div>
      <h3 className={customCss}>Members</h3>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>DOB</th>
            <th>Age</th>
            <th>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td>{member.id}</td>
              <td>{member.name}</td>
              <td>{formatDate(member.dob)}</td>
              <td>{member.age}</td>
              <td>{member.occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Validate the props with PropTypes
MembersArray.propTypes = {
  members: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      dob: PropTypes.instanceOf(Date).isRequired,
      age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      occupation: PropTypes.string.isRequired
    })
  ).isRequired,
};
