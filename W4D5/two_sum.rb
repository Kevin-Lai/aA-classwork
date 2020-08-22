# Generalized:O(n^2), specific: O( (n^2)-n )
def brute_two_sum?(arr, target_sum)
    (0...arr.length-1).each do |i1|         #O(n)
        (i1+1...arr.length).each do |i2|    #O(n-1)
            return true if arr[i1]+arr[i2] == target_sum
        end # (n-1)*(n) = n^2 - n
    end
    false
end
 
arr = [0, 1, 5, 7]
# p brute_two_sum?(arr, 6) # => should be true
# p brute_two_sum?(arr, 10) # => should be false
                          
# Generalized:O(nlogn), specific: O( nlogn + (n-1) ) = O( nlogn + n) 
def sort_two_sum?(arr, target_sum)
    # sorted_arr = [0,1,5,7]    # O(n*logn)
    # iterating through the sorted_arr once = O(n)
    # final complexity = (n*logn + n)
    # simplified to just n*logn if using merge_sort logic
    arr.sort!   #nlogn
    i1 = 0
    i2 = arr.length-1

    until i1 == i2  #n-1
        sum = arr[i1]+arr[i2]
        return true if sum == target_sum
        if sum > target_sum
            i2 -= 1
        else
            i1 += 1
        end
    end
    false
end


# p sort_two_sum?(arr, 6) # => should be true
# p sort_two_sum?(arr, 10) # => should be false


# Generalized:O(n), specific: O(2n)
require "byebug"
def hash_two_sum?(arr, target_sum)
    hash = {}
    arr.each do |num|
        hash[num] = true
    end

    hash.each_key do |k|
        return true if hash.has_key?(target_sum - k) && (target_sum - k) != k 
    end
    return false
end



arr = [0, 1, 5, 7]
p hash_two_sum?(arr, 6) # => should be true
p hash_two_sum?(arr, 10) # => should be false