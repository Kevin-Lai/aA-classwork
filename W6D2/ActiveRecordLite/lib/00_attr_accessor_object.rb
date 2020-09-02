class AttrAccessorObject
  def self.my_attr_accessor(*names)
    # ...
    names.each do |name|
      define_method(name){instance_variable_get("@#{name}")}
      
      define_method("#{name}="){|new_value| instance_variable_set("@#{name}", new_value)}
    end
  end
end
