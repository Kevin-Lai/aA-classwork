class Integer
  # Integer#hash already implemented for you
end

class Array
  def hash
    return nil.to_i.hash if self.empty?
    result = self.map.with_index do |el, idx|
      el.to_i.hash + idx.hash
    end

    result.inject(&:^) 
  end
end

class String
  def hash
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    0
  end
end
