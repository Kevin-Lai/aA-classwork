require "byebug"

class HashSet
  attr_reader :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(key)
    if @count == num_buckets
       resize!
    end

    self[key] << key
    @count += 1    
  end

  def include?(key)
    self[key].include?(key)
  end

  def remove(key)
    unless self[key] == []
      self[key] = []
      @count -= 1
    end
  end

  private
  
  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    @store[num.hash % num_buckets]
  end

  def []=(num, other_val)
    @store[num.hash % num_buckets] = other_val
  end

  def num_buckets
    @store.length
  end

  def resize!
    values = @store.dup
  
    new_bucket_size = num_buckets*2
    
    @store = Array.new(new_bucket_size){Array.new}

    values.each do |key|
        self[key] = key
    end
  end
end
