import React, {Component } from 'react';
class UPLOAD_STATE_PAGE extends Component{
  render(){
    return(
    <div>
    <div className="title">
      <h2>UPLOAD</h2>
    </div>

    <table className="table2">
      <tr>
        <td>Title</td>
      </tr>
      
      <tr>
        <td>
          <textarea rows="1" cols="35" name="Title" ></textarea>
        </td>
      </tr>
      
      <tr>
        <td>Category</td>
      </tr>

      <tr>
        <td><select name="Catagory">
          <option value="Catagory">Category</option>
          <option value="1">Roads/Highways</option>
          <option value="2">Pavements/Footpaths</option>
          <option value="3">Potholes</option>
        </select></td>
      </tr>

      <tr>
        <td>Location</td>
      </tr>

      <tr>
        <td style={{color: "red"}}> MAP GOES HERE</td>
      </tr>
      
       <tr>
        <td>Information</td>
      </tr>

      <tr>
        <td>
          <textarea rows ="7" cols= "35" name="textarea"></textarea>
        </td>

      </tr>

      <tr>
        <td>Upload Picture</td>
      </tr>

      <tr>
        <td className="fileupload">
          <input type="file" name="myfile" />
        </td>
      </tr>

    </table>
    <br/>

    
    
    <div className="button">
      <input type="button" value="SUMMIT" onclick=""/><br/>
    
    </div>

    
    
    <div className="copyright">
      <p>&copy; PIRA. All rights reserved. | Design by PBL_TEAM07 .</p>
    </div>
    </div>
    );
    }
}
export default UPLOAD_STATE_PAGE;