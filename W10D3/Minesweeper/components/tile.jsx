import React from "react";
import * as Minesweeper from "../minesweeper";

export default class Tile extends React.Component {
   constructor(props){
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.tileSymbol = this.tileSymbol.bind(this);
   }
   handleClick() {

     this.props.updateGame(this.props.tile, event.altKey);
   }

   tileSymbol(){
      const tile = this.props.tile;   
      let symbol ="";
      if (tile.explored) {
         if ( tile.bombed ) {
            symbol = "💣";
         } else {
          let bomb = tile.adjacentBombCount();
          symbol = bomb ? bomb : " ";
         }
      } else if (tile.flagged) {
            symbol = "🚩";
      }
      return symbol;
   }

   render(){
      return (
         <div className="tile" onClick={this.handleClick}>
            {this.tileSymbol()}
         </div>
      )
   }
}