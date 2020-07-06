import React, {Component} from 'react';
import  cityData from '../data/csvjson.json';

class dropdown extends Component{
    constructor(props) {
        super(props);
        this.state = {value: 'coconut'};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
      
      getUnique(arr, comp){
          const unique =arr
          .map(e => e[comp])
          .map((e, i, final) =>final.indexOf(e) === i && i)
          .filter(e =>arr[e])
          .map(e => arr[e]);
          return unique;
          
      }
      handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
      }
    
      render() {
         
          const unique = this.getUnique(cityData, 'category');
          const ward = this.getUnique(cityData, 'ward');
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Pick your favorite flavor:
               <select>  
                {unique.map( data =>(
                    <option key = {data.created} 
                    value = {data.category}>
                        {data.category}
                    </option>
                ))}
              </select>
            </label>
            <label>
              Pick your favorite flavor:
               <select>  
                {ward.map( data =>(
                    <option key = {data.created} 
                    value = {data.ward}>
                        {data.ward}
                    </option>
                ))}
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }
}
export default  dropdown;