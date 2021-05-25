

//import { render } from '@testing-library/react';
//import React, {Component } from 'react';
//import Header from './components/Header/index';
import './App.css';
import{useState}from "react";
//import { Button } from 'semantic-ui-react';
//import Background from './bois.jpg';
//import Register from './components/register/register';
import Tictactoe from './components/titactoe/tictactoe';
import Memory from './components/memory/App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Protection from './protection';
import { Button } from 'semantic-ui-react';

import{Link} from 'react-router-dom';




function App (){
  
 

  const [isAuth,setIsAuth] = useState(false);
  
  return (
   
   
    <div className="App">
      
     
      <h1> FOOT Clubs </h1>
      
  <Router>
      <div className="Button">
<Link to ="/">
    <Button primary>Register Gamer</Button>
</Link>
<Link to ="/memory"> <Button secondary onClick={()=>{setIsAuth(false)}}>Memory Game</Button>
</Link>
<Link to ="/tictactoe"><Button secondary onClick={()=>{setIsAuth(false)}}>TicTacToe Game</Button>
</Link>

  </div>
     <Route path="/" exact >
     <div><h1>Register</h1>
    
<div className="form">
       
    <input type="text"  placeholder="gamer-name" name="name" />
      
    <Link to ="/memory"> <Button secondary onClick={()=>{setIsAuth(true)}}>Envoyer</Button>
    </Link>
</div>
     
      </div>

     </Route>
     <Protection path="/memory" exact component={Memory} isAuth={isAuth}/>
  
     
     <Route path="/tictactoe" exact component={Tictactoe} />

      </Router>
      
     
    
    
     </div>







  );
}


export default App;