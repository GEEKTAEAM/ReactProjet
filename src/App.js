//import { render } from '@testing-library/react';
import React, {Component } from 'react';
import Header from './components/Header/index';
import './App.css';
//import { Button } from 'semantic-ui-react';
//import Background from './bois.jpg';
import Register from './components/register/register';
import Tictactoe from './components/titactoe/tictactoe';
import Memory from './components/memory/App';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/*var sectionStyle = {
  width: "100%",
  height: "1200px",
  backgroundImage: "url(" + Background + ")",
  

};*/
class App extends Component{
  
 
render() {
  
  return (
   
   
    <div className="App">
      
     
      <h1> FOOT Clubs </h1>
      
      <Router>
      <Header/>
     <Route path="/" exact component={Register} />
     <Route path="/memory" exact component={Memory}/>
     <Route path="/tictactoe" exact component={Tictactoe} />

      </Router>
     
    
    
     </div>
  );
}
}

export default App;