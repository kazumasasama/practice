def longest_common_substring(a, b)
  index = Hash.new
  letters = a
  2.times do
    i = 0
    while i < letters.length
      if !index[letters[i]]
        index[letters[i]] = 1
      elsif index[letters[i]]
        index[letters[i]] = index[letters[i]] + 1
      end
      i += 1
    end
    letters = b
  end
  p index
  result = index.max{ |x, y| x[1] <=> y[1] }
  return "\"#{result[0]}\" is the longest common substring. Used #{result[1]} times."
end

puts longest_common_substring("abcabc", "cdecde") # => "c", 4 times
