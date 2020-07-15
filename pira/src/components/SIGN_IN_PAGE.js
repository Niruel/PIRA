import React, {Component } from 'react';
class SIGN_IN_PAGE extends Component{
  render(){
    return(<div>
   
    
    <div class="title">
      <h2>SIGN IN</h2>
    </div>

    <table class="table">

      <tr>
        <td>USERNAME</td>
        <td><input type="text" placeholder="Enter Username"/></td>
      </tr>
      <tr>
        <td>PASSWORD</td>
        <td><input type="Password" placeholder="Enter Password"/></td>
      </tr>
      
    </table>

    
    <br/>
    <div class="button">
      <input type="button" value="SIGN IN" onclick=""/><br/>
    </div>
    <br/>

    <div class="wording">
      Remember me<input type="checkbox" checked="checked"/> 
    <br/>
    <a href="REGISTER_PAGE.html">Do not have a ID yet</a>  
    </div>
    </div>);
  }
}
export default SIGN_IN_PAGE;
    

    


