import React from "react"
// import Board from "../minesweeper";
// const { Board } = require("../minesweeper");
import Board from "./board"
import * as Minesweeper from "../minesweeper";

export default class Game extends React.Component {
   constructor(props) {
      super(props);
      this.state = {board: new Minesweeper.Board(10, 10)};
      this.updateGame = this.updateGame.bind(this);
      this.playGame = this.playGame.bind(this)
   }

   updateGame(tile, flag) {
      console.log(`flag = ${flag}`)
      if ( flag ) {
         tile.toggleFlag();
      } else {
         tile.explore();
      }

      this.setState({board: this.state.board});
   }

   playGame() {
      let string = "";
      if ( this.state.board.lost() ) {
         string = "you lost"
      } else if ( this.state.board.won() ){
         string = "you won"
      }
      return (
         <div>{string}</div>
      )
   }

   render() {
      return (
         <div>
            <Board board = { this.state.board } updateGame =  { this.updateGame } />
            {this.playGame()}  
         </div>
      )
   }
}
