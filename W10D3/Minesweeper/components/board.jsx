import React from "react"
import * as Minesweeper from "../minesweeper";
import Tile from "./tile"

// importing all objects into your JSX files
// aliased as Minesweeper,
// such that you can access the Tile and Board API
// through Minesweeper.Board and Minesweeper.Tile.

export default class Board extends React.Component{
	constructor(props){
		super(props);

        // although this will work, the recommended way was to not tie the state to the prop.
        //this.state={board: props.board, updateGame: props.updateGame};
      //   console.log(this.state)
      //console.log(this.state.board.grid)
      this.renderRow = this.renderRow.bind(this);
      this.renderTiles = this.renderTiles.bind(this);
	}

    renderRow(){
        const board = this.props.board;
        return board.grid.map((row,idx) => {
            return (
					<div key={idx} className="row">
						{this.renderTiles(row,idx)}
					</div>
            )
			})
    }

    renderTiles(row,i){
        	return row.map((tile, idx2) => {
           //console.log(i * 10 + idx2)
            return (
					<Tile updateGame={this.props.updateGame} key={[i, idx2]} tile={tile}/>
            )
			})
    }

    render(){
      //  let tiles = this.props.board.grid.map((row, idx) => {
      //         return row.map((tile, idx)=> {<div><Tile updateGame={this.props.updateGame}/></div>} );
      //       })
		return (
			<div>
				{this.renderRow()}
            
         </div>
		)
	}
}