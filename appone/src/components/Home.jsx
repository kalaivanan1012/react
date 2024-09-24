import React from 'react'
import "../styles/Home.css"


export const Home = () => {
  let customCss="style1";
  return (
    
    <div className='header'>
        <h3 className={customCss}>Home</h3>
        <p className='pagecontent'>
          {"Sooryavarman "+"Dhuruvachandran "}
        </p>
    </div>
  )
}
