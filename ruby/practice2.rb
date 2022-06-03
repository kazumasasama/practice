# # Rewrite your store items using a class instead of a hash.
# # a) Choose which attributes should have “reader” methods and which attributes should have “writer” methods.
# # b) Create an instance from your store item class. Use puts statements to print the 3 attributes individually to the terminal.
# # Bonus: Read more about Ruby classes: https://ruby-doc.com/core/Class.htmclass

# class Store

#   attr_accessor :fruit_name, :fruit_color, :fruit_price

#   def initialize(fruit)
#     @fruit_name = fruit[:fruit_name]
#     @fruit_color = fruit[:fruit_color]
#     @fruit_price = fruit[:fruit_price]
#   end

#   def print
#     p "#{@fruit_name} is #{@fruit_color}, price is $#{@fruit_price}."
#   end

# end



# fruit = Store.new({
#   fruit_name: "banana",
#   fruit_color: "yellow",
#   fruit_price: 1
# })

# fruit.print



# # Rewrite your store items using a class with a single options hash in the initialize method.
# # Bonus: Read more alternatives to an options hash, try some out: http://www.sitepoint.com/method-signature-you-can-sink-your-teeth-into/ 
# # sitepoint.comsitepoint.com
# # Method Signature You Can Sink Your Teeth Into - SitePoint
# # Read Method Signature You Can Sink Your Teeth Into and learn with SitePoint. Our web development and design tutorials, courses, and books will teach you HTML, CSS, JavaScript, PHP, Python, and more.

# # Use the terminal to create a new file in your practice-ruby folder called inheritance_example.rb and open it in your text editor.
# # • Copy the Car and Bicycle class into your file: https://gist.github.com/peterxjang/e9b69b4de36b2c41ef4b
# # • Use inheritance to DRY up the classes. Note - a car is NOT in a type of bicycle, and a bicycle is NOT a type of car!
# # • To test it, create a bicycle and car instance from your newly modified classes (you can create them at the bottom of your file). First, have them accelerate. Then, make sure a bike can “Ring ring!” and a car “Beeeeeeep!”
# # Bonus: Read more about inheritance and object hierarchy in Ruby here: https://www.leighhalliday.com/object-hierarchy-in-ruby 


# nums = [*(1..5)]

# doubled_nums = []
# nums.each do |num|
# 	doubled_nums << num * 2
# end

# p doubled_nums # => [2, 4, 6, 8, 10]


# nums = [*(1..5)]

# doubled_nums = nums.map do |num|
# 	num * 2
# end

# p doubled_nums # => [2, 4, 6, 8, 10]



# def is_palindrome(x)
# 	string = x.to_s
# 	if string == string.reverse
# 		return true
# 	end
# 	return false
# end

# x = 121
# p is_palindrome(x) # => true

# x = -121
# p is_palindrome(x) # => false

# x = 10
# p is_palindrome(x) # => false
# FXSHRXW

def title_to_number(column_title)
	index = [*("A".."Z")]
	index_hash = {}
	j = 1
	index.each do |i|
		index_hash[i] = j
		j += 1
	end
	title_array = column_title.split(//)
	i = -1
	total = 0
	while i.abs <= title_array.length
		if i == -1
			total += index_hash[title_array[i]]
		elsif i == -2
			total += index_hash[title_array[i]] * 26
		elsif i == -3
			total += index_hash[title_array[i]] * (26 * 26)
		elsif i == -4
			total += index_hash[title_array[i]] * (26 * 26 * 26)
		elsif i == -5
			total += index_hash[title_array[i]] * (26 * 26 * 26 * 26)
		elsif i == -6
			total += index_hash[title_array[i]] * (26 * 26 * 26 * 26 * 26)
		elsif i == -7
			total += index_hash[title_array[i]] * (26 * 26 * 26 * 26 * 26 * 26)
		end
		i -= 1
	end
	return total
end

column_title = "A"
p title_to_number(column_title) # => 1

column_title = "AB"
p title_to_number(column_title) # => 28

column_title = "ZY"
p title_to_number(column_title) # => 701