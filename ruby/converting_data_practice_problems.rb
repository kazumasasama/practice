#  1. Convert an array of arrays into a hash.
#     For example, [[1, 3], [8, 9], [2, 16]] becomes {1 => 3, 8 => 9, 2 => 16}.

# nums = [[1, 3], [8, 9], [2, 16]]
# p nums.to_h

#  2. Convert an array of hashes into a hash using the :id key from the array's hashes as the keys in the new hash.
#     For example, [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}] becomes {1 => {id: 1, color: "blue", price: 32}, 2 => {id: 2, color: "red", price: 12}}.

# colors = [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}]
# colors_hash = {}
# colors.each do |color|
#   colors_hash[color[:id]] = color
# end
# p colors_hash

#  3. Convert a string into a hash with keys for each letter in the string and values for the number of times the letter appears in the string.
#     For example, "bookkeeper" becomes {"b" => 1, "o" => 2, "k" => 2, "e" => 3, "p" => 1, "r" => 1}.

# word = "bookkeeper".split(//)
# letters = {}
# word.each do |letter|
#   if letters[letter]
#     letters[letter] += 1
#   else
#     letters[letter] = 1
#   end
# end
# p letters

#  4. Convert a hash into an array of arrays.
#     For example, {"chair" => 100, "book" => 14} becomes [["chair", 100], ["book", 14]].

# products = {"chair" => 100, "book" => 14}
# p products.to_a


#  5. Convert a hash into an array of hashes using the keys from each hash as the :id key in each of the array's hashes.
#     For example, {321 => {name: "Alice", age: 31}, 322 => {name: "Maria", age: 27}} becomes [{id: 321, name: "Alice", age: 31}, {id: 322, name: "Maria", age: 27}].

# people = {321 => {name: "Alice", age: 31}, 322 => {name: "Maria", age: 27}}
# people_array = []
# people.each do |k, v|
#   v[:id] = k
#   people_array << v
# end
# p people_array

# p people.each{|k, v| v[:id] = k}.map{|k, v| v}

#  6. Convert an array of strings into a hash with keys for each string in the array and values for the number of times the string appears in the array.
#     For example, ["do", "or", "do", "not"] becomes {"do" => 2, "or" => 1, "not" => 1}.

# words = ["do", "or", "do", "not"]
# word_count = {}
# words.each do |word|
#   if word_count[word]
#     word_count[word] += 1
#   else
#     word_count[word] = 1
#   end
# end
# p word_count

#  7. Convert a hash into a flat array containing all the hash’s keys and values.
#     For example, {"a" => 1, "b" => 2, "c" => 3, "d" => 4} becomes ["a", 1, "b", 2, "c", 3, "d", 4].

# letters = {"a" => 1, "b" => 2, "c" => 3, "d" => 4}
# array = []
# letters.each do |k, v|
#   array << k
#   array << v
# end
# p array

#  8. Combine data from a hash with names and prices and an array of hashes with names, colors, and weights to make a new hash.
#     For example, {"chair" => 75, "book" => 15} and [{name: "chair", color: "red", weight: 10}, {name: "book", color: "black", weight: 1}] becomes {"chair" => {price: 75, color: "red", weight: 10}, "book" => {price: 15, color: "black", weight: 1}}.

# prices = {"chair" => 75, "book" => 15}
# products = [{name: "chair", color: "red", weight: 10}, {name: "book", color: "black", weight: 1}]
# combined = {}
# i = 0
# while i < products.length
#   product = products[i]
#   name = product[:name]
#   color = product[:color]
#   weight = product[:weight]
#   price = prices[name]
#   combined[name] = {price: price, color: color, weight: weight}
#   i += 1
# end
# p combined


#  9. Convert an array of hashes into a hash of arrays, using the author as keys and the titles as values.
#     For example, [{author: "Jeff Smith", title: "Bone"}, {author: "George Orwell", title: "1984"}, {author: "Jeff Smith", title: "RASL"}] becomes {"Jeff Smith" => ["Bone", "RASL"], "George Orwell" => ["1984"]}.

# books = [{author: "Jeff Smith", title: "Bone"}, {author: "George Orwell", title: "1984"}, {author: "Jeff Smith", title: "RASL"}]
# hash = {}
# i = 0
# while i < books.length
#   book = books[i]
#   author = book[:author]
#   title = book[:title]
#   if !hash[author]
#     hash[author] = []
#   end
#   hash[author] << title
#   i += 1
# end
# p hash

# 10. Given a hash, create a new hash that has the keys and values switched.
#     For example, {"a" => 1, "b" => 2, "c" => 3} becomes {1 => "a", 2 => "b", 3 => "c"}.

# nums = {"a" => 1, "b" => 2, "c" => 3}
# letters = {}
# nums.each do |k, v|
#   letters[v] = k
# end
# p letters

1: 30min

# SOLUTIONS: https://gist.github.com/peterxjang/216a7a6e8411ee5c05118e78022f2bc7