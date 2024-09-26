import React from 'react'
import "../styles/Home.css"
import { Members } from './Members';
import { ChildComponent } from './ChildComponent';
import { MembersArray } from './MembersArray';


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
  const fmembers=[
    {id:"1",name:"Muthusamy A",dob:new Date("1960-10-09"),age:calculateAge(new Date("1960-10-09")),occupation:"Consultant"},
    {id:"2",name:"Vasantha M",dob:new Date("1964-08-24"),age:calculateAge(new Date("1964-08-24")),occupation:"Home Maker"},
    {id:"3",name:"Kalaivanan M",dob:new Date("1989-12-10"),age:calculateAge(new Date("1989-12-10")),occupation:"IT Engineer"},
    {id:"4",name:"Vimala E",dob:new Date("1996-01-30"),age:calculateAge(new Date("1996-01-30")),occupation:"Home Maker"},
    ];
  return (


    <div className='header'>
         <h3 className={customCss}>Home</h3>
        {/*<p className='pagecontent'> */}
          
        <Members name="Muthusamy A" dob={new Date("1960-10-09")} occupation="Consultant" age={calculateAge(new Date("1960-10-09"))}/>
        <Members name="Vasantha M" dob={new Date("1964-08-24")} occupation="Home Maker" age={calculateAge(new Date("1964-08-24"))}/>
        <Members name="Kalaivanan M" dob={new Date("1989-12-10")} occupation="IT-Engineer" age={calculateAge(new Date("1989-12-10"))}/>
        <Members name="Vimala E" dob={new Date("1996-01-30")} occupation={"Home Maker"} age={calculateAge(new Date("1996-01-30"))}/>
        <Members/>
        <ChildComponent>
          <p> Para-1</p>
       
        </ChildComponent>
       <MembersArray members={fmembers}/>

        {/* </p> */}
    </div>
  )
}
