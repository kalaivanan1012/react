import React from 'react'
import "../styles/Home.css"
import { Members } from './Members';


export const Home = () => {
  let customCss="style1";
  const calculateAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;  // Subtract 1 if the birthday hasn't occurred yet this year
    }
    return age;
  };
  return (


    <div className='header'>
        <h3 className={customCss}>Home</h3>
        <p className='pagecontent'>
          
        <Members name="Muthusamy A" dob={new Date("1960-10-09")} occupation="Consultant" age={calculateAge(new Date("1960-10-09"))}/>
        <Members name="Vasantha M" dob={new Date("1964-08-24")} occupation="Home Maker" age={calculateAge(new Date("1964-08-24"))}/>
        <Members name="Kalaivanan M" dob={new Date("1989-12-10")} occupation="IT-Engineer" age={calculateAge(new Date("1989-12-10"))}/>
        </p>
    </div>
  )
}
