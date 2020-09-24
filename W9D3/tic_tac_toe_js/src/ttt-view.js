class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    let that = this;

    this.$el.on("click", function (event) {
      // event.preventDefault();
      //event.target.data()

      // returns an object hash = { pos: [0,2] }
      //let pos = $(event.target).data();

      // returns an pos array = [0,2] 
      //let pos = $(event.target).data()["pos"];

      // this is pointing to the HTML element $el
      // console.log(this);
      // console.log(this.game);
      //console.log(pos);

      that.makeMove($(event.target));
    });
    
  }

  makeMove($square) {
    // Add/remove CSS classes to
    // change the cell background to white and 
    // display the 'X's and 'O's in different colors.
    $square.data( { currMark: this.game.currentPlayer} );
    
    // $square.data(["currMark"]).css("background-color", "white");
    
    if ($square.data()["currMark"]){
      // disable hover effect
      $square.off("mouseenter mouseleave");
      $square.css("background-color", "white");
    }

    let pos = $square.data()["pos"];
    
    try {
      this.game.playMove(pos);
      // if an error occurs on the playMove(),
      // then the following text change will not run
      $square.text(this.game.currentPlayer);
    } catch (error) {
      // console.log(error);
      alert(error.msg);
    }

    $square.css("font-size","70px");
    $square.css("text-align","center");

    if (this.game.isOver()){
      if (this.game.winner()){
        alert(`Winner is ${this.game.currentPlayer}`);
      } else{
        alert("Draw game");
      }
    }

  }

  setupBoard() {
    let $ul = $("<ul></ul>");
    $ul.css("display","flex");
    $ul.css("border-size", "2px");
    $ul.css("border-style", "solid");
    $ul.css("width", "300px");
    $ul.css("flex-wrap","wrap");

    $ul.css("list-style-type", "none");
    //$ul.css("list-style", "none");

    $ul.css("padding", "0px")

    for(let i = 0; i<3; i++){
      for(let j = 0; j<3; j++){
        let $li = $("<li></li>");

        // Stores the position data for the list element
        $li.data( { pos: [ i,j ] } );
        
        // The following is an example to extract the stored data.
        //$( "span" ).first().text( $( "div" ).data( "test" ).first );
        
        $li.css("flex-wrap","wrap");
        $li.css("background-color", "gray");
        $li.css("border-size", "2px");
        $li.css("border-style", "solid");
        $li.css("width", "94px");
        $li.css("height", "94px");

        $ul.append($li);
        $li.hover(function(){
          $(this).css("background-color", "yellow");
        },function(){
          $(this).css("background-color", "gray");
        }
        )
      }
    }

    this.$el.append($ul);
  }
}

// .hover( handlerIn )

// $("p").hover(function(){
//   $(this).css("background-color", "yellow");
//   }, function(){
//   $(this).css("background-color", "pink");
// });


module.exports = View;
