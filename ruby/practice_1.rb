# 1. Write a program that asks the user to enter a word, then prints that word with all capital letters.

# print "Enter a word: "
# word = gets.chomp.upcase
# puts word

# 2. Write a program that asks the user to enter a number, then prints "That's a big number" if the number is greater than 100.

# print "Enter a number: "
# number = gets.chomp.to_i

# if number > 100
#   puts "That's a big number"
# end


# 3. Write a program that asks the user to enter two numbers, then prints the numbers added together.

# numbers = []
# 2.times do
#   print "Enter two numbers at a time: "
#   numbers << gets.chomp.to_i
# end

# puts numbers[0] + numbers[1]

# 4. Write a program that asks the user to enter a word, then prints that word in reverse order.

# print "Enter a word: "
# word = gets.chomp.reverse

# puts word

# 5. Write a program that asks the user to enter a number, then prints the number times 10.

# print "Enter a number: "
# number = gets.chomp.to_i

# 10.times do
#   puts number
# end

# 6. Write a program that asks the user to enter two words, then prints both words on the same line in all capital letters.

# words = []
# print "Enter two words one at a time: "
# 2.times do
#   words << gets.chomp.upcase
# end

# puts words[0] + words[1]

# 7. Write a program that asks the user to enter a word, then prints the number of letters in the word.

# print "Enter a word: "
# length = gets.chomp.length
# p length

# 8. Write a program that asks the user to enter a number, then prints "That's a negative number" if the number is less than 0.

# print "Enter a number: "
# number = gets.chomp.to_i

# if number < 0
#   puts "That's a negative number"
# end

# 9. Write a program that asks the user to enter two numbers, then prints the two numbers multiplied together.

# print "enter two numbers one at a time: "
# number1 = gets.chomp.to_i
# number2 = gets.chomp.to_i
# puts number1 * number2


# 10. Write a program that asks the user to enter a word, then prints "That's a long word" if the word has more than 5 letters.

# print "Enter a word: "
# wordLength = gets.chomp.length

# if wordLength > 5
#   puts "That's a long word"
# end

# SOLUTIONS: https://gist.github.com/peterxjang/1539a3ad79728ba4fb68dd8d07279c29


# Given an array, write a function that returns an array that contains the original array’s values in reverse.

# Input: [1, 2, 3, 4, 5]
# Output: [5, 4, 3, 2, 1]

# write a method
# while loop
#  i => index
#  i = -1
# decrease the i in the while loop
# write an array to store the all values

# def reverse_array(nums)
#   i = -1
#   reversed_nums = []
#   while i.abs < nums.length + 1
#     reversed_nums << nums[i]
#     i -= 1
#   end
#   return reversed_nums
#   # return nums.reverse
# end

# nums = [1, 2, 3, 4, 5]
# p reverse_array(nums)
# nums = [5, 4, 3, 2, 1]
# p reverse_array(nums)
# nums = []
# p reverse_array(nums)


# p -1.abs
# p -1001101094897539.abs