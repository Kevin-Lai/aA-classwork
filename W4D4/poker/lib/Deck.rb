require_relative "Card.rb"

class Deck
    # array of 54 cards
    attr_reader :all_cards
    def initialize
        @all_cards = []
        @cards = [:A, :K, :Q, :J, :"10", :"9", :"8", :"7", :"6", :"5", :"4", :"3", :"2"]
        i = 0
        @cards.each do |card|
            @all_cards << Card.new(card,14-i,"♠")
            @all_cards << Card.new(card,14-i,"♡")
            @all_cards << Card.new(card,14-i,"♢")
            @all_cards << Card.new(card,14-i,"♣")
            i += 1
        end
    end
end

# ♠ ♡ ♢ ♣ 
deck1 = Deck.new


p deck1