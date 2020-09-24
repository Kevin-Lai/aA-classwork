class View {
    constructor(game, $el){
        this.game = game;
        this.$el = $el;
        this.setupTowers();
    }

    setupTowers(){
        // <nav>
        //     <ul> <li></li></ul>
        //     <ul></ul>

        //     <ul></ul>

        // </nav>
        
        let $nav = $("<nav></nav>");
        for (let i = 0; i < 3; i++){
            let $ul = $("<ul></ul>");
            $ul.css("border-size", "2px")
            $ul.css("border-style", "solid")
            $nav.append($ul);
        }
        // $nav.css("background-color", "red");
        let $liTop = $("<li></li>");
        $liTop.css("border-size", "2px")
        $liTop.css("border-style", "solid")
        $liTop.text("hello")
        let $liMid = $("<li></li>");
        $liMid.css("border-size", "2px")
        $liMid.css("border-style", "solid")
        let $liBot = $("<li></li>"); 
        $liBot.css("border-size", "2px")
        $liBot.css("border-style", "solid")
        $nav[0].append($liTop);
        $nav[0].append($liMid);
        $nav[0].append($liBot);

        this.$el.append($nav);
    }
}

module.exports = View;