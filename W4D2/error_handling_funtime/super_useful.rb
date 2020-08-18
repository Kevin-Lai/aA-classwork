# PHASE 2
def convert_to_int(str)
  begin
    var = Integer(str)

  rescue
    if !var.is_a?(Integer)
      return nil
    end
    
  ensure

  end
end

# PHASE 3
FRUITS = ["apple", "banana", "orange","coffee"]

def reaction(maybe_fruit)
  if FRUITS.include? maybe_fruit
    puts "OMG, thanks so much for the #{maybe_fruit}!"
  else 
    raise StandardError 
  end 
end

def feed_me_a_fruit
  puts "Hello, I am a friendly monster. :)"

  puts "Feed me a fruit! (Enter the name of a fruit:)"
  maybe_fruit = gets.chomp
  reaction(maybe_fruit) 
end  

# PHASE 4
class BestFriend
  def initialize(name, yrs_known, fav_pastime)
    name.length > 0 ? @name = name : raise "name has to be longer."
    yrs_known >=5 ? @yrs_known = yrs_known : raise "Need to know more years for friendship."
    fav_pastime > 0 ?  @fav_pastime = fav_pastime : raise "fav_pastime has to be longer."
  end

  def talk_about_friendship
    puts "Wowza, we've been friends for #{@yrs_known}. Let's be friends for another #{1000 * @yrs_known}."
  end

  def do_friendstuff
    puts "Hey bestie, let's go #{@fav_pastime}. Wait, why don't you choose. 😄"
  end

  def give_friendship_bracelet
    puts "Hey bestie, I made you a friendship bracelet. It says my name, #{@name}, so you never forget me." 
  end
end


