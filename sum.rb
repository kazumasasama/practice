numbers = [5,2,6,1]

# Sum =====================

i = 0
sum = 0
while i  < numbers.length
  sum = sum + numbers[i]
  i += 1
end

p sum


sum = 0
numbers.each do |number|
  sum += number
end

p sum


# Bonus 1: Find the average of the numbers in the array

i = 0
sum = 0
while i  < numbers.length
  sum = sum + numbers[i]
  i += 1
end

ave = sum / numbers.length
p ave


sum = 0
numbers.each do |number|
  sum += number
end

ave = sum / numbers.length

p ave


# Bonus 2: Find the geometric mean of the numbers in the array



#  Terminal ====================
# 1. Create a folder in your home folder (the ~ folder) called ‘Actualize’. This will be where all of your course projects will go.
# 2. Create three subfolders within that folder. Choose whatever folder names you like.
# 3. Each subfolder should contain a text file.
# 4. In one of the text files, add a line of text (it can be anything)
# 5. Use this command to have the contents of that file spoken aloud: cat filename | say (replace filename with the name of your file)
# Bonus: Read this article for a really nice breakdown of some advanced terminal command usage: http://vegardstikbakke.com/unix/