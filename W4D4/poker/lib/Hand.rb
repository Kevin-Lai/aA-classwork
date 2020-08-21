require_relative "Deck.rb"

class Hand
# array of 5 cards
    # for pairs, check count of same cards in hand
    # for straight, check that the value of each card in the hand is 1 different from each other

    def initialize()
       @cards = []
       @score = 0
    end

    def flush
        new_arr = []
        @card.each do |card|
            new_arr << card.suit
        end
        new_arr.uniq.length == 1
        @score = 6
    end 

    def four_of_a_kind
        checker = Hash.new(0)
        @cards.each {|card| checker[card.value] += 1 }
        checker.any? {|k,v| v == 4}
        @score = 7
    end

    def high_card
        @score = 1
        #if no player had more than 1 point
        #checking the max value of each player's hand
    end

    def pair
        checker = Hash.new(0)
        @cards.each {|card| checker[card.value] += 1 }
        checker.any? {|k,v| v == 2}
        # score = 2
    end

    def two_pairs
        checker = Hash.new(0)
        @cards.each {|card| checker[card.value] += 1 }
        checker.count {|k,v| v == 2} == 2
        @score = 3
    end

   def three_of_a_kind
        checker = Hash.new(0)
        @cards.each {|card| checker[card.value] += 1 }
        checker.any? {|k,v| v == 3}
        @score = 7
    end
    
    def straight
        sorted = @cards.sort
        (0...sorted.length - 1) do |i|
            if card.value == cards[i+1]
        end
    end



end


#high card          #1
#pair               #2
#two_pairs          #3
#three_of_a_kind    #4
#stair              #5
#flush              #6
#four_of_a_kind     #7
#stair_flush        #8