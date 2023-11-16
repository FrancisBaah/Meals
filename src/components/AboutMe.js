import React from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";

const AboutMe = () => {
  return (
    <Layout>
      <div style={{width: '100%', display: 'flex', flexDirection:"column", alignItems:"center"}}>
      <p style={{fontSize:"20px", maxWidth: "700px", lineHeight: '30px'}}>
        My name is Francis Baah, and I am a frontend developer with four years
        of experience in React and Next.js. Additionally, I have about a year of
        experience in Solidity, utilizing the Foundry framework to develop smart
        contracts. I am passionate about blockchain technology and am
        continually expanding my knowledge in this field.
      </p>
      <p style={{fontSize:"20px", maxWidth:"700px", lineHeight:"30px"}}>
        I am interested in the opportunity to be part of your team. I believe my
        skills and experiences align well with the requirements of the position
        <br/>
        Thank you for considering my profile.
      </p>
      <div>
      <Link target={"_blank"} to={"https://www.linkedin.com/in/francis-baah-65269b25b/"}>
        <FaLinkedin style={{fontSize: "30px"}} />
      </Link>
      <Link target={"_blank"} to="mailto:baahfrancis88@gmail.com">Mail me directly</Link>
   </div> </div></Layout>
  );
};

export default AboutMe;
