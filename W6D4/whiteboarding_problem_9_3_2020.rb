# =======================
# | App Academy			|
# | Whiteboard Problems |
# -----------------------
# | Classwork 9/3/2020	|
# | Kevin Lai			|
# =======================

# Problem 1:
# Given a pattern and a string str, determine if str follows the same pattern.

# Example 1
# Input: pattern = "abba", str = "dog cat cat dog"
# Output: true

# Example 2
# Input: pattern = "abba", str = "dog cat cat fish"
# Output: false

# Example 3
# Input: pattern = "aaaa", str = "dog cat cat dog"
# Output: false

# Example 4
# Input: pattern = "abba", str = "dog dog dog dog"
# Output: false

# You may assume pattern contains only lowercase letters, and str contains lowercase letters that may be separated by a single space. Can you solve it in O(N) time and O(1) space?

# ---
# Notes - Kevin Lai
# O(N) time and O(1) space
# ---
# Loop through the pattern string and store each letter as the key in the hash.
# Then, loop through the "str" string and store each word as the value in the hash.
# The hash should be a hash where each key has an array of elements as a value.
# ---

def pattern_match?(pattern, str)
	# Kevin Lai
	
	words = str.split(" ")
	hash = Hash.new{|k,v| k[v] = []}

	# Assuming that the length of the pattern is a constraint
	# where the number of letters in the pattern
	# must be equal to the number of words in the "str" string.
	return false unless pattern.length == words.length
	
	# Go through both the pattern and "str" string.
	(0..pattern.length-1).each do |i|
		key = pattern[i]
		value = words[i]
		hash[key] << value
	end
	
	# Then, go through the hash and check the values.
	# If the "str" string follows the same pattern,
	# then all elements for a certain key should be the same.
	hash.each do |key, value|
		return false unless value.uniq.length == 1
	end

	# If the number of unique words within "str" is
	# less than the number of unique letters within the pattern,
	# then the words for one of the letter keys is
	# the same for another letter key.
	return false if hash.values.uniq.length < pattern.split("").uniq.length

	# If it has not returned false in the previous check,
	# then it is safe to assume that the "str follows the same pattern."
	return true
end

p pattern_match?("abba", "dog cat cat dog")		# => true
p pattern_match?("abba", "dog cat cat fish")	# => false
p pattern_match?("aaaa", "dog cat cat dog")		# => false
p pattern_match?("abba", "dog dog dog dog")		# => false

# ====================================

# Problem 2:
# Given two strings S and T, return if they are equal when both are typed into empty text editors. In this case, # indicates a backspace character.

# Example 1
# Input: S = "ab#c", T = "ad#c"
# Output: true
# Explanation: Both S and T become "ac".

# Example 2
# Input: S = "ab##", T = "c#d#"
# Output: true
# Explanation: Both S and T become "".

# Example 3
# Input: S = "a##c", T = "#a#c"
# Output: true
# Explanation: Both S and T become "c".

# Example 4
# Input: S = "a#c", T = "b"
# Output: false
# Explanation: S becomes "c" while T becomes "b".

# Note:
# 1. 1 <= S.length <= 200
# 2. 1 <= T.length <= 200
# 3. S and T only contain lowercase letters and '#' characters.
# Can you solve it in O(N) time and O(1) space?

# ---
# Notes - Kevin Lai
# O(N) time and O(1) space
# ---
# Looks similar to a stack problem.
# As you go through the string, add letters into a new array.
# Whenever you encounter a '#', pop a letter from the array.
# ---

def reduce_string(str)
	# Kevin Lai	
	new_str = []
	str.each_char do |letter|
		if letter == '#' && !new_str.empty?
			new_str.pop
		else
			new_str << letter
		end
	end
	new_str
end

def equal_strings?(s, t)
	# Kevin Lai	
	return reduce_string(s) == reduce_string(t)
end

p equal_strings?("ab#c", "ad#c")	# => true
p equal_strings?("ab##", "c#d#")	# => true
p equal_strings?("a##c", "#a#c")	# => true
p equal_strings?("a#c", "b")		# => false
