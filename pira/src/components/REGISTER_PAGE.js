import React, {Component } from 'react';
class REGISTER_PAGE extends Component{

  render(){
    return(<div>
       <div class="title">
      <h2>REGISTER</h2>
    </div>

    <table class="table">

    <tr>
        <td>USERNAME</td>
        <td><input type="text" name="textfield"></input></td>
      </tr>
      <tr>
        <td>PASSWORD</td>
        <td><input type="text" name="textfield"></input></td>
      </tr>
      <tr>
        <td>FIRST NAME</td>
        <td><input type="text" name="textfield"></input></td>
      </tr>
      <tr>
        <td>LAST NAME</td>
        <td><input type="text" name="textfield"></input></td>
      </tr>
      <tr>
        <td>E-MAIL</td>
        <td><input type="text" name="textfield"></input></td>
      </tr>

    </table>
    <p class="wording">By creating an account, you agree to our Terms & Conditions</p>
    
    <div class="button">
      <input type="button" value="REGISTER" onclick=""></input>
      
    </div>

 
    
    <div class="copyright">
      <p>&copy; PIRA. All rights reserved. | Design by PBL_TEAM07 .</p>
    </div>
    </div>)
  } 
}
export default REGISTER_PAGE;
