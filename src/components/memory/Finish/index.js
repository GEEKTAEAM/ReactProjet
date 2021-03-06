import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "./style.css";
import{Link} from 'react-router-dom';

const Finish = ({  handleRestart, showModal, bestScore, moves }) => {
  return (
    <div>
      <Dialog
        open={showModal}
        disableBackdropClick
        disableEscapeKeyDown
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <h2>Memory Game</h2>
        <DialogTitle id="alert-dialog-title">
          Hurray !!! You completed the game !!
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You got {moves} moves.Your best score is {bestScore}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Link to ="/"><Button onClick={handleRestart} color="primary">
           Joueur suivant
          </Button></Link>
        <Link to ="/tictactoe"><Button>Jouer au jeu de titactoe</Button>
       
</Link>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Finish;
