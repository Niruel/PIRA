import React, {Component } from 'react';
import {Link}  from 'react-router-dom';

class HomePage extends Component{
    render(){
        return(<div>
           
	<div className="logo">
        <Link to="/">
		<a href="MAIN_PAGE">PIRA</a>
        </Link>
	</div>

	
	<div className="navbar">
        <Link to ="/">
		<a href="#">MAIN</a>
        </Link>
        <Link to= "/upload">
  		<a href="#">UPLOAD</a>
          </Link>

  		<div className="dropdown">
			<button className="dropbtn">MEMBER
				<i className="fa fa-carat-down"></i>
			</button>
		<div className="dropdown-content">
            <Link to ="/sign-in">
			<a href="#">SIGN IN</a>
            </Link>
            <Link to= "/register_page">
			<a href="#">REGISTER</a>
            </Link>
		</div>
  		</div>
  	</div>
  	<br/>

  
  	<div className="title">
  		
  	</div>
  	
  	<div className="copyright">
  		<p>&copy; PIRA. All rights reserved. | Design by PBL_TEAM07 .</p>
  	</div>
      </div> );
    }
}
export default HomePage;