import React from "react";
import "./style.css";
import { Container } from "react-bootstrap";
import { FaRedo } from "react-icons/fa";
//import App from '../App';


const Header = ({name,moves, bestScore, handleRestart }) => {
  
  

  return (
    <div>
      <h1>Memory Game</h1>
      <Container>
        <div className="sub-header">
          <div className="moves">
            <span className="bold">Moves:</span>
            {moves}
          </div>
          <div className="name">
        
         
          <span className="bold">Name:</span>
            
            {name}
           
          </div>


          <div className="reshuffle">
            <button onClick={handleRestart}>
              <FaRedo />
            </button>
          </div>
          
          {localStorage.getItem("bestScore") && (
            <div className="high-score">
              <span>Best Score:</span>
              {bestScore}
            </div>
          )}
         
        </div>
      </Container>
    </div>
  );
};

export default Header;
