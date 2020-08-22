
# Generalized:O(n), specific: O( (n-windows_size)*window_size ) => O(n*window_size)) => O(n)
# because window_size is a constant
def windowed_max_range(arr, window_size) 
    new_arr = []
    current_max_range = nil
    (0..arr.length-window_size).each do |i1|    # (n-windows_size)*window_size
        sub_array = []
        (i1..i1 + (window_size-1) ).each do |i2|    #window_size
            sub_array << arr[i2]
        end
        new_arr << sub_array
    end

    new_arr.each do |array|
        min = array.min
        max = array.max
        range = max-min
        if current_max_range.nil?
            current_max_range = range
        elsif range > current_max_range
            current_max_range = range 
        end
    end
    return current_max_range
end

p windowed_max_range([1, 0, 2, 5, 4, 8], 2) == 4 # 4, 8
p windowed_max_range([1, 0, 2, 5, 4, 8], 3) == 5 # 0, 2, 5
p windowed_max_range([1, 0, 2, 5, 4, 8], 4) == 6 # 2, 5, 4, 8
p windowed_max_range([1, 3, 2, 5, 4, 8], 5) == 6 # 3, 2, 5, 4, 8