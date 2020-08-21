require "tdd.rb"
require "rspec"

describe "Array#remove_dups" do
    #[1,2,1,2,3] #[1,2,3]
    it "expects no duplicate elements" do
        expect([1,2,1,2,3].remove_dups).to eq([1,2,3])
    end

end

describe "Array#two_sums" do
    let(:array){[-1, 0, 2, -2, 1]}
    it "finds all pairs of positions where elements at those positions sum to 0" do
        expect(array.two_sums).to eq([[0, 4], [2, 3]])
    end

    it "returns each of the pairs sorted smaller index before bigger index in the array " do
        expect(array.two_sums[0][0] < array.two_sums[0][1]).to eq(true)
    end
end

describe "Array#my_transpose" do 
    let(:rows){[
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8]
                ]}
    let(:cols){[
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8]
                ]}
    it "returns the transposed matrix" do
        expect(rows.my_transpose).to eq(cols)
    end
end


describe "Array#stock_picker" do
    let(:prices){[9.37, 10.45, 13.30, 8.95]}
    it "should return an array containing the date to buy and date to sell the stock" do
        expect(prices.stock_picker).to eq([3, 2])
    end
end

describe "Hanoi" do
    let(:tower){Hanoi.new}
    describe "#initialize" do
        it "expects stack1 to be full" do
            expect(tower.stack1).to eq([4,3,2,1])
        end
        it "expects stack2 to be empty" do
            expect(tower.stack2).to eq([])
        end
        it "expects stack3 to be empty" do
            expect(tower.stack3).to eq([])
        end
    end

    
    describe "#move" do

        it "expects to move a disk from 1 tower to another" do
            expect(tower.stack1).to eq([4,3,2,1])
            expect(tower.stack2).to eq([])
            tower.move(1,2)
            expect(tower.stack1).to eq([4,3,2])
            expect(tower.stack2).to eq([1])
        end
    end
    # let(:mock_tower){[4,3,2,1]}
    describe "#won?" do
        
        it "expect either stack2 or stack3 to be equal to the original sorted tower" do 
            tower.stack2 = [4,3,2,1]
            expect(tower.won?).to eq(true)
            tower.stack2 = []
            tower.stack3 = [4,3,2,1]
            expect(tower.won?).to eq(true)
        end
        
        it "expect either stack2 or stack3 to be equal to the original sorted tower" do 
            tower.stack2 = []
            expect(tower.won?).to eq(false)
            tower.stack3 = []
            expect(tower.won?).to eq(false)
        end
    end
#    expect([4,3,2,1]).to eq(stack2).or eq(stack3)

end

# it "only allows -1 or 1 as values" do
#   expect ( @vote.value ).to eq(1).or eq(-1)
# end

#  move(stack1, stack2)
# stack1.move(stack2)


# it "calls the merge helper method" do
#     expect(Array).to receive(:merge).at_least(:once).and_call_original
#     array.merge_sort
#   end



# should have 3 towers
# eeach tower is an array and represents a pile of disks
# a number represents the size of a disk
# move is move from 1 tower to anothe
# won? - when the length of 1 tower is == to the length

# move
# 1st instance holds all the disks
# other 2 towers are empty
# grab a disk and put it in 1 tower

# Only one disk can be moved at a time.
# Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or on an empty rod.
# No larger disk may be placed on top of a smaller disk.



    

