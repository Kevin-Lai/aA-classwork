require "byebug"
require 'set'
require_relative './polytree_node.rb'
class KnightPathFinder


    def initialize(start_position)
        # start_position: array of 2 numbers
        @start_position = start_position
        @root_node = PolyTreeNode.new(start_position)
        @considered_positions = Set.new
        @considered_positions.add(start_position)
        @grid = Array.new(8) {Array.new(8)}
    end

    def self.valid_moves(pos)
        pos[0] >= 0 && pos[1] >= 0 &&
        pos[0] < 8 && pos[1] < 8
    end
    # calls ::valid_moves to check valid positions
    # add new positions to @considered_positions
    # returns new positions
    def new_move_positions(position)
        # possible_moves = []
        # move1 = start_position
        
        idx = 1
        idx2 = 2
        new_arr = []
        (0...4).each do |i|
            idx *= -1 if i == 2
            new_arr << [position[0]+idx, position[1]+idx2]
            idx2 *= -1
        end

        reverse_arr = []
        new_arr.each do |pos|
            reverse_arr << pos.reverse
        end

        all_possible_moves = new_arr + reverse_arr
        all_possible_moves = all_possible_moves.uniq.select do |pos| 
            KnightPathFinder.valid_moves(pos) && 
            !@considered_positions.include?(pos)
        end
        all_possible_moves.each do |position|
            @considered_positions.add(position)
        end
        all_possible_moves
    end

    def find_path(end_position)
        # returns positions taken to the end position, including start position
        
        # # we need to edit bfs implementation
        # @root_node.bfs(end_position)
    end

    # uses new_move_positions
    # start with start_pos
    def build_move_tree
        # @grid.each_with_index do |node,i|
        #     @grid.each_with_index do |node2, i2|
        #         @grid[i][i2] = PolyTreeNode.new([i,i2])
        #         #@grid[i][i2].children = new_move_positions([i,i2])
        #     end
        # end


        # if we don't use bfs from PolyTreeNode,
        # then we need to write a new version of BFS

    end

    def bfs(target_value)
        path = []

        queue = []
        queue << self
        until queue.empty?
            ele = queue.shift
            path << ele
            return path if ele.value == target_value
            queue += ele.children
        end
        nil
    end
end

kpf = KnightPathFinder.new([0,0])
p kpf.new_move_positions([2,1])

# [0, 1, 2] = [0,_,_]
# [3, 4, 5] = [_,4,_]
# [6, 7, 8] = [_,_,8]

# 0-8
# valid path = 0,4,8
# valid_path = 0,..,8

# if left_right = idx +- 1
# down_up must be idx2 +- 2
# also, true for reverse

# left_move = idx - (1,2)
# right_move = idx + (1,2)
# up_move = idx2 - (1,2)
# down_move = idx2 + (1,2)

# target_pos = [3,4]
# check if [left_right,down_up] == [3,4]
# then, we just return length of path

# use another set we have: path_positions
# we only add valid positions to the set as we go along
# check the length of the set

# [0, 1, 2] = [0,_,_]
# [3, 4, 5] = [_,4,_]
# [6, 7, 8] = [_,_,8]

# path = [0,4,8]
# check path.length = 3

# path2 = [0,1,2,5,8]
# check path2.length = 5

# take the shortest path
# by comparing path.length and path2.length

# [0,0] is node 1
# node1.neighbors = []

# i = 1
# while i < 8    # There are up to 8 possible moves.
#   neighbors << [idx+i, idx+i]

# .neighbors.include?(position) # this will check for valid_pos

# [1,2]
# neighbors of [1,2] = [0,0], [3,1], [3,3]

# [3,3]
# neighbors of [3,3]
# for left_right +-1 = [1,2], [1,4], [5,2], [5,4]
# for down_up  +-1 = [2,1], [2,5], [4,1], [4,5]
# pattern: down_up positions are just the Reverse of left_right positions

# for left_right +-1 = [i+1, i+2], [i+1, i-2], [i-1,i+2], [i+1,i-2]


# assume start_pos = [0,0]
# assume target_pos = [2,1]


# bfs #1: queue = [0,0]
# check if [0,0] == [2,1]? No, so add [0,0] children
# set = [0,0]
# check if any children of [0,0] is in set,
# if a child is in set, ignore them
# otherwise, add the child to the set

# bfs #2: queue = [1,0], [0,1], [1,1]
# check if [1,0] == [2,1]? No, so add [1,0] children
# set = [0,0], [1,0]
# check if any children of [1,0] is in set,
# if a child is in set, ignore them
# otherwise, add the child to the set

# bfs #3: queue = [0,1], [1,1], [2,1], [1,2]
# check if [0,1] == [2,1]? No, so add [0,1] children
# set = [0,0], [1,0], [0,1]
# check if any children of [0,1] is in set,
# if a child is in set, ignore them
# otherwise, add the child to the set

# Repeat until either the target_pos is found or not

# Set: [ [0,0], [1,0], [0,1], [1,1], [2,0], [2,1] ]
