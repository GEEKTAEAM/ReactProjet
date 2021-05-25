import React,{Component} from 'react';
import { Button } from 'semantic-ui-react';
import './style.css';
import{Link} from 'react-router-dom';

class Header extends Component{
    
 render(){ 



     return(
     

<div className="Button">
<Link to ="/">
    <Button primary>Register Gamer</Button>
</Link>
<Link to ="/memory"> <Button secondary>Memory Game</Button>
</Link>
<Link to ="/tictactoe"><Button secondary>TicTacToe Game</Button>
</Link>

  </div>   
     
     )
 }
}
export default Header;


