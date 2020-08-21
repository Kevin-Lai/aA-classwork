class Array
    def remove_dups
        hash = {}
        self.each {|cats| hash[cats] = true }
        hash.keys
    end
    
    def two_sums
        sums_to_zero = []
        self.each_with_index do |ele1,i1|
            self.each_with_index do |ele2,i2|
                if i2 > i1 && ele1 + ele2 == 0
                    sums_to_zero << [i1,i2]
                end
            end
        end
        sums_to_zero
    end

    def my_transpose
        row = []
        self.each_with_index do |ele1,i1|
            new_arr = []
            self.each_with_index do |ele2,i2|     
                new_arr << self[i2][i1]
            end
            row << new_arr
        end
        row
    end

    def stock_picker
        buy_sell = []
        copy = self.dup
        copy.sort.each_with_index do |ele,i|
            buy_sell << self.index(ele) if self.min == ele
            buy_sell << self.index(ele) if self.max == ele
        end
        buy_sell
    end

end


class Hanoi
    attr_accessor :stack1, :stack2, :stack3
    def initialize
        @stack1 = [4,3,2,1]
        @stack2 = []
        @stack3 = []
    end

    def move(select_tower, put_tower)
        # select_tower = gets.chomp
        # put_tower = gets.chomp

        # In a loop, prompt the user (using gets)
        # and ask what pile to select a disc from, and where to put it.

        case select_tower
        when 1
            ele = @stack1.pop
            @stack2 << ele if put_tower == 2
            @stack3 << ele if put_tower == 3
        when 2
            ele = @stack2.pop
            @stack3 << ele if put_tower == 3
            @stack1 << ele if put_tower == 1
        when 3
            ele = @stack3.pop
            @stack2 << ele if put_tower == 2
            @stack1 << ele if put_tower == 1            
        end
    end

    def won?
        [4,3,2,1] == @stack2 || [4,3,2,1] == @stack3
    end

end