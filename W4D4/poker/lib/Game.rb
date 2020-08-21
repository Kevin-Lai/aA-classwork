class Game
    def initialize
        @deck = Deck.new
        @player1 = Player.new(name, money)
        @player2 = Player.new(name, money)

        
    end

    def run
        until @player1.money == 0 || @player2.money == 0

        end
    end

    def deal
        #@player1.give_cards
        # @deck.all_cards.sample 5
    end
end

# Each player is dealt five cards.
# Players bet; each player may fold, see the current bet, or raise.
#In turn, each player can choose to discard up to three cards.
#They are dealt new cards from the deck to replace their old cards.
#Players bet again.
#If any players do not fold,
    #then players reveal their hands; strongest hand wins the pot.

