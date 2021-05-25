import React,{Component}  from "react";
import "./register.css";

/*import Map from './NameForm';*/
/*import Header from "../memory/Header/index";*/


class Register extends Component{
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
     

  render() {
    return (
      <div><h1>Register</h1>
    <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        
      </form>
      </div></div>
      
     
    );
  }
}


/*ReactDOM.render(/
  <NameForm />,
  document.getElementById('root')
);*/

export default Register;