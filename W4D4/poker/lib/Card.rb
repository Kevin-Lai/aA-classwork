class Card
    attr_reader :suit, :value
    def initialize(face, value, suit)
        @face = face
        @value = value
        @suit = suit
    end
end


# f=:A  v=14 t=♠

#  ♡ ♢ ♣ 

#compare values
#check if they have same suit