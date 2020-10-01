import Game from "../components/game";
import React from "react"
import ReactDOM from "react-dom"

document.addEventListener("DOMContentLoaded", () => {
   const game = document.getElementById("root");
   ReactDOM.render(<Game/>, game)
})