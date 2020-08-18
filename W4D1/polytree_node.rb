require 'byebug'

class PolyTreeNode

    attr_reader :value, :parent, :children

    # value is an array
    def initialize(value)
        @value = value
        @parent = nil
        @children = []
    end

    def parent=(new_parent)
        # Remove self from old_parent.children array
        if @parent
            index = @parent.children.index(self)
            @parent.children.delete_at(index)
        end

        # Then, change the parent for self, and add self to new_parent.children array
        @parent = new_parent
        if @parent && !@parent.children.include?(self)
            @parent.children << self
        end
    end

    def add_child(child_node)
        child_node.parent = self
    end

    def remove_child(child_node)
        raise "#{child_node.value} is not a child of #{self.value}" if !@children.include?(child_node)
        child_node.parent = nil
    end

    def dfs(target_value)
        return self if self.value == target_value
        @children.each do |child|
            child_node = child.dfs(target_value)
            if child_node != nil
                return child_node
            end
        end
        nil
    end

    def bfs(target_value)
        queue = []
        queue << self
        until queue.empty?
            ele = queue.shift
            return ele if ele.value == target_value
            queue += ele.children
        end
        nil
    end

end

# n1 = PolyTreeNode.new
# n2 = PolyTreeNode.new
# n3 = PolyTreeNode.new
# n# = PolyTreeNode.new

# n1.children = [n2, n4]
# n2.children = [n5, n6]

# n2.parent = n3
# problem: n2 is already a child of n1
# need to remove n2 from n1.children before adding it to n3.children

# nodes = [0,1,3,4]
# nodes[2] = 3

#     0
#   1   3
#  4     


#       0
#     1   2
#    3 4 5 6