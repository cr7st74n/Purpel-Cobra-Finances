import React from "react";
import "../styles/Footer.css";
import { BsEnvelope } from "@react-icons/all-files/bs/BsEnvelope";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin";


export default function Footer() {
  return(
    <div className="footer">
        <div className="socialMedia">
          <a href="#"><BsEnvelope /></a> 
          <a href="https://github.com/cr7st74n/Purpel-Cobra-Finances"><AiFillGithub /></a>
          <a href="#"><AiFillLinkedin /></a>
      
        </div>
        <p> &copy; 2022 All rigths reserved</p>
    </div>
  )
}


