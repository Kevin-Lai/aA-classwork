require_relative 'db_connection'
require 'active_support/inflector'
# NB: the attr_accessor we wrote in phase 0 is NOT used in the rest
# of this project. It was only a warm up.

class SQLObject
  def self.columns
    # ...
    @columns ||= (DBConnection.execute2(<<-SQL).first
      SELECT *
      FROM #{self.table_name}
      LIMIT 0
    SQL
    ).map!(&:to_sym)
  end

  def self.finalize!
    self.columns.each do |column|
      define_method(column){self.attributes[column]}
      define_method("#{column}="){|new_value| self.attributes[column] = new_value}
    end
  end

  def self.table_name=(table_name)
    # ...
    instance_variable_set("@table_name", table_name)
  end

  def self.table_name
    # ...
    instance_variable_get("@table_name") || self.name.underscore.pluralize
  end

  def self.all
    # ...
  end

  def self.parse_all(results)
    # ...
  end

  def self.find(id)
    # ...
  end

  def initialize(params = {})
    # ...
    # params is a hash
    params.each do |param, new_value|
      self.attributes[param.to_sym] = new_value
    end
  end

  def attributes
    # ...
    @attributes ||= {}
  end

  def attribute_values
    # ...
  end

  def insert
    # ...
  end

  def update
    # ...
  end

  def save
    # ...
  end
end
