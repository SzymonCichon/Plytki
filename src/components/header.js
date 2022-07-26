import React from 'react';
import { NavLink } from "react-router-dom";
import {BrowserView, MobileView} from 'react-device-detect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRectangleList } from '@fortawesome/free-regular-svg-icons';
var number = 0;
class MobileMenu extends React.Component{
  render()
  {
    return(
      <div id = "clickable_icon">
        <FontAwesomeIcon id="icon" icon={faRectangleList} size="2xl" onClick={
          ()=>{
            if(number===0)
            {
              document.getElementById("Header_home").style.display = "block";
              document.getElementById("Header_tariff").style.display = "block";
              document.getElementById("Header_contact").style.display = "block";
              document.getElementById("Header_finished_projects").style.display = "block";    
              document.getElementById("Header_home").style.height = "20%";
              document.getElementById("Header_tariff").style.height = "20%";
              document.getElementById("Header_contact").style.height = "20%";
              document.getElementById("Header_finished_projects").style.height = "20%";   
              number=1
            }
            else if(number===1)
            {
              document.getElementById("Header_home").style.display = "none";
              document.getElementById("Header_tariff").style.display = "none";
              document.getElementById("Header_contact").style.display = "none";
              document.getElementById("Header_finished_projects").style.display = "none";     
              number=0
            }
                   
          }
        }></FontAwesomeIcon>
        <div className = "Header_button" id = "Header_home">
            <NavLink to="/">Home</NavLink>
            
        </div>
        <div className = "Header_button" id = "Header_tariff">
            <NavLink to="/tariff">Cennik i usugi</NavLink>
        </div>
        <div className = "Header_button" id = "Header_contact">
            <NavLink to="/contact">Kontakt</NavLink>
        </div>
        <div className = "Header_button" id = "Header_finished_projects">
            <NavLink to="/finished_projects">Skończone projekty</NavLink>
        </div> 
      </div>
    )
  }
}
class BrowserMenu extends React.Component{
  render()
  {
    return(
      <div>
        <div className = "Header_button" id = "Header_home">
            <NavLink to="/">Home</NavLink>
        </div>
        <div className = "Header_button" id = "Header_tariff">
            <NavLink to="/tariff">Cennik i usugi</NavLink>
        </div>
        <div className = "Header_button" id = "Header_contact">
            <NavLink to="/contact">Kontakt</NavLink>
        </div>
        <div className = "Header_button" id = "Header_finished_projects">
            <NavLink to="/finished_projects">Skończone projekty</NavLink>
        </div>
      </div>
    )
  }
}
function Navigation() {
    return (
      <div id = "Header">
        <div id = "Header_info">
            Strona o płytkach
        </div>
        <MobileView>
          <MobileMenu/>
        </MobileView>
        <BrowserView>
          <BrowserMenu/>
        </BrowserView>
        </div>
    );
  }
  export default Navigation;