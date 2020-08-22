
# generalized: O(2^n), specific: O(2*2^n)
def first_anagram?(str1, str2)
    anagrams = str1.chars.permutation
    anagrams.include?(str2.chars)
end

# p first_anagram?("gizmo", "sally")    #=> false
# p first_anagram?("elvis", "lives")    #=> true

# generalized: O(n*m), specific: O(n+m + (n*m))
def second_anagram?(str1, str2) # n^2 + m^2 = (n*m) + (n*m)
    array1 = str1.chars     # n
    array2 = str2.chars     # m
    array1.each do |char|   # n
        found_index = array2.find_index(char)   #m
        array2.delete_at(found_index) unless found_index.nil? #index -> 1
    end     # nested = m*m
    array2.empty?   # n+m + (n*m)
end

# p second_anagram?("gizmo", "sally")    #=> false
# p second_anagram?("elvis", "lives")    #=> true

# generalized: O(nlogn + mlogm), specific: O(2n * logn + 2m * logm)
def third_anagram?(str1, str2)
    str1.chars.sort == str2.chars.sort
end

# p third_anagram?("gizmo", "sally")    #=> false
# p third_anagram?("elvis", "lives")    #=> true

# generalized: O(n + m), specific: 2n + m
def fourth_anagram?(str1, str2)
    hash1 = Hash.new(0)
    hash2 = Hash.new(0)
    str1.each_char do |char|
        hash1[char] += 1
    end

    str2.each_char do |char|
        hash2[char] += 1
    end

    str1.chars.all? {|char| hash1[char] == hash2[char]}
end

# def fourth_anagram?(str1, str2)
#     hash1 = Hash.new(0)
#     str1.each_char do |char|
#         hash1[char] += 1
#     end
#
#     str2.each_char do |char|
#         hash1[char] -= 1
#     end
#
#     str1.chars.all? {|char| hash1[char] == 0}
# end


# p fourth_anagram?("gizmo", "sally")    #=> false
# p fourth_anagram?("elvis", "lives")    #=> true

